import styled from 'styled-components'

export const Main = styled.div`
  padding: 1rem;
  p {
    font-size: 1.1rem;
    color: gray;
    margin: 0rem;
  }
`
export const CharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  & h2 {
    width: 50%;
    margin: auto;
  }
  @media (max-width: 750px) {
    margin: 0rem;
    width: 95vw;
  }
`
export const PageButton = styled.button`
  color: ${props => props.color || 'Teal'};
  font-weight: ${props => !props.color && 'bolder'};
  background-color: white;
  background-color: ${props => !props.color && 'LightCyan'};
  font-size: 1.2rem;
  border: 1px solid ${props => props.color || 'Teal'};
  border-radius: 0.2rem;
  margin: 0.05rem;
  cursor: ${props => props.color === 'Teal' ? 'pointer' : 'default'};
  padding: 0.5rem;
  &:hover {
    background-color: ${props => props.color === 'Teal' && 'MediumAquaMarine'};
  }
`
export const PaginationContainer = styled.div`
  margin-top: 1rem;
`