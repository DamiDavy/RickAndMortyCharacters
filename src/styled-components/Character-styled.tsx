import styled from 'styled-components'

//styles for character item
export const CharacterInfo = styled.div`
  font-size: 1rem;
  min-width: 22rem;
  min-height: 12rem;
  max-width: 22rem;
  margin: 0.4rem;
  border: 1px solid rgba(27, 6, 189, 0.2);
  border-radius: 0.4rem;
  display: flex;
  color: rgb(86, 92, 88);
  box-shadow: 0 0.2rem 0.5rem 0 rgba(0,0,0, .3);
  & > div {
    padding: 0.5rem;
  }
  & p {
    font-size: 1rem;
    padding: 0;
    margin: 0 0 0.3rem;
  }
  @media (max-width: 750px) {
    min-width: 8rem;
    height: 10rem;
    display: block;
    & > div {
      margin-left: 40%;
      height: 10rem;
    }
  }
  @media (max-width: 400px) {
    min-width: 8rem;
    min-height: 8rem;
    display: block;
    & > div {
      margin-left: 40%;
      height: 8rem;
    }
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
  @media (max-width: 750px) {
    float: left;
    min-height: 100%;
    opacity: 1.0;
  }
`
export const StatusCircle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.color || "gray"};
  margin: 0.1rem 0.3rem;
  float: left;
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
    min-height: 3rem;
    margin: 0.5rem 0rem;
    padding: 0;
    @media (max-width: 400px) {
      font-size: 1rem;
    }
  }
  &:hover {
    color: rgb(168, 15, 115);
  }
`

//styles for character modal
export const SemitransparentBackgroundForModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(204, 235, 234, 0.4);
`
export const CharacterDetailsModal = styled(CharacterInfo)`
  font-size: 1.2rem;
  position: relative;
  margin: 15vh auto;
  border: none;
  border-radius: 0.2rem;
  width: 90%;
  max-width: 55rem;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.3), 0 2.5rem 5rem 0 rgba(0,0,0, .3);
  & > div {
    margin: 0.8rem 2rem;
  }
  @media (max-width: 750px) {
    height: 80vh;
    display: block;
    padding-bottom: 3rem;
    margin: 5vh auto;
    overflow-y: scroll;
  }
`
export const CharacterDetailedInfo = styled.div`
  h3 {
    font-size: 1.6rem;
    margin: 0.3rem 0rem 1rem;
  }
`
export const ImageOnDetailPage = styled(CharacterImage)`
  width: 50%;
  margin: 0;
  border-radius: 0.2rem;
  cursor: default;
  @media (max-width: 750px) {
    width: 100%;
    min-height: 50vh;
    margin-bottom: 1rem;
  }
`
export const StatusCircleOnDetailPage = styled(StatusCircle)`
  width: 1.3rem;
  height: 1.3rem;
  float: left;
`
export const Status = styled.div`
  display: inline-block;
  padding: 0 0.2rem;
  font-size: 1.3rem;
`
export const FieldHeader = styled.h5`
  margin: 0.2rem 0;
  font-size: 0.9em;
  @media (max-width: 400px) {
    padding: 0rem;
    margin: 0rem;
  }
`
export const Field = styled.p`
  margin: 0rem 0rem 0.5rem;
`
export const TypeField = styled.p`
  @media (max-width: 400px) {
    display: none;
  }
`
export const Species = styled.h4`
  font-size: 1.3rem;
  width: 50%;
  margin: 0.5rem 0.5 rem 1rem;
`
export const Info = styled.div`
  font-size: 1.2rem;
  margin: 0rem 0rem 1rem 1.5rem;
`
export const LastInfo = styled(Info)`
  padding-bottom: 3rem;
`
