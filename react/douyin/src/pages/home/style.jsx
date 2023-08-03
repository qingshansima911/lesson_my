// 样式组件 外层节点
import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #f6f6f6;
  padding-top: 3.4375rem;
`
export const SearchHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  padding: .3125rem 0;
  justify-content: space-between;
  height: 2.8125rem;
  z-index:10;
  .icon {
    flex: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    position: relative;
    span {
      display: inline-block;
      width: 1.125rem;
      height: 1.125rem;  
      font-size: .625rem;
      font-weight: bold;
      border-radius: 50%;
      color: white;
      background-color: #ff6700;
      position: absolute;
      top: -0.125rem;
      right: 1%;
      opacity: 0.8;
    }
  }
  .searchgroup{
    flex:7;
    position:relative;
    border-radius:1.25rem;
    border:.0625rem solid #ff6700;
    input {
      border:0;
      background-color:transparent;
      padding:.3125rem 0 0 2.5rem;
      font-size:1.125rem;
      font-size:1.0625rem;
    }
    i{
      color:#ff6700;
      font-size:1.1875rem;
      position:absolute; 
      left:.625rem;
      top:.4375rem;
    }
    button {
      position:absolute;
      top:.125rem;
      right:.125rem;
      background-color:#ff6700;
      padding:.3125rem .9375rem;
      color:white;
      border-radius:1.25rem;
      border:0;
      font-size:.875rem;
    }
}
`