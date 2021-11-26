import styled from 'styled-components'

export const MainContainer = styled.div`
  color: rgb(0, 84, 133);
  display: flex;
  div {
    flex: 3;
  }
  aside {
    flex: 1;
  }
  @media (max-width: 600px) {
    display: block;
    div {
      display: block;
    }
    aside {
      display: none;
    }
  }
`

export const Header = styled.header`
  padding-left: 3rem;
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    margin: 1rem 0.5rem;
  }
  h2 {
    font-size: 1.2rem;
    position: absolute;
    bottom: -1.2rem;
    right: 2.6rem;
  }
`