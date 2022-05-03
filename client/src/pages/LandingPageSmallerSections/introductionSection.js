import React from 'react'
import Typed from "typed.js";
import { useRef, useEffect } from 'react';
import Wrapper from '../../assets/css/LandingPageSmallerSectionCss/introductioncss';
import IntroSVG from '../../assets/svg/introductionSectionSVG'
import { FaAngleDoubleDown } from 'react-icons/fa';


//rectified
// code below didnt work so I added the whole svg in the whole component and I also wanted to add animations
// which is not possible when using <img> tag
// import WavingGuy from '../../assets/svg/wavingPerson.svg'



const IntroductionSection = () => {
    const text = React.useMemo(() => ["Hey there👋", "Why not try us?🤝"], []);
    const divRef = useRef();

    useEffect(() => {
        const options = {
            // strings: text,
            stringsElement: "#typed-string",
            typeSpeed: 100,
            showCursor: true,
            // cursorChar: "|",
            backSpeed: 20,
            smartBackspace: false,
            shuffle: false,
            startDelay: 500,
            backDelay: 7000,
            loop: true,
            loopCount: Infinity
        };

        const typed = new Typed(divRef.current, options);

        return () => {
            typed.destroy();
        };
    }, [text]);

    return (
        <Wrapper>
            <div className="introduction">
                <div className="introduction-child-1">
                    <div className='cursorAnimation'>
                        <h1 id="typed-string">
                            <span id="type-animation">Hey there👋</span>
                            <span id="type-animation">Why not try us?🤝</span>
                        </h1>
                        <span ref={divRef}></span>
                    </div>
                    <IntroSVG />
                </div>
                <div className="introduction-child-2">
                    <h2>WANT TO BETTER MANAGE YOUR COMPANY’S ASSETS?</h2>
                    <p style={{ "font-size": "1.2em" }} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                        dolorum, ipsum dolorem molestias rerum consectetur excepturi veniam
                        provident perspiciatis sed adipisci earum alias reprehenderit
                    </p>
                    <button type='submit'>Login/SignUp</button>

                </div>
                <div class="downArrow">
                    <FaAngleDoubleDown />
                </div>
            </div>
        </Wrapper>

    )
}

export default IntroductionSection