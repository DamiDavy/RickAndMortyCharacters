import React from 'react'
import { getCharactersThunk, toggleFilters } from '../redux/characterReducer'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createRadioInputs, createTextInput } from '../utils/formConstructors'
import { Form, FormHeader, DisabledButton, SubmitFormButton, ClearFilterButton } from '../styled-components/Filters-styled'
import { CloseFiltersButton } from '../styled-components/CommonStyledComponents'

export function Filters({ filtersComponent, contentComponent }) {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [type, setType] = useState('')
  const [gender, setGender] = useState('')

  const statusTypes = ['alive', 'dead', 'unknown']
  const genderTypes = ['female', 'male', 'genderless', 'unknown']

  const dispatch = useDispatch()

  function filterCharacters() {
    dispatch(getCharactersThunk(1, name, status, species, type, gender));
    dispatch(toggleFilters(true));
    if (window.innerWidth < 750) {
      hideFilters();
    }
  }

  const isButtonDisabled =
    name === '' && status === '' && species === '' && type === '' && gender === ''

  function hideFilters() {
    filtersComponent.current.style.display = 'none';
    contentComponent.current.style.display = 'block';
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
      {createTextInput('Name', name, 'type in name', (e) => setName(e.target.value),
        () => setName(''))}
      {/* <h5>Name</h5>
      <input value={name}
        type="text"
        placeholder="type in name"
        onChange={(e) => setName(e.target.value)}
      /> */}

      {createRadioInputs('Status', statusTypes, status, (e) => setStatus(e.target.value))}

      {/* <div>
        <h5>Status</h5>
        {statusTypes.map(statusType => <label for={statusType}>
          <input type="radio"
            id={statusType}
            value={statusType}
            checked={statusType === status}
            onChange={e => setStatus(statusType)} />
          {statusType}
        </label>
        )}
      </div> */}

      {createTextInput('Species', species, 'type in species', (e) => setSpecies(e.target.value),
        () => setSpecies(''))}

      {/* <h5>Species</h5>
      <input value={species}
        type="text"
        placeholder="type in species"
        onChange={(e) => setSpecies(e.target.value)}
      /> */}

      {/* <h5>Type</h5>
      <input value={type}
        type="text"
        placeholder="enter type or subspecies"
        onChange={(e) => setType(e.target.value)}
      /> */}

      {createTextInput('Type', type, 'enter type or subspecies', (e) => setType(e.target.value),
        () => setType(''))}


      {createRadioInputs('Gender', genderTypes, gender, e => setGender(e.target.value))}
      {/* <div>
        <h5>Gender</h5>
        {genderTypes.map(genderType => <label for={genderType}>
          <input type="radio"
            value={genderType}
            checked={genderType === gender}
            onChange={e => setGender(genderType)} />
          {genderType}
        </label>
        )}
      </div> */}

      {isButtonDisabled ? <DisabledButton>Filter</DisabledButton> :
        <SubmitFormButton type="button" onClick={filterCharacters}>
          Filter
        </SubmitFormButton>}
    </Form>
  )
}
