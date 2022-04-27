import React from 'react'
import Typed from "typed.js";
import { useRef, useEffect } from 'react';


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
            shuffle: true,
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
        <div class="introduction">
            <div class="introduction-child-1">
                <h1 id="typed-string">
                    <span id="type-animation">Hey there👋</span>
                    <span id="type-animation">Why not try us?🤝</span>
                </h1>
                <span ref={divRef}></span>
                {/* <script src="https://unpkg.com/ityped@1.0.2"></script>
                <script>
                    ityped.init(document.querySelector("#type-animation"), {
                        showCursor: true,
                    strings: ["Hey there👋", "Why not try us?🤝"],
                    typeSpeed: 100,
                    backDelay: 7000,
          });
                </script> */}
                {
//                 <h1 className="p1">This is React world</h1>
//                 <p className="p2">Hell yeah!</p>
//             </div>
//             <span ref={divRef}></span>
                }
            </div>
        </div>
    )
}

export default IntroductionSection

// import Typed from "typed.js";
// import "./styles.css";

// export default function App() {
//     const text = React.useMemo(() => ["This is React Word !", "This works"], []);
//     const divRef = useRef();

//     useEffect(() => {
//         const options = {
//             // strings: text,
//             stringsElement: "#typed-string",
//             typeSpeed: 50,
//             showCursor: true,
//             // cursorChar: "|",
//             backSpeed: 20,
//             smartBackspace: false,
//             shuffle: true,
//             startDelay: 500,
//             backDelay: 1000,
//             loop: true,
//             loopCount: Infinity
//         };

//         const typed = new Typed(divRef.current, options);

//         return () => {
//             typed.destroy();
//         };
//     }, [text]);

//     return (
//         <div className="App">
//             <div id="typed-string">
//                 <h1 className="p1">This is React world</h1>
//                 <p className="p2">Hell yeah!</p>
//             </div>
//             <span ref={divRef}></span>
//         </div>
//     );
// }