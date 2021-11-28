import axios from "axios"
import { characterType } from "./charactersReducer"
import { ThunkType } from "./store"

export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS'
export const UPDATE_PAGES = 'UPDATE_PAGES'
export const CLEAR_STATE = 'CLEAR_STATE'
export const DELETE_CHOSEN_CHARACTER = 'DELETE_CHOSEN_CHARACTER'
export const SET_CHOSEN_CHARACTER = 'SET_CHOSEN_CHARACTER'
export const SET_CHARACTER_EPISODE = 'SET_CHARACTER_EPISODE'
export const TOGGLE_FILTERS = 'TOGGLE_FILTERS'

//actionCreators
export function updatePages(pagination: paginationType) {
  return createAction(UPDATE_PAGES, "payload", pagination)
}
export function updateCharacters(charactersListAndTotalCount: charactersArrayAndTotalCount) {
  return createAction(UPDATE_CHARACTERS, "payload", charactersListAndTotalCount)
}
export function setChosenCharacter(character: characterType) {
  return createAction(SET_CHOSEN_CHARACTER, "payload", character)
}
export function setCharacterFirstEpisode(firstEpisodeTitle: string) {
  return createAction(SET_CHARACTER_EPISODE, "payload", firstEpisodeTitle)
}
export function deleteChosenCharacter() {
  return createAction(DELETE_CHOSEN_CHARACTER, '', null)
}
export function clearState() {
  return createAction(CLEAR_STATE, '', null)
}
export function toggleFilters(bool: boolean) {
  return createAction(TOGGLE_FILTERS, "payload", bool)
}

//thunks
const instanse = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
})

export const getCharactersThunk =
  (pageNumber: number, name = '', status = '', species = '', type = '', gender = ''): CharactersThunkType => {
    return async (dispatch) => {
      try {
        const result =
          await instanse.get(`/character/?page=${pageNumber}&name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`)
        if (result.status === 200) {
          const prevPageUrl = result.data.info.prev;
          const nextPageUrl = result.data.info.next;
          const numberOfPages = result.data.info.pages;
          dispatch(updatePages({ pageNumber, prevPageUrl, nextPageUrl, numberOfPages }))
          const characters = result.data.results;
          const charactersCount = result.data.info.count;
          dispatch(updateCharacters({ characters, charactersCount }))
        }
      } catch (err) {
        dispatch(clearState())
        dispatch(toggleFilters(true))
      }
    }
  }

export const getCharacterDetailsThunk = (id: number): CharactersThunkType => async (dispatch) => {
  try {
    const result =
      await instanse.get(`/character/${id}`)
    if (result.status === 200) {
      dispatch(setChosenCharacter(result.data))
    }
  } catch (err) {
    dispatch(clearState())
  }
}

export const getCharacterFirstEpisode = (id: number): CharactersThunkType => async (dispatch) => {
  try {
    const result = await instanse.get(`/episode/${id}`)
    if (result.status === 200) {
      dispatch(setCharacterFirstEpisode(result.data.name))
    }
  } catch (err) {
    dispatch(clearState())
  }
}

//types
export function createAction<T extends string, U, K extends string>(type: T, key: K, payload: U) {
  return ({
    type,
    [key]: payload
  }) as { type: T; } & { [P in K]: U }
}

interface paginationType {
  pageNumber: number,
  prevPageUrl: string,
  nextPageUrl: string,
  numberOfPages: number
}
interface charactersArrayAndTotalCount {
  characters: characterType[],
  charactersCount: number
}
export type CharactersActionType = ReturnType<typeof updatePages> | ReturnType<typeof setChosenCharacter> |
  ReturnType<typeof setCharacterFirstEpisode> | ReturnType<typeof deleteChosenCharacter> |
  ReturnType<typeof toggleFilters> | ReturnType<typeof updateCharacters> | ReturnType<typeof clearState>

type CharactersThunkType = ThunkType<CharactersActionType>