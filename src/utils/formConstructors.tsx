import * as React from 'react'
import { ClearInputButton } from "../styled-components/Common-styled"
import { TextInput, InputTitle, RadioInput, TextInputContainer } from "../styled-components/Filters-styled"

export const createTextInput = (title: string, value: string, placeholder: string,
  setValueCallback: (e: React.FormEvent<HTMLInputElement>) => void,
  clearTextCallback: () => void) => <>
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

export const createRadioInputs = (title: string, valuesArray: string[], selectedValue: string,
  setValueCallback: (e: React.FormEvent<HTMLInputElement>) => void) => <div>
    <InputTitle>{title}</InputTitle>
    {valuesArray.map((item: string) => <div key={item}><label htmlFor={item}>
      <RadioInput type="radio"
        id={item}
        value={item}
        checked={item === selectedValue}
        onChange={setValueCallback} />
      {item}
    </label></div>
    )}
  </div>