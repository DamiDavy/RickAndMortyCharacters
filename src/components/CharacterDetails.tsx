import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteChosenCharacter, getCharacterDetailsThunk, getCharacterFirstEpisode } from '../redux/actionCreators&thunks'
import { stateType } from '../redux/store'

import {
  SemitransparentBackgroundForModal, CharacterDetailsModal,
  ImageOnDetailPage, StatusCircleOnDetailPage, CharacterDetailedInfo,
  FieldHeader, Field, Species, Info, LastInfo
} from '../styled-components/Character-styled'
import { CloseModalButton } from '../styled-components/Common-styled'
import { backgroundColors } from './Character'

export const CharacterDetails: React.FC<PropsType> = ({ characterId, toggleCharacterDetailsVisibility }) => {

  const chosenCharacter = useSelector((state: stateType) => state.chosenCharacter)
  const chosenCharacterFirstEpisode = useSelector((state: stateType) => state.chosenCharacterFirstEpisode)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacterDetailsThunk(characterId))
  }, [dispatch, characterId])

  useEffect(() => {
    if (chosenCharacter) {
      const firstEpisodeUrl = chosenCharacter.episode[0]
      const firstEpisodeId = firstEpisodeUrl.match(/\d+$/)
      if (firstEpisodeId) {
        dispatch(getCharacterFirstEpisode(+firstEpisodeId[0]))
      }
    }
  }, [chosenCharacter, dispatch])

  function hideCharacterDetails() {
    toggleCharacterDetailsVisibility(false)
    document.body.style.overflowY = ''
    dispatch(deleteChosenCharacter());
  }

  return <div>
    {chosenCharacter ? <SemitransparentBackgroundForModal>
      <CharacterDetailsModal>
        <ImageOnDetailPage src={chosenCharacter.image} alt={`character ${chosenCharacter.name}`} />
        <CharacterDetailedInfo>
          <h3>{chosenCharacter.name}</h3>
          <StatusCircleOnDetailPage
            color={backgroundColors[chosenCharacter.status.toLowerCase() as keyof typeof backgroundColors]} />
          <span>{chosenCharacter.status}</span><br />
          <Species>{chosenCharacter.species}</Species>
          {chosenCharacter.type ?
            <Field>
              <FieldHeader>type:</FieldHeader>
              <Info>{chosenCharacter.type}</Info>
            </Field> : null}
          <Field>
            <FieldHeader>gender:</FieldHeader>
            <Info>{chosenCharacter.gender}</Info>
          </Field>
          <Field>
            <FieldHeader>origin:</FieldHeader>
            <Info>{chosenCharacter.origin.name}</Info>
          </Field>
          <Field>
            <FieldHeader>last known location:</FieldHeader>
            <Info>{chosenCharacter.location.name}</Info>
          </Field>
          {chosenCharacterFirstEpisode ? <Field>
            <FieldHeader>first seen in:</FieldHeader>
            <LastInfo>{chosenCharacterFirstEpisode}</LastInfo>
          </Field> : null}
        </CharacterDetailedInfo>

        <CloseModalButton onClick={hideCharacterDetails}>&#215;</CloseModalButton>
      </CharacterDetailsModal>
    </SemitransparentBackgroundForModal> : null}
  </div>
}

interface PropsType {
  characterId: number,
  toggleCharacterDetailsVisibility: (bool: boolean) => void
}