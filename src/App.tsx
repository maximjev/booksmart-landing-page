import { Hero } from "./components/Hero";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";

import "./App.css";
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Zigzag } from "@/components/Zigzag.tsx";

function App() {
    useEffect(() => {
        Aos.init({
            once: true,
            disable: 'phone',
            duration: 600,
            easing: 'ease-out-sine',
        })
    })

    return (
        <>
            <Hero/>
            <Zigzag/>
            <Newsletter/>
            <ScrollToTop/>
        </>
    );
}

export default App;
