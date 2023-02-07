import { createTheme } from "@mui/material"
import openSans from './assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'

export const theme = createTheme({
    palette: {
        primary: {
            main: "#091625",
            dark: "#3A4451",
            light: "#535C67"
        },
        secondary: {
            main: "#FFFFFF",
            dark: "#E6E8E9"
        }
    },
    typography: {
        button: {
            textTransform: 'none',
        },
        fontFamily: 'Open Sans, sans-serif',
        h4: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: '1rem 0'
        },
        h6: {
            fontSize: '1.125rem',
            fontWeight: 'bold'
        },
        caption: {
            fontSize: '0.875rem',
            color: '#535C67'
        }
    }
})