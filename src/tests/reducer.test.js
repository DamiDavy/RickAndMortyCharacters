import { characterReducer, initialState } from '../redux/charactersReducer'
import {
  setCharacterFirstEpisode, updateCharacters,
  setChosenCharacter, deleteChosenCharacter, clearState, toggleFilters
} from '../redux/actionCreators&thunks'

const characters = [{
  name: "Insurance Rick",
  status: "unknown",
  species: "Human",
  gender: "Male"
},
{
  name: "Morty’s Disguise",
  status: "Alive",
  species: "Human",
  type: "Soulless Puppet",
  gender: "Female"
}]

describe('characters reducer', () => {
  test('set characters and thier count', () => {
    const previousState = {}
    expect(characterReducer(previousState, updateCharacters({ characters, charactersCount: 2 }))).toEqual(
      {
        characters: characters,
        charactersCount: 2,
      }
    )
  })
  test('set chosen character', () => {
    const previousState = {}
    expect(characterReducer(previousState, setChosenCharacter(characters[0]))).toEqual(
      {
        chosenCharacter: characters[0],
      }
    )
  })
  test('delete chosen character', () => {
    const previousState = {
      chosenCharacter: characters[1],
      chosenCharacterFirstEpisode: 'Pilot',
    }
    expect(characterReducer(previousState, deleteChosenCharacter())).toEqual(
      {
        chosenCharacter: null,
        chosenCharacterFirstEpisode: "",
      }
    )
  })
  test('set character first episode', () => {
    const previousState = {}
    expect(characterReducer(previousState, setCharacterFirstEpisode('Pilot'))).toEqual(
      {
        chosenCharacterFirstEpisode: 'Pilot',
      }
    )
  })
  test('clear state', () => {
    const previousState = {
      chosenCharacter: characters[1],
      chosenCharacterFirstEpisode: 'Pilot',
    }
    expect(characterReducer(previousState, clearState())).toEqual(
      initialState
    )
  })
  test('enable filters', () => {
    const previousState = {
      filtersIsActive: false
    }
    expect(characterReducer(previousState, toggleFilters(true))).toEqual(
      {
        filtersIsActive: true
      }
    )
  })
  test('disable filters', () => {
    const previousState = {
      filtersIsActive: false
    }
    expect(characterReducer(previousState, toggleFilters(false))).toEqual(
      {
        filtersIsActive: false
      }
    )
  })
})