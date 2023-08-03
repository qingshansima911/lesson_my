// 样式组件
import { Wrapper, SearchHeader } from './style'

export default function Home() {
  return (
    <Wrapper>
      <SearchHeader>
        <div className='icon'>
          <i className="fa fa-chevron-left"></i>
        </div>
        <div className="searchgroup">
          <input type="text" placeholder='搜索商品' />
          <i className="fa fa-search"></i>
          <button>搜索</button>
        </div>
        <div className="icon">
          <i className="fa fa-shopping-cart">
            2
          </i>
        </div>
      </SearchHeader>
    </Wrapper>
  )
}