import { FaCircleCheck } from 'react-icons/fa6'

type Props = {
  isSelected: boolean
  onClick: () => void
  color: 'beige' | 'purple' | 'blue' | 'green'
}

export const ColorButton = ({ isSelected, onClick, color }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`aspect-square rounded-xl flex justify-center items-center 
      ${color === 'beige' && 'bg-amber-200'}
      ${color === 'purple' && 'bg-purple-300'}
      ${color === 'blue' && 'bg-sky-300'}
      ${color === 'green' && 'bg-green-300'}
      
      `}
    >
      {isSelected && <FaCircleCheck className='text-black/60 h-12 w-12' />}
    </button>
  )
}
