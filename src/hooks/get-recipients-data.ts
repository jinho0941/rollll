import { useEffect, useState } from 'react'
import api from '../lib/api'

interface IMessage {
  id: number
  recipientId: number
  sender: string
  profileImageURL: string
  relationship: string
  content: string
  font: string
  createdAt: string
}

interface ITopReaction {
  id: number
  emoji: string
  count: number
}

interface IRecipient {
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

interface IRecipients {
  count: number
  next: string | null
  previous: string | null
  results: IRecipient[]
}

const useRecipientsData = () => {
  const [recipientsData, setRecipientsData] = useState<IRecipients | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/recipients/?limit=12&offset=0`)
        setRecipientsData(response.data)
      } catch (error) {
        console.error('Error fetching post data:', error)
      }
    }
    fetchData()
  }, [])

  return { recipientsData }
}

export default useRecipientsData
