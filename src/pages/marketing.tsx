import { Link } from 'react-router-dom'
import { BottomItem } from '../components/marketing/bottom-item'
import { ItemContainer } from '../components/marketing/item-container'
import { TopItem } from '../components/marketing/top-item'
import { Button } from '../components/ui/button'

const MarketingPage = () => {
  return (
    <main className='mt-20 xl:w-[1200px] mx-auto w-full xl:px-0 md:px-10 px-5'>
      <ItemContainer>
        <TopItem />
      </ItemContainer>
      <div className='mt-10' />
      <ItemContainer>
        <BottomItem />
      </ItemContainer>
      <div className='mt-10 flex justify-center'>
        <Link to='/list' className='w-[250px]'>
          <Button>구경해보기</Button>
        </Link>
      </div>
    </main>
  )
}

export default MarketingPage
