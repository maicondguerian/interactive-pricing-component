import React from 'react'
import Card from './components/Card'
import { GlobalStyles } from './styles/styled-components/globalStyles'
import { InputHooksProvider } from './contexts/GlobalContext'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/styled-components/theme'
import Container from './components/Container'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <InputHooksProvider>
          <Card />
        </InputHooksProvider>
      </Container>
      <GlobalStyles />
    </ThemeProvider >
  )
}
export default App;