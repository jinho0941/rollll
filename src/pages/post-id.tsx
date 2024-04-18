import React, { useState } from 'react'
import { Header } from '../components/header'
import { Link, useParams } from 'react-router-dom'
import usePostData, { IMessage } from '../hooks/get-post-data'
import api from '../lib/api'
import { toast } from 'sonner'
import { FaAngleDown } from 'react-icons/fa'
import { Reactions } from '../components/post-id/reactions'
import useReactionData from '../hooks/get-reactions'
import { Owner } from '../components/post-id/owner'
import { CountWriter } from '../components/post-id/count-writer'
import { TopReactions } from '../components/post-id/top-reactions'
import { IconPickerButton } from '../components/post-id/icon-picker-button'
import { IconPicker } from '../components/post-id/icon-picker'
import { SharedButton } from '../components/post-id/shared-button'
import { Background } from '../components/post-id/background'
import { FaCirclePlus } from 'react-icons/fa6'
import { MessageCard } from '../components/message/message-card'
import { MessageModal } from '../components/message/message-modal'

const PostIdPage = () => {
  const params = useParams<{ postId: string }>()
  const postId = params.postId
  const { postData, updatePostData } = usePostData(postId!)
  const { reactionData, updateReactionData } = useReactionData(postId!)
  const [pickerVisible, setPickerVisible] = useState<boolean>(false)
  const [showReactions, setShowReactions] = useState<boolean>(false)
  const [message, setMessage] = useState<IMessage | null>(null)
  const [onOpen, setOnOpen] = useState<boolean>(false)

  const copyToClipboard = () => {
    const currentUrl = window.location.href
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.success('URL이 클립보드에 복사되었습니다.')
      })
      .catch((error) => {
        toast.error('URL 복사 실패')
        console.log(error)
      })
  }

  if (!postData) {
    return <div>no data</div>
  }

  const sendReaction = async (emoji: string) => {
    try {
      await api.post(`/recipients/${postId}/reactions/`, {
        emoji,
        type: 'increase',
      })
      updatePostData()
      updateReactionData()
    } catch (error) {
      toast.error('something went wrong')
    } finally {
      setPickerVisible(false)
    }
  }

  const cardClicked = (id: number) => {
    const message = postData.recentMessages.find((message) => message.id === id)
    setMessage(message!)
    setOnOpen(true)
    console.log(message)
  }

  return (
    <>
      {onOpen && message && (
        <MessageModal
          img={message.profileImageURL}
          sender={message.sender}
          relationship={message.relationship}
          createdAt={message.createdAt}
          content={message.content}
          onClose={() => setOnOpen(false)}
        />
      )}
      <Header />
      <header className='h-full bg-slate-500'>
        <div className='pt-14 shadow-md bg-white'>
          <div className='h-14 max-h-14 flex items-center md:justify-between justify-center xl:w-[1200px] xl:px-0 px-5 w-full mx-auto '>
            <div className='md:block hidden'>
              <Owner name={postData.name} />
            </div>

            <div className='flex items-center '>
              <CountWriter count={postData.messageCount} />
              <TopReactions topReactions={postData.topReactions} />
              <FaAngleDown
                className='ml-2 h-6 w-6 hover:text-gray-400 cursor-pointer'
                onClick={() => setShowReactions((value) => !value)}
              />
              <Reactions isShow={showReactions} reactions={reactionData} />
              <IconPickerButton
                onClick={() => setPickerVisible(!pickerVisible)}
              />
              <IconPicker
                isShow={pickerVisible}
                onClick={(emojiObject: any) => sendReaction(emojiObject.emoji)}
              />
              <SharedButton onClick={copyToClipboard} />
            </div>
          </div>
        </div>
      </header>
      <main className='relative h-[calc(100vh-112px)]'>
        <Background
          img={postData.backgroundImageURL!}
          color={postData.backgroundColor}
        />
        <div className='absolute inset-0 mt-20 xl:w-[1200px] w-full mx-auto xl:px-0 px-10'>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5'>
            <Link
              to={`/post/${postId}/message`}
              className='h-[280px] rounded-xl bg-white flex justify-center items-center hover:bg-slate-200 cursor-pointer'
            >
              <FaCirclePlus className='h-16 w-16 text-gray-500' />
            </Link>
            {postData.recentMessages.map((message) => (
              <MessageCard
                key={message.id}
                id={message.id}
                img={message.profileImageURL}
                sender={message.sender}
                relationship={message.relationship}
                content={message.content}
                createdAt={message.createdAt}
                onClick={cardClicked}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default PostIdPage
