import styled from 'styled-components'
const Wrapper = styled.div`
.faqs-header {
  color: rgb(40, 102, 129);
  font-size: 2rem;
  text-align: center;
}
.faq-container {
  width: 100%;
  margin: 5em 0;
  height: auto;
  color: black;
  text-align: center;
  .list-container {
    height: fit-content;
    margin: 0 auto;
    width: 90%;
    ul {
      margin: 1em 0;
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
        padding: 1em 0;
        padding-top: 1em;
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
          transition-delay: 500ms;
          background-color: white;
        }
        .rotate-btn {
          transform: rotate(-90deg);
          transition: 500ms;
        }
        p {
          padding-left: 2em;
          background: transparent;
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
        border-color: rgb(83, 143, 168);
        background: $background-color;
        padding: 0.5em 3em;
      }
    }
  }
}
`
export default Wrapper