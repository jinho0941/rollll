import { useEffect, useState } from 'react'
import { Header } from '../components/header'
import { Input } from '../components/ui/input'
import { FaUserCircle } from 'react-icons/fa'
import axios from 'axios'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Button } from '../components/ui/button'
import api from '../lib/api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

export const MessagePage = () => {
  const [value, setValue] = useState<string>('')
  const [profileImages, setProfileImages] = useState<string[] | null>(null)
  const [profile, setProfile] = useState<string>()
  const [relationship, setRelationship] = useState('지인')
  const [font, setFont] = useState('Noto Sans')
  const [editorHtml, setEditorHtml] = useState('')
  const params = useParams<{ postId: string }>()
  const postId = params.postId
  const navigation = useNavigate()

  const handleChange = (html: any) => {
    setEditorHtml(html)
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRelationship(e.target.value)
  }
  const handleFontSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(e.target.value)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onSubmit = async () => {
    if (!value || !profile || !relationship || !editorHtml || !font) {
      toast.error('작성하지 않거나 선택을 하지않은 부분이 있습니다.')
      return
    }
    try {
      await api.post(`/recipients/${postId}/messages/`, {
        sender: value,
        profileImageURL: profile,
        relationship,
        content: editorHtml,
        font,
      })
      navigation(`/post/${postId}`)
    } catch (error) {
      toast.error('something went wrong')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://rolling-api.vercel.app/profile-images/',
      )
      setProfileImages(response.data.imageUrls)
    }
    fetchData()
  }, [])
  return (
    <>
      <Header />
      <main className='pt-14 md:w-[720px] mx-auto w-full md:px-0 px-5'>
        <section className='mt-16'>
          <p className='text-2xl font-bold'>From.</p>
          <div className='mt-5' />
          <Input
            value={value}
            onChange={handleInputChange}
            placeholder='이름을 입력해 주세요.'
          />
        </section>
        <section className='mt-14'>
          <p className='text-2xl font-bold'>프로필 이미지</p>
          <div className='mt-5 flex '>
            {!profile ? (
              <FaUserCircle className='min-h-28 min-w-28 text-gray-400' />
            ) : (
              <img
                src={profile}
                alt='profile'
                className='min-h-28 max-h-28 min-w-28 rounded-full'
              />
            )}

            <div className='ml-10 flex flex-col gap-y-5'>
              <p className='text-gray-500'>프로필 이미지를 선택해주세요!</p>
              <div className='flex flex-row flex-wrap overflow-x-auto gap-y-3'>
                {!!profileImages &&
                  profileImages.map((profileImage, index) => {
                    if (index === 0) return null // 첫 번째 이미지는 제외
                    return (
                      <img
                        key={index}
                        src={profileImage}
                        alt='profile'
                        className='inline-block h-12 w-12 rounded-full cursor-pointer mr-2'
                        onClick={() => setProfile(profileImage)}
                      />
                    )
                  })}
              </div>
            </div>
          </div>
        </section>
        <section className='mt-12'>
          <p className='text-2xl font-bold'>상대와의 관계</p>
          <select
            className='mt-2 block bg-white border border-gray-300 rounded-lg py-2 px-3 focus:outline-none w-[333px]'
            value={relationship}
            onChange={handleSelectChange}
          >
            <option value='친구'>친구</option>
            <option value='지인'>지인</option>
            <option value='동료'>동료</option>
            <option value='가족'>가족</option>
          </select>
        </section>
        <section className='mt-12'>
          <p className='text-2xl font-bold'>내용을 입력해 주세요.</p>
          <ReactQuill
            className='mt-4 h-[155px]'
            theme='snow'
            value={editorHtml}
            onChange={handleChange}
          />
        </section>
        <section className='mt-16'>
          <p className='text-2xl font-bold'>폰트 선택</p>
          <select
            className='mt-2 block bg-white border border-gray-300 rounded-lg py-2 px-3 focus:outline-none w-[333px]'
            value={font}
            onChange={handleFontSelectChange}
          >
            <option value='Noto Sans'>Noto Sans</option>
          </select>
        </section>
        <div className='mt-16' />
        <Button onClick={onSubmit}>생성하기</Button>
        <div className='mt-16' />
      </main>
    </>
  )
}
