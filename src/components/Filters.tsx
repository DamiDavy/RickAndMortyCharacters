import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { getCharactersThunk, toggleFilters } from '../redux/actionCreators&thunks'

import { Form, FormHeader, DisabledButton, SubmitFormButton, ClearFilterButton } from '../styled-components/Filters-styled'
import { CloseFiltersButton } from '../styled-components/Common-styled'

import { RefObjectsAsProps } from './Characters'
import { createRadioInputs, createTextInput } from '../utils/formConstructors'

export const Filters: React.FC<RefObjectsAsProps> = ({ filtersComponent, contentComponent }) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [type, setType] = useState('')
  const [gender, setGender] = useState('')

  const statusTypes = ['alive', 'dead', 'unknown']
  const genderTypes = ['female', 'male', 'genderless', 'unknown']
  const isButtonDisabled =
    name === '' && status === '' && species === '' && type === '' && gender === ''

  const dispatch = useDispatch()

  function filterCharacters() {
    dispatch(getCharactersThunk(1, name, status, species, type, gender));
    dispatch(toggleFilters(true));
    if (window.innerWidth < 750) {
      hideFilters()
    }
  }

  function hideFilters() {
    if (filtersComponent.current && contentComponent.current) {
      filtersComponent.current.style.display = 'none'
      contentComponent.current.style.display = 'block'
    }
  }

  function clearAllFilters() {
    setName('');
    setStatus('');
    setSpecies('');
    setType('');
    setGender('');
  }

  return (
    <Form>
      <CloseFiltersButton type="button" onClick={hideFilters}>&#215;</CloseFiltersButton>
      <ClearFilterButton type="button" onClick={clearAllFilters}>Clear Filters</ClearFilterButton>
      <FormHeader>Filter by</FormHeader>

      {createTextInput('Name', name, 'type in name', (e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value),
        () => setName(''))}

      {createRadioInputs('Status', statusTypes, status,
        (e: React.FormEvent<HTMLInputElement>) => setStatus(e.currentTarget.value))}

      {createTextInput('Species', species, 'type in species',
        (e: React.FormEvent<HTMLInputElement>) => setSpecies(e.currentTarget.value),
        () => setSpecies(''))}

      {createTextInput('Type', type, 'enter type or subspecies',
        (e: React.FormEvent<HTMLInputElement>) => setType(e.currentTarget.value),
        () => setType(''))}

      {createRadioInputs('Gender', genderTypes, gender,
        (e: React.FormEvent<HTMLInputElement>) => setGender(e.currentTarget.value))}

      {isButtonDisabled ? <DisabledButton>Filter</DisabledButton> :
        <SubmitFormButton type="button" onClick={filterCharacters}>
          Filter
        </SubmitFormButton>}
    </Form>
  )
}
