import 'react-quill/dist/quill.snow.css'
import { formatDate } from '../../lib/data'
import { BsTrash3 } from 'react-icons/bs'

type Props = {
  id: number
  img: string
  sender: string
  relationship: string
  content: string
  createdAt: string
  onClick: (id: number) => void
  onDelete: (id: number) => void
}

export const MessageCard = ({
  id,
  img,
  sender,
  relationship,
  content,
  createdAt,
  onClick,
  onDelete,
}: Props) => {
  const date = formatDate(createdAt)
  const color =
    relationship === '동료'
      ? 'bg-purple-100 text-purple-600'
      : relationship === '가족'
      ? 'bg-green-100 text-green-600'
      : relationship === '친구'
      ? 'bg-sky-100 text-sky-600'
      : 'bg-amber-100 text-amber-600'
  return (
    <>
      <div
        onClick={() => onClick(id)}
        className='flex flex-col p-5 bg-white rounded-xl h-[280px] hover:bg-slate-100 cursor-pointer'
      >
        <div className='flex items-center'>
          <img
            src={img}
            alt='profile'
            className='object-cover rounded-full h-16 w-16'
          />
          <div className='flex flex-col items-start ml-3 gap-y-2'>
            <h2 className='text-xl line-clamp-1'>
              <span>From.</span>
              <span className='ml-2 font-bold '>{sender}</span>
            </h2>
            <div className={`py-1 px-2 rounded-lg ${color}`}>
              <span>{relationship}</span>
            </div>
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation()
              onDelete(id)
            }}
            className='ml-auto border-2 p-3 rounded-lg hover:bg-red-200 text-gray-600 hover:text-red-500'
          >
            <BsTrash3 />
          </button>
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
