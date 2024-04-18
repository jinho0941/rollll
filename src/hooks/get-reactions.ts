import { useEffect, useState } from 'react'
import api from '../lib/api'

export interface IEmojiList {
  count: number
  next: string | null
  previous: string | null
  results: IEmojiData[]
}

export interface IEmojiData {
  id: number
  emoji: string
  count: number
}

const useReactionData = (postId: string) => {
  const [reactionData, setReactionData] = useState<IEmojiList | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/recipients/${postId}/reactions/`)
        setReactionData(response.data)
      } catch (error) {
        console.error('Error fetching post data:', error)
      }
    }
    fetchData()
  }, [postId])

  const updateReactionData = async () => {
    try {
      const response = await api.get(`/recipients/${postId}/reactions/`)
      setReactionData(response.data)
    } catch (error) {
      console.error('Error fetching post data:', error)
    }
  }

  return { reactionData, updateReactionData }
}

export default useReactionData
