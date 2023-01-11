import styled from 'styled-components'

export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  font-family: 'Roboto';
`

export const WebLogo = styled.img`
  height: 50px;
  width: 160px;
  align-self: flex-start;
  justify-self: flex-start;
  margin-bottom: 50px;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 300px;
  width: 300px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormHeading = styled.h1`
  color: #334155;
  font-size: 40px;
  font-weight: 700;
`

export const FieldsStyles = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelStyles = styled.p`
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
`

export const InputElement = styled.input`
  height: 40px;
  width: 300px;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  padding: 6px;
  margin-bottom: 20px;
`
export const SelectEl = styled.select`
  height: 40px;
  width: 300px;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  padding: 6px;
  margin-bottom: 20px;
`

export const RegisterButton = styled.button`
  height: 40px;
  width: 160px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  background-color: #3b82f6;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`
