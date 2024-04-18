import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/'>
      <button className='p-2 hover:bg-slate-200'>
        <img src='/logo.png' alt='logo' />
      </button>
    </Link>
  )
}
