import styled from 'styled-components'
const Wrapper = styled.div`
//service head
.service-head {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1.5em;
  color: rgb(40, 102, 129);
  font-size: 2rem;
}
//services page
.services-page {
  display: flex;
  flex-direction:row;
  height: 100%;
  // .services-page-child-1 {
  // }
  .services-page-child-1 {
    padding: 0 5em 0 2em;
    p {
      color: black;
      font-size: 1.2em;
      line-height: 1.7;
    }
    ul {
      li {
        word-break: break-word;
      }
    }
  }
  .services-page-child-2 {
    padding: 0 2em;
    img{
      width:80em;
    }
  }
}
`

export default Wrapper