type Props = {
  img: string
  color: string
  // color: 'beige' | 'purple' | 'blue' | 'green'
}

export const Background = ({ img, color }: Props) => {
  return (
    <>
      {!!img ? (
        <img
          src={img}
          alt='bg'
          className='w-full h-full object-cover brightness-50'
        />
      ) : (
        <div
          className={`w-full h-full       
          ${color === 'beige' && 'bg-amber-200'}     
          ${color === 'purple' && 'bg-purple-300'}      
          ${color === 'blue' && 'bg-blue-300'}      
          ${color === 'green' && 'bg-green-300'}
      `}
        />
      )}
    </>
  )
}
