import styled from 'styled-components'
const Wrapper = styled.div`
//service head
.service-head {
  text-align: center;
  margin-top: 1em;
  color: $base-color;
  font-size: 1.2em;
  color: rgb(40, 102, 129);
}
//services page
.services-page {
  display: flex;
  flex-direction:row;
  overflow: hidden;
  // display: flex;
  height: 100%;
  // .services-page-child-1 {
  // }
  .services-page-child-1 {
    padding: 0 5em;
    p {
      color: $font-black;
      font-size: 1.4em;
      line-height: 1.7;
    }
    ul {
      li {
        word-break: break-word;
      }
    }
  }
  .services-page-child-2 {
    img {
      position: relative;
      right: 0;
      justify-content: left;
    }
  }
}
`

export default Wrapper