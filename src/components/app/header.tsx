import { Link } from 'react-router-dom'
import { Logo } from '../logo'

export const Header = () => {
  return (
    <header className='fixed w-full border-b shadow-sm bg-white z-50'>
      <div className='xl:w-[1200px] xl:px-0 md:px-10 px-5 w-full mx-auto h-14 flex items-center justify-between'>
        <Logo />
        <Link to='/post'>
          <button className='border border-gray-500 p-2 rounded-lg hover:bg-slate-200'>
            롤링 페이퍼 만들기
          </button>
        </Link>
      </div>
    </header>
  )
}
