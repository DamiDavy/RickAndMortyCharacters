import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCharactersThunk, toggleFilters } from '../redux/actionCreators&thunks'
import { stateType } from '../redux/store'

import { Main, CharactersContainer } from '../styled-components/Characters-styled'
import { ShowHideFilterButton, RemoveFiltersButton } from '../styled-components/Filters-styled'

import { Character } from './Character'
import { CharacterDetails } from './CharacterDetails'
import { Pagination } from './Pagination'

export const Characters: React.FC<RefObjectsAsProps> = ({ filtersComponent, contentComponent }) => {

  const [isCharacterDetailsVisible, toggleCharacterDetailsVisibility] = useState(false)
  const [chosenCharacterId, setChosenCharacterId] = useState(0)

  const characters = useSelector((state: stateType) => state.characters)
  const searchedCharactersNumber = useSelector((state: stateType) => state.charactersCount)
  const filtersIsActive = useSelector((state: stateType) => state.filtersIsActive)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharactersThunk(1))
  }, [dispatch])

  function showCharacterDetails(id: number) {
    setChosenCharacterId(id);
    if (!isCharacterDetailsVisible) {
      toggleCharacterDetailsVisibility(true);
      document.body.style.overflowY = 'hidden'
    }
  }

  function showFilters() {
    if (filtersComponent.current && contentComponent.current) {
      filtersComponent.current.style.display = 'block';
      contentComponent.current.style.display = 'none';
    }
  }

  function disableFilters() {
    dispatch(toggleFilters(false))
    dispatch(getCharactersThunk(1))
  }

  return (
    <Main>
      {isCharacterDetailsVisible ?
        <CharacterDetails
          characterId={chosenCharacterId}
          toggleCharacterDetailsVisibility={toggleCharacterDetailsVisibility} />
        : null}

      <ShowHideFilterButton onClick={showFilters}>Open Filters</ShowHideFilterButton>

      {characters ? <p>{searchedCharactersNumber} characters found</p> : null}

      {filtersIsActive ? <RemoveFiltersButton onClick={disableFilters}>
        Disable Filters
      </RemoveFiltersButton> : null}

      <Pagination />

      <CharactersContainer>
        {characters ? characters.map(character => <Character
          key={character.id}
          character={character}
          showCharacterDetails={showCharacterDetails} />)
          : <h2>No Characters Found</h2>}
      </CharactersContainer>
    </Main>
  )
}

export interface RefObjectsAsProps {
  filtersComponent: React.MutableRefObject<HTMLElement | null>,
  contentComponent: React.MutableRefObject<HTMLElement | null>,
}
