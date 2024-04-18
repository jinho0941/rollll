import { formatDate } from '../../lib/data'
import { Button } from '../ui/button'

type Props = {
  img: string
  sender: string
  relationship: string
  createdAt: string
  content: string
  onClose: () => void
}

export const MessageModal = ({
  img,
  sender,
  relationship,
  createdAt,
  content,
  onClose,
}: Props) => {
  const stopPropagation = (e: any) => {
    e.stopPropagation()
  }
  const date = formatDate(createdAt)
  return (
    <div
      onClick={onClose}
      className='fixed inset-0 h-screen w-screen z-[9999] bg-black/30 flex justify-center items-center'
    >
      <div
        onClick={stopPropagation}
        className='p-10 bg-white  md:w-[666px]  rounded-xl'
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
          <div className='mt-5 ml-auto text-sm'>{date}</div>
        </div>

        <hr className='mt-4' />
        <div
          className='mt-5 h-[200px] overflow-auto'
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className='mt-10 flex justify-center'>
          <div className='w-[120px]'>
            <Button onClick={onClose}>확인</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
