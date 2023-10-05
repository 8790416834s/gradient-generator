import styled from 'styled-components'

export const ItemContainer = styled.li`
  display: flex;
`
export const ButtonItem = styled.button`
  color: #334155;
  opacity: ${props => (props.activeDirectionId ? 0.5 : 1)};
  background-color: ${props =>
    props.activeDirectionId ? '#ffffff78' : '#ffffff'};
  border-width: 0px;
  border-radius: 5px;
  margin: 5px;
  padding-left: 15px;
  padding-right: 15px;
`
