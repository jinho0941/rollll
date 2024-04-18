type Props = {
  isSelected: boolean
  onClick: () => void
  children: React.ReactNode
}

export const SelectButton = ({ isSelected, onClick, children }: Props) => {
  return (
    <button
      className={`py-2 font-extrabold w-32 rounded-lg ${
        isSelected
          ? 'border-2 border-purple-600 text-purple-600 bg-white'
          : 'bg-gray-200 text-black'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
