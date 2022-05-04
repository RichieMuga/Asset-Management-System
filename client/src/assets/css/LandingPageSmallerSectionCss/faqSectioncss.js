import styled from 'styled-components'
const Wrapper = styled.div`
.faq-container {
  width: 100%;
  margin: 10em 0;
  height: auto;
  color: black;
  text-align: center;
  .list-container {
    height: fit-content;
    margin: 0 auto;
    width: 90%;
    .faqs-header {
      color: rgb(40, 102, 129);
      font-size: 2.5em;
      text-align: center;
    }
    ul {
      margin: 2em 0;
      padding: 0;
      text-align: left;
      background: rgb(40, 102, 129);
      // font-size: ;
      li {
        color: rgb(255, 255, 255);
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        border-color: white;
        button {
          margin-left: auto;
          margin-right: 1em;
          height: 1.8em;
          width: 0;
          height: 0;
          background-color: transparent;
          border-top: 13px solid transparent;
          border-right: 24px solid rgb(255, 255, 255);
          border-bottom: 13px solid transparent;
          border-left: transparent;
          cursor: pointer;
        }
        .show-more {
          display: block;
          transition: 500ms;
        }
        .rotate-btn {
          rotate: -90deg;
          transition: ease-in-out;
        }
        p {
          padding-left: 2em;
        }
      }
      li:first-child {
        padding-top: 0.8em;
      }

      .faq-text {
        color: rgb(0,0,0);
        page-break-after: always;
        display: none;
        border-style: solid;
        border-color: rgb(40, 102, 129);
        background: $background-color;
        padding: 0.5em 3em;
      }
    }
  }
}
`
export default Wrapper