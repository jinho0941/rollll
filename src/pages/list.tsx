import React, { Fragment, useRef } from 'react'
import { ListCard } from '../components/list/list-card'
import useRecipientsData from '../hooks/get-recipients-data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const ListPage: React.FC = () => {
  const { recipientsData } = useRecipientsData()
  const sliderRef = useRef<Slider>(null)
  const sliderRef2 = useRef<Slider>(null)

  if (!recipientsData) {
    return <div>loading</div>
  }

  const sortedByCreatedAt = recipientsData.results
    .slice()
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    )

  const sortedByMessageCount = recipientsData.results
    .slice()
    .sort((a, b) => b.messageCount - a.messageCount)

  const chunkArray = (arr: any[], chunkSize: number) => {
    const chunks = []
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize))
    }
    console.log(chunks)
    return chunks
  }

  const chunks = chunkArray(sortedByCreatedAt, 4)
  const chunks2 = chunkArray(sortedByMessageCount, 4)

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }
  const goToNext2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickNext()
    }
  }

  const goToPrev2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickPrev()
    }
  }

  return (
    <main className='w-[1200px]  mt-16 mx-auto xl:px-0 px-10'>
      <section>
        <h1 className='font-bold text-2xl'>인기 롤링 페이퍼👍</h1>
        <div className='relative'>
          <Slider ref={sliderRef}>
            {chunks.map((chunk, index) => (
              <Fragment key={index}>
                <div className='mt-5 grid grid-cols-4 gap-x-5 '>
                  {chunk.map((recipient) => (
                    <ListCard
                      key={recipient.id}
                      id={recipient.id}
                      username={recipient.name}
                      recentMessages={recipient.recentMessages}
                      messageCount={recipient.messageCount}
                      bgcolor={recipient.backgroundColor}
                      img={recipient.backgroundImageURL}
                      topReactions={recipient.topReactions}
                    />
                  ))}
                </div>
              </Fragment>
            ))}
          </Slider>
          <button
            onClick={goToPrev}
            className='absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-white rounded-full shadow-md p-2 hover:bg-slate-100'
          >
            <FaAngleLeft className='h-8 w-8 ' />
          </button>
          <button
            onClick={goToNext}
            className='absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 border bg-white rounded-full shadow-md p-2 hover:bg-slate-100'
          >
            <FaAngleRight className='h-8 w-8 ' />
          </button>
        </div>
      </section>
      <section className='mt-14'>
        <h1 className='font-bold text-2xl'>최근에 만든 롤링 페이퍼😎</h1>
        <div className='relative'>
          <Slider ref={sliderRef2}>
            {chunks2.map((chunk, index) => (
              <Fragment key={index}>
                <div className='mt-5 grid grid-cols-4 gap-x-5 '>
                  {chunk.map((recipient) => (
                    <ListCard
                      key={recipient.id}
                      id={recipient.id}
                      username={recipient.name}
                      recentMessages={recipient.recentMessages}
                      messageCount={recipient.messageCount}
                      bgcolor={recipient.backgroundColor}
                      img={recipient.backgroundImageURL}
                      topReactions={recipient.topReactions}
                    />
                  ))}
                </div>
              </Fragment>
            ))}
          </Slider>
          <button
            onClick={goToPrev2}
            className='absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-white rounded-full shadow-md p-2 hover:bg-slate-100'
          >
            <FaAngleLeft className='h-8 w-8 ' />
          </button>
          <button
            onClick={goToNext2}
            className='absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 border bg-white rounded-full shadow-md p-2 hover:bg-slate-100'
          >
            <FaAngleRight className='h-8 w-8 ' />
          </button>
        </div>
      </section>
    </main>
  )
}

export default ListPage
