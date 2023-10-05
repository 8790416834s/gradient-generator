import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainHeading,
  MainContainer,
  SubHeading,
  SelectDirection,
  ColorsContainer,
  ColorsSubContainer,
  GenerateButton,
  InputColor,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    gradient: '',
    colorOne: `#8ae323`,
    colorTwo: `#014f7b`,
    activeDirection: 'top',
  }

  onChangeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  changeDirection = value => {
    this.setState({activeDirection: value})
  }

  onClickGenerate = () => {
    const {colorOne, colorTwo, activeDirection} = this.state
    const gradient = `to ${activeDirection}, ${colorOne}, ${colorTwo}`
    this.setState({gradient})
  }

  render() {
    const {gradient, colorOne, colorTwo} = this.state
    return (
      <MainContainer gradient={gradient} data-testid="gradientGenerator">
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <SubHeading>Choose Direction</SubHeading>
        <SelectDirection>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
              changeDirection={this.changeDirection}
            />
          ))}
        </SelectDirection>
        <SubHeading>Pick the Colors</SubHeading>
        <ColorsContainer>
          <ColorsSubContainer>
            <SubHeading>{colorOne}</SubHeading>
            <InputColor
              type="color"
              id="colorOne"
              onChange={this.onChangeColorOne}
              value={colorOne}
            />
          </ColorsSubContainer>
          <ColorsSubContainer>
            <SubHeading>{colorTwo}</SubHeading>
            <InputColor
              type="color"
              id="colorTwo"
              onChange={this.onChangeColorTwo}
              value={colorTwo}
            />
          </ColorsSubContainer>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.onClickGenerate}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}
export default GradientGenerator
