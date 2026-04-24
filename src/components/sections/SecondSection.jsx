import '../../styles/SecondSection.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../Card'

gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {
    const titleRef = useRef(null)

    useEffect(() => {
        let tl = gsap.timeline({ scrollTrigger: {
                trigger: '#section2',
                start: 'top center',
                toggleActions: 'play none none none',
        } })

        tl.from(titleRef.current, { opacity: 0, yPercent: -50 })
        tl.from('.game-card', { opacity: 0, yPercent: 50, stagger: 0.2, ease: 'power2.out' }, '-=0.5')

    }, [])

    return (
        <section id='section2'>
            <h1 id='section2-title' ref={titleRef}>MAIN DIVISION</h1>
            <div id='section2-content'>
                <Card image_url='https://i.pinimg.com/736x/f9/10/9a/f9109a1ccad237599d30eb1fc7cadb30.jpg' game_name='DOTA 2' />
                <Card image_url='https://i.pinimg.com/1200x/66/a4/e1/66a4e13536d13142cc98907d0e2bb490.jpg' game_name='CSGO' />
                <Card image_url='https://i.pinimg.com/736x/b7/b8/ea/b7b8eac3c5ff4dbbebc3aea6bf062b93.jpg' game_name='League Of Legend' />
                <Card image_url='https://i.pinimg.com/736x/73/99/aa/7399aa4ac5d488cd44698e430f612399.jpg' game_name='Valorant' />
                <Card image_url='https://i.pinimg.com/1200x/91/82/6a/91826a460e293270c9bb411c5151784e.jpg' game_name='CHESS' />
                <Card image_url='https://i.pinimg.com/736x/0d/12/a7/0d12a704658bfcf54c9b8da3ce8e3b1a.jpg' game_name='Rainbow Six Siege' /> 
            </div>
        </section>
    )
}

export default SecondSection