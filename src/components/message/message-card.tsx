import 'react-quill/dist/quill.snow.css'
import { formatDate } from '../../lib/data'

type Props = {
  id: number
  img: string
  sender: string
  relationship: string
  content: string
  createdAt: string
  onClick: (id: number) => void
}

export const MessageCard = ({
  id,
  img,
  sender,
  relationship,
  content,
  createdAt,
  onClick,
}: Props) => {
  const date = formatDate(createdAt)
  return (
    <>
      <div
        onClick={() => onClick(id)}
        className='flex flex-col p-5 bg-white rounded-xl h-[280px] hover:bg-slate-200 cursor-pointer'
      >
        <div className='flex'>
          <img
            src={img}
            alt='profile'
            className='object-cover rounded-full h-16 w-16'
          />
          <div className='flex flex-col items-start ml-3 gap-y-2'>
            <h2 className='text-xl'>
              <span>From.</span>
              <span className='ml-2 font-bold truncate'>{sender}</span>
            </h2>
            <div className='py-1 px-2 rounded-lg bg-slate-200 '>
              <span className='text-slate-800'>{relationship}</span>
            </div>
          </div>
        </div>
        <hr className='mt-4' />
        <div
          className='line-clamp-3 mt-5'
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className='mt-auto text-sm'>{date}</div>
      </div>
    </>
  )
}
