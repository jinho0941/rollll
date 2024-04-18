import { LuSmilePlus } from 'react-icons/lu'

type Props = {
  onClick: () => void
}

export const IconPickerButton = ({ onClick }: Props) => {
  return (
    <button
      className='ml-3 py-1 px-3 border-2 rounded-lg hover:bg-slate-200'
      onClick={onClick}
    >
      <LuSmilePlus className='h-6 w-6 inline' />
      <span className='ml-1'>추가</span>
    </button>
  )
}
