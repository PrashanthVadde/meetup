import React from 'react'

const HomeRouteContext = React.createContext({
  userName: '',
  selectedOption: '',
  updateDetails: () => {},
})

export default HomeRouteContext
