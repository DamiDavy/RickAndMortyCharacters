import styled from 'styled-components'

export const Main = styled.div`
  padding: 1rem;
  p {
    font-size: 1.1rem;
    color: gray;
    margin: 0rem;
  }
`

export const PageButton = styled.button`
  color: ${props => props.color || 'blue'};
  font-weight: ${props => !props.color && 'bolder'};
  background-color: white;
  font-size: 1.2rem;
  border: 1px solid ${props => props.color || 'blue'};
  border-radius: 0.2rem;
  margin: 0.05rem;
  cursor: ${props => props.color === 'blue' ? 'pointer' : 'default'};
  padding: 0.5rem;
  &:hover {
    color: ${props => props.color === 'blue' && 'rgb(168, 15, 115)'};
    border: 1px solid ${props => props.color === 'blue' && 'rgb(168, 15, 115)'};
  }
`

export const PaginationContainer = styled.div`
  margin-top: 1rem;
`