import React from "react";

import { Hero } from '@/components/Hero'
import { Zigzag } from '@/components/Zigzag'
import { Newsletter } from "../../components/Newsletter";
import { ScrollToTop } from "../../components/ScrollToTop";

export default function Home() {
    return (<>
            <Hero/>
            <Zigzag/>
            <Newsletter/>
            <ScrollToTop/>
        </>
    )
}
