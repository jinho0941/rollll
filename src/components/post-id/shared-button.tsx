import { IoShareOutline } from 'react-icons/io5'

type Props = {
  onClick: () => void
}

export const SharedButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='ml-3 py-1 px-3 border-2 rounded-lg hover:bg-slate-200'
    >
      <IoShareOutline className='h-6 w-6' />
    </button>
  )
}
