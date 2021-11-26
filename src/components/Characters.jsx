import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersThunk } from '../redux/characterReducer'
import { CharactersContainer } from '../styled-components/Character-styled'
import { Main } from '../styled-components/Characters-styled'
import { ShowHideFilterButton } from '../styled-components/Filters-styled'
import { Character } from './Character'
import { CharacterDetails } from './CharacterDetails'
import { Pagination } from './Pagination'

export function Characters({ filtersComponent, contentComponent }) {

  const [isCharacterDetailsVisible, toggleCharacterDetailsVisibility] = useState(false)
  const [chosenCharacterId, setChosenCharacterId] = useState(null)

  const dispatch = useDispatch()

  const characters = useSelector(state => state.characters)
  const searchedCharactersNumber = useSelector(state => state.charactersCount)

  useEffect(() => {
    dispatch(getCharactersThunk())
  }, [dispatch])

  function showCharacterDetails(id) {
    setChosenCharacterId(id);
    if (!isCharacterDetailsVisible) {
      toggleCharacterDetailsVisibility(true);
      // if (window.innerWidth > 800) {
      document.body.style.overflowY = 'hidden'
      // }
    }
  }

  function showFilters() {
    filtersComponent.current.style.display = 'block';
    contentComponent.current.style.display = 'none';
  }

  return (
    <Main>
      {isCharacterDetailsVisible ?
        <CharacterDetails
          characterId={chosenCharacterId}
          toggleCharacterDetailsVisibility={toggleCharacterDetailsVisibility} />
        : null}

      <ShowHideFilterButton onClick={showFilters}>Open Filters</ShowHideFilterButton>
      <p>{searchedCharactersNumber} characters found</p>
      <Pagination />

      <CharactersContainer>
        {characters ? characters.map(character => <Character
          key={character.id}
          character={character}
          showCharacterDetails={showCharacterDetails} />)
          : null}
      </CharactersContainer>

    </Main>
  )
}
