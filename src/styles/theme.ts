import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  spacing: [0, 4, 8, 16, 32, 64]
})

export default theme
