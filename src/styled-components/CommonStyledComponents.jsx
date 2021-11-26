import styled from 'styled-components'

export const CloseOrCleanButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  padding: 0.4rem;
  border: none;
  background-color: rgba(0, 0, 0,  0);
  color: rgb(27, 6, 189);
  cursor: pointer;
`

export const CloseModalButton = styled(CloseOrCleanButton)`
  font-size: 1.6rem;
  font-weight: bold;
`

export const ClearInputButton = styled(CloseOrCleanButton)`
  font-size: 1.2rem;
  top: 0rem;
  right: 0rem;
`

export const backgroundColors = {
  alive: 'rgb(25, 227, 133)',
  dead: 'rgb(209, 67, 67)',
}