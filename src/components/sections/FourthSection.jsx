import '../../styles/FourthSection.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const FourthSection = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "center center",
                end: "+=700",
                scrub: true,
                pin: true, 
            }
        });

        tl.to(titleRef.current, {
            y: -50,
            scale: 0.6,
            duration: 1
        })

        tl.to(containerRef.current, {
            backgroundColor: "#000",
            duration: 1
        })

        tl.fromTo(buttonRef.current, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            yPercent: -500,
            duration: 1
        }, "-=0.5")

    }, []);

    return (
        <section id="section4" ref={containerRef}>
            <h1 ref={titleRef}>Ready To Build?</h1>
            <button ref={buttonRef}>Build</button>
        </section>
    )
}

export default FourthSection