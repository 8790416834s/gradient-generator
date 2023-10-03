import {ItemContainer, ButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeDirection, activeDirectionId} = props
  const {value, displayText} = directionDetails
  console.log(activeDirectionId)
  const onClickDirection = () => {
    changeDirection(value)
  }
  return (
    <ItemContainer>
      <ButtonItem type="button" activeDirectionId onClick={onClickDirection}>
        {displayText}
      </ButtonItem>
    </ItemContainer>
  )
}

export default GradientDirectionItem
