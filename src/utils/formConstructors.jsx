import { ClearInputButton } from "../styled-components/CommonStyledComponents"
import { TextInput, InputTitle, RadioInput, TextInputContainer } from "../styled-components/Filters-styled"


export const createTextInput = (title, value, placeholder, setValueCallback, clearTextCallback) => <>
  <InputTitle>{title}</InputTitle>
  <TextInputContainer>
    <TextInput
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={setValueCallback}
    />
    <ClearInputButton type="button" onClick={clearTextCallback}>&#215;</ClearInputButton>
  </TextInputContainer>
</>

export const createRadioInputs = (title, valuesArray, selectedValue, setValueCallback) => <div>
  <InputTitle>{title}</InputTitle>
  {valuesArray.map(item => <div key={item}><label htmlFor={item}>
    <RadioInput type="radio"
      id={item}
      value={item}
      checked={item === selectedValue}
      onChange={setValueCallback} />
    {item}
  </label></div>
  )}
</div>