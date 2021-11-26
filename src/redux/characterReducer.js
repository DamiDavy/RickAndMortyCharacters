import axios from "axios"

const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS'
const UPDATE_PAGES = 'UPDATE_PAGES'
const CLEAR_STATE = 'CLEAR_STATE'
const DELETE_CHOSEN_CHARACTER = 'DELETE_CHOSEN_CHARACTER'
const SET_CHOSEN_CHARACTER = 'SET_CHOSEN_CHARACTER'
const SET_CHARACTER_EPISODE = 'SET_CHARACTER_EPISODE'

const instanse = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
})

// interface intakeInitialStateType {
//   intake: number,
//   id: number,
//   exists: boolean
// }

export const initialState = {
  pageNumber: 1,
  prevPageUrl: null,
  nextPageUrl: null,
  numberOfPages: null,
  charactersCount: 0,
  characters: [],
  chosenCharacter: null,
  chosenCharacterFirstEpisode: ''
}

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
        charactersCount: action.charactersCount,
      }
    case UPDATE_PAGES:
      return {
        ...state,
        pageNumber: action.pageNumber,
        prevPageUrl: action.prevPageUrl,
        nextPageUrl: action.nextPageUrl,
        numberOfPages: action.numberOfPages,
      }
    case SET_CHOSEN_CHARACTER:
      return {
        ...state,
        chosenCharacter: action.character
      }
    case SET_CHARACTER_EPISODE:
      return {
        ...state,
        chosenCharacterFirstEpisode: action.firstEpisodeTitle
      }
    case DELETE_CHOSEN_CHARACTER:
      return {
        ...state,
        chosenCharacter: null,
        chosenCharacterFirstEpisode: ''
      }
    case CLEAR_STATE:
      return initialState
    default:
      return state
  }
}

export const updatePages = (pageNumber, prevPageUrl, nextPageUrl, numberOfPages) => ({
  type: UPDATE_PAGES,
  pageNumber,
  prevPageUrl,
  nextPageUrl,
  numberOfPages
})

export const updateCharacters = (characters, charactersCount) => ({
  type: UPDATE_CHARACTERS,
  characters,
  charactersCount,
})

export const setChosenCharacter = character => ({
  type: SET_CHOSEN_CHARACTER,
  character,
})

export const setCharacterFirstEpisode = firstEpisodeTitle => ({
  type: SET_CHARACTER_EPISODE,
  firstEpisodeTitle,
})

export const deleteChosenCharacter = () => ({
  type: DELETE_CHOSEN_CHARACTER,
})

export const getCharactersThunk =
  (pageNumber = 1, name = '', status = '', species = '', type = '', gender = '') => async (dispatch) => {
    try {
      const result =
        await instanse.get(`/character/?page=${pageNumber}&name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`)
      if (result.status === 200) {
        const prevPageUrl = result.data.info.prev;
        const nextPageUrl = result.data.info.next;
        const numberOfPages = result.data.info.pages;
        dispatch(updatePages(pageNumber, prevPageUrl, nextPageUrl, numberOfPages))
        dispatch(updateCharacters(result.data.results, result.data.info.count))
      }
    } catch (err) {
      console.log(err)
      dispatch({ type: CLEAR_STATE })
    }
  }

export const getCharacterDetailsThunk = id => async (dispatch) => {
  try {
    const result =
      await instanse.get(`/character/${id}`)
    if (result.status === 200) {
      dispatch(setChosenCharacter(result.data))
    }
  } catch (err) {
    dispatch({ type: CLEAR_STATE })
  }
}

export const getCharacterFirstEpisode = id => async (dispatch) => {
  try {
    const result = await instanse.get(`/episode/${id}`)
    if (result.status === 200) {
      dispatch(setCharacterFirstEpisode(result.data.name))
    }
  } catch (err) {
    dispatch({ type: CLEAR_STATE })
  }
}