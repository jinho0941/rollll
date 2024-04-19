import { Link } from 'react-router-dom'
import { IMessage, ITopReaction } from '../../hooks/get-post-data'
import { EmojiBadge } from '../emoji-badge'

type Props = {
  id: number
  username: string
  recentMessages: IMessage[]
  messageCount: number
  bgcolor: string
  img: string | null
  topReactions: ITopReaction[]
}

export const ListCard = ({
  id,
  username,
  recentMessages,
  messageCount,
  bgcolor,
  img,
  topReactions,
}: Props) => {
  return (
    <Link to={`/post/${id}`} className=' relative aspect-square'>
      <>
        {!!img ? (
          <img
            src={img}
            alt='bg'
            className='w-full h-full object-cover brightness-50 rounded-xl'
          />
        ) : (
          <div
            className={`w-full h-full rounded-xl       
              ${bgcolor === 'beige' && 'bg-amber-200'}     
              ${bgcolor === 'purple' && 'bg-purple-300'}      
              ${bgcolor === 'blue' && 'bg-blue-300'}      
              ${bgcolor === 'green' && 'bg-green-300'}
            `}
          />
        )}
        <div className='absolute inset-0 p-5 mt-5'>
          <h2
            className={`font-bold text-2xl line-clamp-2 ${
              !!img && 'text-white'
            }`}
          >
            {username}
          </h2>
          <div className='relative w-full flex items-center mt-10'>
            {recentMessages.map((message, i) => {
              return (
                <img
                  key={i}
                  src={message.profileImageURL}
                  alt='profile'
                  className='rounded-full h-8 w-8 absolute border '
                  style={{ left: `${i * 18}px` }}
                />
              )
            })}
            <div
              className='absolute rounded-full h-8 w-8 border  bg-white flex items-center justify-center left-[54px]'
              style={{ left: `${Math.min(messageCount, 3) * 18}px` }}
            >
              +{messageCount}
            </div>
          </div>
          <p className='mt-10'>
            <span className='font-bold'>{messageCount}</span>명이 작성했어요!
          </p>
          <hr className='mt-10' />
          <div className='flex mt-5 gap-x-2'>
            {topReactions.map((topReaction) => (
              <EmojiBadge emoji={topReaction.emoji} count={topReaction.count} />
            ))}
          </div>
        </div>
      </>
    </Link>
  )
}
