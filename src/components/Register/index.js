import {Component} from 'react'
import HomeRouteContext from '../../context/homeRouteContext'

import {
  RegisterPageContainer,
  WebLogo,
  LoginContainer,
  LoginImage,
  FormContainer,
  FormHeading,
  FieldsStyles,
  LabelStyles,
  InputElement,
  SelectEl,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'

class Register extends Component {
  state = {
    username: '',
    selectOption: 'Arts and Culture',
    emptyUsername: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangeOption = event => {
    this.setState({selectOption: event.target.value})
  }

  renderUserNameField = () => {
    const {username} = this.state

    return (
      <FieldsStyles>
        <LabelStyles htmlFor="name">NAME</LabelStyles>
        <InputElement
          id="name"
          value={username}
          onChange={this.onChangeUserName}
          placeholder="Your name"
        />
      </FieldsStyles>
    )
  }

  renderOptionField = () => {
    const {selectOption} = this.state
    const {topicsListDetails} = this.props

    return (
      <FieldsStyles>
        <LabelStyles htmlFor="option">TOPICS</LabelStyles>
        <SelectEl
          id="option"
          value={selectOption}
          onChange={this.onChangeOption}
        >
          {/* {topicsListDetails.map(eachTopic => (
            <option key={eachTopic.id} value={eachTopic.displayText}>
              {eachTopic.displayText}
            </option>
          ))} */}
          <option key="1" value="shanth">
            Prashanth
          </option>
          <option key="2" value="boaz">
            Boaz
          </option>

          <option key="3" value="hayath">
            Hayath
          </option>
        </SelectEl>
      </FieldsStyles>
    )
  }

  render() {
    const {username, selectOption, emptyUsername} = this.state

    return (
      <HomeRouteContext.Consumer>
        {value => {
          const {updateDetails} = value

          const onClickRegisterBtn = () => {
            if (username === '') {
              this.setState({emptyUsername: true})
            } else {
              this.setState({emptyUsername: false})
              updateDetails(username, selectOption)

              const {history} = this.props

              history.replace('/')
            }
          }

          return (
            <RegisterPageContainer>
              <WebLogo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <LoginContainer>
                <LoginImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormContainer>
                  <FormHeading>Let us join</FormHeading>
                  {this.renderUserNameField()}
                  {this.renderOptionField()}
                  <RegisterButton type="button" onClick={onClickRegisterBtn}>
                    Register Now
                  </RegisterButton>
                  {emptyUsername && <ErrorMsg>Please enter your name</ErrorMsg>}
                </FormContainer>
              </LoginContainer>
            </RegisterPageContainer>
          )
        }}
      </HomeRouteContext.Consumer>
    )
  }
}

export default Register
