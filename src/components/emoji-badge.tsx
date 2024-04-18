type Props = {
  emoji: string
  count: number
}

export const EmojiBadge = ({ emoji, count }: Props) => {
  return (
    <div className='flex items-center bg-black/50 rounded-full py-1 px-3 text-white'>
      <span>{emoji}</span>
      <span className='ml-1'>{count}</span>
    </div>
  )
}
