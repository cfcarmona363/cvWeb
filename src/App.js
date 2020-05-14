import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Router from './Router'
import LanguageProvider from './context/languageContext'

const App = () => {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </Provider>
  )
}

export default App
