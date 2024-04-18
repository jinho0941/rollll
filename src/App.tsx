import { Outlet } from 'react-router-dom'
import { Header } from './components/app/header'

function App() {
  return (
    <>
      <Header />
      <div className='pt-14' />
      <Outlet />
    </>
  )
}

export default App
