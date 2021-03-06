import styled from 'styled-components'

export const CloseOrCleanButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  padding: 0.4rem;
  border: none;
  background-color: rgba(0, 0, 0,  0);
  color: gray;
  cursor: pointer;
`
export const CloseModalButton = styled(CloseOrCleanButton)`
  font-size: 1.6rem;
  width: 2.2rem;
  height: 2.2rem;
  font-weight: bold;
  &:hover {
    color: color: rgb(27, 6, 189);
  }
  @media (max-width: 750px) {
    padding: 0.2rem 0.5rem;
    background-color: whitesmoke;
    border: 1px solid gray;
    border-radius: 50%;
  }
`
export const CloseFiltersButton = styled(CloseModalButton)`
  top: 2rem;
  right: 2rem;
  width: 2.2rem;
  height: 2.2rem;
  @media (min-width: 750px) {
    display: none;
  }
`
export const ClearInputButton = styled(CloseOrCleanButton)`
  font-size: 1.2rem;
  top: 0.1rem;
  bottom: 0.1rem;
  right: 0.3rem;
  width: 1.3rem;
  height: 1.3rem;
`