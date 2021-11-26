import React from 'react'
import {
  CharacterInfo, CharacterImage, StatusCircle,
  ButtonToOpenDetails
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
        <span>{character.status}</span><br />
        <p><b>{character.species}</b></p>
        {character.type ? <p>Type: {character.type}</p> : null}
        <p>Gender: {character.gender}</p>
      </div>
    </CharacterInfo>
  )
}
