type Props = {
  name: string
}

export const Owner = ({ name }: Props) => {
  return (
    <h2 className='text-xl font-bold'>
      <span>To.</span>
      <span className='ml-1'>{name}</span>
    </h2>
  )
}
