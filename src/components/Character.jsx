import React from 'react'
import {
  CharacterInfo, CharacterImage, StatusCircle,
  ButtonToOpenDetails, TypeField
} from '../styled-components/Character-styled'
import { backgroundColors } from '../styled-components/CommonStyledComponents'

export function Character({ character, showCharacterDetails }) {
  return (
    <CharacterInfo key={character.id}>
      <CharacterImage src={character.image} alt={`character ${character.name}`}
        onClick={() => showCharacterDetails(character.id)} />
      <div>
        <ButtonToOpenDetails onClick={() => showCharacterDetails(character.id)}>
          <h4>{character.name}</h4>
        </ButtonToOpenDetails>
        <StatusCircle backgroundColor={backgroundColors[character.status.toLowerCase()]} />
        <p>{character.status}</p>
        <p><b>{character.species}</b></p>
        {character.type ? <TypeField>Type: {character.type}</TypeField> : null}
        <p>Gender: {character.gender}</p>
      </div>
    </CharacterInfo >
  )
}
