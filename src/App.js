import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import HomeRouteContext from './context/homeRouteContext'
import Home from './components/Home'
import Register from './components/Register'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const updatedRegister = <Register topicsListDetails={topicsList} />

// Replace your code here
class App extends Component {
  state = {
    userName: '',
    selectedOption: '',
  }

  updateDetails = (name, option) => {
    this.setState({userName: name, selectedOption: option})
  }

  render() {
    const {userName, selectedOption} = this.state
    return (
      <HomeRouteContext.Provider
        value={{
          userName,
          selectedOption,
          updateDetails: this.updateDetails,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={updatedRegister} />
        </Switch>
      </HomeRouteContext.Provider>
    )
  }
}

export default App
