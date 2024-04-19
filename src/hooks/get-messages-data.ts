import { useEffect, useState } from 'react'
import api from '../lib/api'

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

export interface IData {
  count: number
  next: string | null
  previous: string | null
  results: IMessage[]
}

const useMessagesData = (postId: string) => {
  const [messagesData, setMessagesData] = useState<IData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/recipients/${postId}/messages/?limit=5&offset=0`,
        )
        setMessagesData(response.data)
      } catch (error) {
        console.error('Error fetching post data:', error)
      }
    }
    fetchData()
  }, [postId])

  const updateMessagesData = async () => {
    try {
      const response = await api.get(
        `/recipients/${postId}/messages/?limit=5&offset=0`,
      )
      setMessagesData(response.data)
    } catch (error) {
      console.error('Error fetching post data:', error)
    }
  }

  return { messagesData, updateMessagesData }
}

export default useMessagesData
