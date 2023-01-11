import HomeRouteContext from '../../context/homeRouteContext'

import {
  HomeContainer,
  WebLogo,
  RegisterPartHeading,
  RegisterPartParagraph,
  ButtonEl,
  RegisterViewHeading,
  RegisterViewPara,
  MeetupImage,
} from './styledComponents'

const Home = props => (
  <HomeRouteContext.Consumer>
    {value => {
      const {userName, selectedOption} = value

      const onClickRegisterBtn = () => {
        const {history} = props
        history.replace('/register')
      }

      return (
        <HomeContainer>
          <WebLogo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          {userName === '' ? (
            <>
              <RegisterPartHeading>Welcome to Meetup</RegisterPartHeading>
              <RegisterPartParagraph>
                Please register for the topic
              </RegisterPartParagraph>
              <ButtonEl type="button" onClick={onClickRegisterBtn}>
                Register
              </ButtonEl>
            </>
          ) : (
            <>
              <RegisterViewHeading>Hello {userName}</RegisterViewHeading>
              <RegisterViewPara>Welcome to {selectedOption}</RegisterViewPara>
            </>
          )}
          <MeetupImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeContainer>
      )
    }}
  </HomeRouteContext.Consumer>
)

export default Home
