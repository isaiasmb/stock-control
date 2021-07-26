import React from 'react'
import ReactDOM from 'react-dom'
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Base from 'templates/Base'

import theme from './styles/theme'
import reportWebVitals from './reportWebVitals'
import './index.css'

const history = createBrowserHistory()

ReactDOM.render(
  <React.Fragment>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Base />
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.Fragment>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
