type Props = {
  count: number
}

export const CountWriter = ({ count }: Props) => {
  return (
    <div className='lg:flex hidden'>
      <span className='font-bold'>{count}</span>
      <span>명이 작성했어요!</span>
    </div>
  )
}
