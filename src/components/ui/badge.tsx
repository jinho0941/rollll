type Props = {
  content: string
}

export const Badge = ({ content }: Props) => {
  return (
    <div className='rounded-full px-3 py-2 font-bold text-white bg-purple-600 inline'>
      {content}
    </div>
  )
}
