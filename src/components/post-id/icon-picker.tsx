import EmojiPicker from 'emoji-picker-react'

type Props = {
  onClick: (emojiObject: any) => void
  isShow: boolean
}

export const IconPicker = ({ onClick, isShow }: Props) => {
  return (
    <div className='relative z-50'>
      {isShow && (
        <div className='absolute top-6 right-0'>
          <EmojiPicker onEmojiClick={onClick} />
        </div>
      )}
    </div>
  )
}
