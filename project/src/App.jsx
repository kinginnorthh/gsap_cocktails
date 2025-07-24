import gsap from 'gsap';
import {ScrollTrigger , SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger , SplitText );

import React from 'react' 

const App = () => {
    return (
        <div className = "flex-center h-[100vh]">
            <h1 className = "text-3xl text-red-300">hello  gsap</h1>
            <h1>hello neeraj</h1>
        </div>
    )
}
export default App;