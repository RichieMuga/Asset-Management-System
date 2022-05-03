import styled from 'styled-components'
const Wrapper = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
.introduction {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 70vh;

  .introduction-child-1 {
    margin-left:2em;
    background: $background-color;

    .cursorAnimation{
        display:flex;
        justify-content:center;
        span{
            font-size:1.7rem;
            text-decoration:underline;
            margin-bottom:1.4em;
        }
    }

    h1 {
      text-align: center;
    }
    #waving {
      height: 200vh;
    }
    #type-animation {
      color: $font-black;
      text-decoration: underline;
    }
    //itype plugin
    .ityped-cursor {
      color: $font-black;
      font-size: 2.2rem;
      opacity: 1;
      animation: blink 0.3s infinite;
      animation-direction: alternate;
    }

    @keyframes blink {
      100% {
        opacity: 0;
      }
    }
    //
    .waving {
      display: block;
      margin: auto;
    }

    #Waving-hand {
      animation: waving-motion 2s ease-in-out infinite alternate;
      transform-origin: center;
      transform-box: fill-box;
    }
    #Head {
      animation: waving-head 3s ease-in-out infinite alternate;
      transform-origin: center;
      transform-box: fill-box;
    }

    @keyframes waving-motion {
      100% {
        transform: rotatez(-18deg);
      }
    }
    @keyframes waving-head {
      50% {
        transform: rotatez(11deg);
      }

      100% {
        transform: rotatez(-11deg);
      }
    }
  }
  .introduction-child-2 {
    margin-right:2em;
    background: $background-color;
    h2,
    p {
      color: $font-black;
    }
    h2 {
      font-size: 2.5em;
    }
    p {
      font-size: 1.3em;
      line-height: 1.7;
    }
    button{
        font-weight: 700;
        margin-top: 2em;
    }
  }
  .downArrow {
    width: auto;
    display:flex;
    justify-content:center;
    animation: bounce 3s infinite;
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-0.4em);
      }
      60% {
        transform: translateY(-0.4em);
      }
    }
  }
}
`

export default Wrapper