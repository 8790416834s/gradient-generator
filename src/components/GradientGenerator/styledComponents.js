// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background-image: linear-gradient(${props => props.gradient});
  height: 100vh;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
`
export const SubHeading = styled.p`
  font-family: 'Roboto';
  color: #ededed;
`
export const SelectDirection = styled.ul`
  display: flex;
`
export const OptionDirection = styled.li`
  display: flex;
  margin-right: 20px;
`
export const OptionButton = styled.button`
  margin: 5px;
`
export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const InputColor = styled.input``
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: bold;
  border-width: 0px;
  border-radius: 5px;
  padding: 5px;
  margin-top: 30px;
`
export const ColorsSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-left: 50px;
`
