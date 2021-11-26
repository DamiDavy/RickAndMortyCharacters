import styled from 'styled-components'

export const SemitransparentBackgroundForModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(161, 159, 160, 0.5);
`

export const CharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  justify-content: center;
  @media (max-width: 600px) {
    margin: 0rem;
    width: 95vw;
  }
`

export const CharacterInfo = styled.div`
  font-size: 1rem;
  min-width: 22rem;
  min-height: 12rem;
  max-width: 22rem;
  margin: 0.4rem;
  border: 1px solid rgba(27, 6, 189, 0.2);
  border-radius: 0.4rem;
  display: flex;
  flex-wrap: nowrap;
  color: rgb(86, 92, 88);
  background-color: #fefefe;
  box-shadow: 0 0.2rem 0.5rem 0 rgba(0,0,0, .3);
  & > div {
    padding: 0.5rem;
  }
  & p {
    font-size: 1rem;
    padding: 0;
    margin: 0 0 0.3rem;
  }
  @media (max-width: 600px) {
    min-width: 8rem;
  }
`

export const CharacterDetailsModal = styled(CharacterInfo)`
  font-size: 1.2rem;
  position: relative;
  margin: 10vh auto;
  border: none;
  border-radius: 0.2rem;
  width: 90%;
  max-width: 55rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.3), 0 2.5rem 5rem 0 rgba(0,0,0, .3);
  & > div {
    margin-bottom: 2rem;
  }
  @media (max-width: 600px) {
    margin: 2vh auto;
    display: block;
    height: 90vh;
    overflow-y: auto;
  }
`

export const CharacterImage = styled.img`
  cursor: pointer;
  margin: 0rem;
  display: block;
  width: 40%;
  object-fit: cover;
  border: none;
  border-radius: 0.1rem;
  opacity: 0.95;
  &:hover {
    opacity: 1.0;
  }
`

export const ImageOnDetailPage = styled(CharacterImage)`
  margin: 0rem;
  margin-right: 2rem;
  border-radius: 0.2rem;
  cursor: default;
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const StatusCircle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor || "gray"};
  display: inline-block;
  margin: 0.7rem 0.3rem 0rem 0rem;
`

export const StatusCircleOnDetailPage = styled(StatusCircle)`
  width: 1.3rem;
  height: 1.3rem;
`

export const Status = styled.div`
  display: inline-block;
  padding: 0.2rem;
  font-size: 1.3rem;
`

export const FieldHeader = styled.h5`
  margin: 0.2rem 0;
  font-size: 0.9em;
`

export const Field = styled.p`
  margin: 0rem 0rem 0.5rem;
`

export const Species = styled.h4`
  margin: 0.2rem 0;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`

export const ButtonToOpenDetails = styled.button`
  display: block;
  background-color: rgba(27, 6, 189, 0.0);
  color: gray;
  border: none;
  font-size: 1.3rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
  h4 {
    margin: 0;
    padding: 0;
  }
  &:hover {
    color: rgb(168, 15, 115);
  }
`

export const Info = styled.span`
  font-size: 1.3rem;
  padding-left: 1.2rem;
`