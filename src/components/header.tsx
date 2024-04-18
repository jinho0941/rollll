import { Logo } from './logo'

export const Header = () => {
  return (
    <header className='fixed w-full shadow-md bg-white z-50'>
      <div className='xl:w-[1200px] xl:px-0 md:px-10 px-5 w-full mx-auto h-14 flex items-center justify-between'>
        <Logo />
      </div>
    </header>
  )
}
