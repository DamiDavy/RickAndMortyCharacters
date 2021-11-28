import * as React from 'react'
import { characterType } from '../redux/charactersReducer'
import {
  CharacterInfo, CharacterImage, StatusCircle,
  ButtonToOpenDetails, TypeField
} from '../styled-components/Character-styled'


export const backgroundColors = {
  'alive': 'rgb(25, 227, 133)',
  'dead': 'rgb(209, 67, 67)',
}

export const Character: React.FC<PropsType> = ({ character, showCharacterDetails }) => {
  return (
    <CharacterInfo key={character.id}>

      <CharacterImage src={character.image} alt={`character ${character.name}`}
        onClick={() => showCharacterDetails(character.id)} />

      <div>
        <ButtonToOpenDetails onClick={() => showCharacterDetails(character.id)}>
          <h4>{character.name}</h4>
        </ButtonToOpenDetails>
        <StatusCircle color={backgroundColors[character.status.toLowerCase() as keyof typeof backgroundColors]} />
        <p>{character.status}</p>
        <p><b>{character.species}</b></p>
        {character.type ? <TypeField>Type: {character.type}</TypeField> : null}
        <p>Gender: {character.gender}</p>
      </div>

    </CharacterInfo >
  )
}

interface PropsType {
  character: characterType,
  showCharacterDetails: (id: number) => void
}