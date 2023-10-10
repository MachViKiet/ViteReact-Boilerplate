import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.


const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#fff',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        }
      }
    }
  },
  
  // ...other properties
})

export default theme
