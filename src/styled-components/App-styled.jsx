import styled from 'styled-components'

export const MainContainer = styled.div`
  font-family: 'Helvetica', 'Arial', sans-serif;
  color: rgb(0, 84, 133);
  display: flex;
  div {
    flex: 3;
  }
  aside {
    flex: 1;
  }
  @media (max-width: 1200px) {
    div {
      flex: 1;
    }
    aside {
      flex: 1;
    }
  }
  @media (max-width: 800px) {
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
  color: rgb(15, 138, 123);
  padding-left: 1rem;
  position: fixed;
  display: inline-block;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    margin: 1rem 0.5rem;
    @media (max-width: 400px) {
      font-size: 2.2rem;
    }
  }
  h2 {
    font-size: 1.2rem;
    position: absolute;
    bottom: -1.2rem;
    right: 2.6rem;
  }
  @media (max-width: 800px) {
    position: relative;
  }
`

export const Footer = styled.footer`
  margin-bottom: 1rem;
  text-align: center;
  color: gray;
`