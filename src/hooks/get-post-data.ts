import { useEffect, useState } from 'react'
import api from '../lib/api'

export interface ITopReaction {
  emoji: string
  id: number
  count: number
}

export interface IRecipient {
  id: number
  name: string
  backgroundColor: string
  backgroundImageURL: string | null
  createdAt: string
  messageCount: number
  recentMessages: IMessage[]
  reactionCount: number
  topReactions: ITopReaction[]
}

export interface IMessage {
  id: number
  recipientId: number
  sender: string
  profileImageURL: string
  relationship: string
  content: string
  font: string
  createdAt: string
}

const usePostData = (postId: string) => {
  const [postData, setPostData] = useState<IRecipient | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/recipients/${postId}/`)
        setPostData(response.data)
      } catch (error) {
        console.error('Error fetching post data:', error)
      }
    }
    fetchData()
  }, [postId])

  const updatePostData = async () => {
    try {
      const response = await api.get(`/recipients/${postId}/`)
      setPostData(response.data)
    } catch (error) {
      console.error('Error fetching post data:', error)
    }
  }

  return { postData, updatePostData }
}

export default usePostData
