import { useEffect, useState } from 'react'
import { Header } from '../components/header'
import { Input } from '../components/ui/input'
import { Description } from '../components/post/description'
import { SelectButton } from '../components/post/select-button'
import { Button } from '../components/ui/button'
import { ColorButton } from '../components/post/color-button'
import axios from 'axios'
import { FaCircleCheck } from 'react-icons/fa6'
import { toast } from 'sonner'
import api from '../lib/api'
import { useNavigate } from 'react-router-dom'
import PostIdPage from './post-id'

enum Options {
  COLOR,
  IMAGE,
}

const PostPage = () => {
  const navigation = useNavigate()

  const [value, setValue] = useState<string>('')
  const [onSelected, setOnSelected] = useState(Options.COLOR)
  const [color, setColor] = useState<'beige' | 'purple' | 'blue' | 'green'>(
    'beige',
  )
  const [images, setImages] = useState<string[] | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onColorButtonClicked = () => {
    setOnSelected(Options.COLOR)
  }
  const onImageButtonClicked = () => {
    setOnSelected(Options.IMAGE)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://rolling-api.vercel.app/background-images/',
        )
        setImages(response.data.imageUrls)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const onCreate = async () => {
    if (!color) {
      toast.error('배경색을 선택해주세요.')
      return
    }
    try {
      const response = await api.post('/recipients/', {
        name: 'hello world 123123',
        backgroundColor: color,
        backgroundImageURL: imageUrl,
      })
      const postId = response.data.id
      navigation(`/post/${postId}`)
    } catch (error) {
      toast.error('something went wrong')
    }
  }

  return (
    <>
      <Header />
      <main className='pt-14 md:w-[720px] mx-auto w-full md:px-0 px-5'>
        <section className='mt-16'>
          <p className='text-3xl font-bold'>To.</p>
          <div className='mt-5' />
          <Input
            value={value}
            onChange={handleChange}
            placeholder='받는 사람 이름을 입력해 주세요'
          />
        </section>
        <Description />
        <section className='flex mt-10'>
          <SelectButton
            isSelected={onSelected === Options.COLOR}
            onClick={onColorButtonClicked}
          >
            컬러
          </SelectButton>
          <SelectButton
            isSelected={onSelected === Options.IMAGE}
            onClick={onImageButtonClicked}
          >
            이미지
          </SelectButton>
        </section>
        <section className='mt-10'>
          {onSelected === Options.COLOR && (
            <div className='grid md:grid-cols-4 grid-cols-2 gap-x-4'>
              <ColorButton
                color='beige'
                isSelected={color === 'beige'}
                onClick={() => setColor('beige')}
              />
              <ColorButton
                color='purple'
                isSelected={color === 'purple'}
                onClick={() => setColor('purple')}
              />
              <ColorButton
                color='blue'
                isSelected={color === 'blue'}
                onClick={() => setColor('blue')}
              />
              <ColorButton
                color='green'
                isSelected={color === 'green'}
                onClick={() => setColor('green')}
              />
            </div>
          )}
          {onSelected === Options.IMAGE && images && (
            <div className='grid md:grid-cols-4 grid-cols-2 gap-x-4'>
              {images.map((image) => {
                const isSelected = imageUrl === image
                return (
                  <button
                    key={image}
                    onClick={() => setImageUrl(image)}
                    className='relative'
                  >
                    <img
                      src={image}
                      alt='img'
                      className={`aspect-square object-cover rounded-xl`}
                    />
                    <div
                      className={`absolute inset-0 z-10 ${
                        isSelected && 'bg-white/40'
                      }`}
                    />
                    {isSelected && (
                      <FaCircleCheck className='z-20 absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black/80 h-12 w-12' />
                    )}
                  </button>
                )
              })}
            </div>
          )}
        </section>
        <div className='mt-16' />
        <Button onClick={onCreate}>생성하기</Button>
      </main>
    </>
  )
}

export default PostPage
