import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { AppLayout } from './components/AppLayout'
import { Navbar } from './components/Navbar'

function App() {
  const elementRoutes = useRoutes(routes)

  return (
    <>
      <Navbar />
        {elementRoutes}
    </>
  )
}

export default App
