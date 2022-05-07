import styled from 'styled-components'
const Wrapper = styled.div`
.footer {
  color: white;
}


.footer h4{
  padding:.3em 0;
}

.footer h4:hover {
  padding: 0.1em 0.2em;
  background: #538fa8;
  text-align: center;
  width: 5em;
  border-radius: 10px;
  height: 2em;
}

.footer .decoration-line {
  width: 100%;
  height: 1em;
  background: #286681;
  margin-top: 5em;
}

.footer .socials {
  background: #89d6fb;
  height: 4em;
}

.footer .socials ul {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer .socials ul li {
  height: fit-content;
  margin: 1em 5em;
  color:black;
}

.footer .links {
  display: -ms-grid;
  height: 25vh;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
  background: #286681;
}

.footer .links .footer-grid-1 {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.footer .links .footer-grid-2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.footer .links .footer-grid-2 .vertical-line {
  background: white;
  margin: auto auto;
  height: 6em;
  width: 2px;
}

.footer .links .footer-grid-2 .footer-grid-2-section-1 {
  margin: 2em 3em;
}

.footer .links .footer-grid-2 .footer-grid-2-section-1 .location {
  margin: 20% auto;
}

.footer .copyright {
  background: #02577a;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: 1.2em;
}

.footer .copyright P {
  color: #f4f2f2;
  margin: 0 auto;
  font-weight: 500;
  font-size: 0.652em;
  padding: 0.1em;
}

`
export default Wrapper