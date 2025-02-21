import { StrictMode } from 'react'
import Router from './routes'
import { ThemeProvider } from './contexts/theme'
import { Toaster } from './components/ui/sonner'
const App: React.FC = () => {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router />
        <Toaster richColors={true} />
      </ThemeProvider>
    </StrictMode>
  )
}

export default App