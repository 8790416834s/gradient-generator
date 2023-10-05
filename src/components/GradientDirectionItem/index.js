import {ItemContainer, ButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeDirection} = props
  const {value, displayText} = directionDetails

  const onClickDirection = () => {
    changeDirection(value)
  }

  return (
    <ItemContainer>
      <ButtonItem type="button" onClick={onClickDirection}>
        {displayText}
      </ButtonItem>
    </ItemContainer>
  )
}

export default GradientDirectionItem
