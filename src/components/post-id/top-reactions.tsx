import { ITopReaction } from '../../hooks/get-post-data'
import { EmojiBadge } from '../emoji-badge'

type Props = {
  topReactions: ITopReaction[]
}

export const TopReactions = ({ topReactions }: Props) => {
  return (
    <div className='ml-8 flex gap-x-3'>
      {!!topReactions &&
        topReactions.map((reaction) => (
          <EmojiBadge
            key={reaction.id}
            emoji={reaction.emoji}
            count={reaction.count}
          />
        ))}
    </div>
  )
}
