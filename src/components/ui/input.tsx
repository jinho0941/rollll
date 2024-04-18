type Props = {
  placeholder?: string
  type?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const Input = ({
  placeholder = '',
  type = 'text',
  disabled,
  onChange,
  value = '',
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      value={value}
      className='w-full outline-none border-2 rounded-lg py-2 px-5 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:animate-pulse'
    />
  )
}
