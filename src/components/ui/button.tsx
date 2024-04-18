type Props = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({ children, onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='w-full py-3 rounded-xl text-white bg-purple-600 hover:bg-purple-500 disabled:bg-purple-300 disabled:cursor-not-allowed'
    >
      {children}
    </button>
  )
}
