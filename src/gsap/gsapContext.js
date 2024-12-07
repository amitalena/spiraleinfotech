import React, { createContext, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GSAPContext = createContext();

export const GSAPProvider = ({ children }) => {
    useEffect(() => {
        gsap.defaults({ ease: "power1.out", duration: 1 });
    }, []);

    return <GSAPContext.Provider value={{ gsap }}>{children}</GSAPContext.Provider>;
};
