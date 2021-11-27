import styled from 'styled-components'

export const Form = styled.form`
  padding: 0rem 1rem 2rem 2rem;
  border-right: 1px solid #aaa;
  border-radius: 0.3rem;
  background-color: rgb(230, 252, 234);
  min-height: 100vh;
  position: fixed;
  top: 20%;
  width: 20%;
  box-shadow: 0 0.5rem 1rem 0 rgba(0,0,0, .3);
  overflow-y: auto;
  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 750px) {
    width: 90%;
    position: relative;
    min-height: 80vh;
  }
  @media (max-width: 350px) {
    min-height: 100vh;
  }
`

export const FormHeader = styled.h5`
 font-size: 1.5rem;
`

export const TextInput = styled.input`
  border: 1px solid gray;
  border-radius: 0.2rem;
  width: 100%;
  font-size: 1rem;
  padding: 0.3rem;
  color: #444;
`

export const InputTitle = styled.h4`
  margin: 0.5rem 0 0.3rem;
  padding:0;
  font-size: 1.1rem;
  font-weight: bolder;
`

export const RadioInput = styled.input`
  &[type='radio']:after {
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    top: -0.2rem;
    left: -0.3rem;
    position: relative;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  &[type='radio']:checked:after {
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    top: -0.2rem;
    left: -0.3rem;
    position: relative;
    background-color: rgb(72, 176, 147);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
`

export const SubmitFormButton = styled.button`
  display: block;
  width: 50%;
  background-color: rgb(72, 176, 147);
  color: white;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  margin: 0.2rem 1rem 0.3rem auto;
`

export const ClearFilterButton = styled(SubmitFormButton)`
  float: right;
  width: auto;
  margin-top: 2.2rem;
  margin-right: 4rem;
  background-color: white;
  color: rgb(34, 156, 119);
  background-color: rgb(230, 252, 234);
  &:hover {
    background-color: white;
  }
`

export const DisabledButton = styled(SubmitFormButton)`
  background-color: #bbb;
  color: white;
  cursor: default;
`

export const ShowHideFilterButton = styled(SubmitFormButton)`
  display: none;
  width: auto;
  float: right;
  @media (max-width: 750px) {
    display: inline;
  }
`

export const RemoveFiltersButton = styled(ClearFilterButton)`
  float: '';
  border: 1px solid rgb(43, 204, 158);
`

export const TextInputContainer = styled.div`
  max-width: 70%;
  margin: 0 0 0.7rem;
  padding: 0;
  position: relative;
`



