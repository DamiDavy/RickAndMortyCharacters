import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersThunk, toggleFilters } from '../redux/characterReducer'
import { CharactersContainer } from '../styled-components/Character-styled'
import { Main } from '../styled-components/Characters-styled'
import { ShowHideFilterButton, RemoveFiltersButton } from '../styled-components/Filters-styled'
import { Character } from './Character'
import { CharacterDetails } from './CharacterDetails'
import { Pagination } from './Pagination'

export function Characters({ filtersComponent, contentComponent }) {

  const [isCharacterDetailsVisible, toggleCharacterDetailsVisibility] = useState(false)
  const [chosenCharacterId, setChosenCharacterId] = useState(null)

  const dispatch = useDispatch()

  const characters = useSelector(state => state.characters)
  const searchedCharactersNumber = useSelector(state => state.charactersCount)
  const filtersIsActive = useSelector(state => state.filtersIsActive)
  console.log(filtersIsActive)

  useEffect(() => {
    dispatch(getCharactersThunk())
  }, [dispatch])

  function showCharacterDetails(id) {
    setChosenCharacterId(id);
    if (!isCharacterDetailsVisible) {
      toggleCharacterDetailsVisibility(true);
      document.body.style.overflowY = 'hidden'
    }
  }

  function showFilters() {
    filtersComponent.current.style.display = 'block';
    contentComponent.current.style.display = 'none';
  }

  function disableFilters() {
    dispatch(toggleFilters(false))
    dispatch(getCharactersThunk())
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
