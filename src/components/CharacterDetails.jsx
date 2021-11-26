import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteChosenCharacter, getCharacterDetailsThunk, getCharacterFirstEpisode } from '../redux/characterReducer'
import {
  SemitransparentBackgroundForModal, CharacterDetailsModal,
  ImageOnDetailPage, StatusCircleOnDetailPage, CharacterDetailedInfo,
  FieldHeader, Field, Species, Info, LastInfo
} from '../styled-components/Character-styled'
import { backgroundColors, CloseModalButton } from '../styled-components/CommonStyledComponents'

export function CharacterDetails({ characterId, toggleCharacterDetailsVisibility }) {

  const dispatch = useDispatch()

  const chosenCharacter = useSelector(state => state.chosenCharacter)
  const chosenCharacterFirstEpisode = useSelector(state => state.chosenCharacterFirstEpisode)

  useEffect(() => {
    dispatch(getCharacterDetailsThunk(characterId))
  }, [dispatch, characterId])

  useEffect(() => {
    if (chosenCharacter) {
      const firstEpisodeUrl = chosenCharacter.episode[0];
      const firstEpisodeId = firstEpisodeUrl.match(/\d+$/)[0];
      dispatch(getCharacterFirstEpisode(firstEpisodeId))
    }
  }, [chosenCharacter, dispatch])

  function hideCharacterDetails() {
    toggleCharacterDetailsVisibility(false)
    document.body.style.overflowY = '' // - padding
    dispatch(deleteChosenCharacter());
  }

  return <div>
    {chosenCharacter ? <SemitransparentBackgroundForModal>
      <CharacterDetailsModal>
        <ImageOnDetailPage src={chosenCharacter.image} alt={`character ${chosenCharacter.name}`} />
        <CharacterDetailedInfo>
          <h3>{chosenCharacter.name}</h3>
          <StatusCircleOnDetailPage backgroundColor={backgroundColors[chosenCharacter.status.toLowerCase()]} />
          <span>{chosenCharacter.status}</span><br />
          <Species>{chosenCharacter.species}</Species>
          {chosenCharacter.type ?
            <Field>
              <FieldHeader>type:</FieldHeader>
              <Info>{chosenCharacter.type}</Info></Field> : null}
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