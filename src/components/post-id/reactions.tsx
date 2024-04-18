import { EmojiBadge } from '../emoji-badge'

interface EmojiList {
  count: number
  next: string | null
  previous: string | null
  results: EmojiData[]
}

interface EmojiData {
  id: number
  emoji: string
  count: number
}

type Props = {
  reactions: EmojiList | null
  isShow: boolean
}

export const Reactions = ({ reactions, isShow }: Props) => {
  return (
    <>
      {isShow && (
        <div className='relative'>
          <div className='absolute right-0 top-5 flex flex-col p-5 border-2 shadow-md rounded-xl bg-white z-50'>
            <div className='grid grid-cols-4 w-[285px] gap-x-3 gap-y-2'>
              {!!reactions &&
                reactions.results.map((result) => (
                  <EmojiBadge
                    key={result.id}
                    emoji={result.emoji}
                    count={result.count}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
