import '../../styles/FirstSection.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import TeamLiquidIcon from '../../assets/tl-icon.png'
import TeamLiquidIconText from '../../assets/tl-icon-text.png'
import DotaIcon from '../../assets/dota-icon.png'
import LOLIcon from '../../assets/lol-icon.png'
import CSGOIcon from '../../assets/csgo-icon.png'
import MLBBIcon from '../../assets/mlbb-icon.png'

const FirstSection = () => {
    const sectionRef = useRef(null)

    const content1Ref = useRef(null)
    const iconRef = useRef(null)
    const iconTextRef = useRef(null)

    const content2Ref = useRef(null)
    const gameImgRef = useRef(null)
    const gameImgRef2 = useRef(null)
    const gameImgRef3 = useRef(null)
    const gameImgRef4 = useRef(null)

    useEffect(() => {
        let tl = gsap.timeline()

        tl.from(iconRef.current, { yPercent: -80 })
        tl.from(iconTextRef.current, { opacity:0, yPercent: 80 })
        tl.to(content1Ref.current, { xPercent: 80, ease: 'power1.inOut' })
        
        tl.from(content2Ref.current, { opacity: 0 })
        tl.from(gameImgRef.current, { opacity: 0, yPercent: 80 })
        tl.from(gameImgRef2.current, { opacity: 0, xPercent: 80 })
        tl.from(gameImgRef3.current, { opacity: 0, yPercent: -80 })
        tl.from(gameImgRef4.current, { opacity: 0, yPercent: 80 })

    }, [])

    return (
        <section className='black-hole-bg' id='section1' ref={sectionRef}>
            <div id='section1-content1' ref={content1Ref}>
                <img 
                    ref={iconRef} 
                    src={TeamLiquidIcon} 
                    alt="team liquid logo"
                    id='tl-icon'
                />

                <img 
                    ref={iconTextRef} 
                    src={TeamLiquidIconText} 
                    alt="team liquid logo text"
                    id='tl-icon-text'
                />

            </div>

            <div id="section1-content2" ref={content2Ref}>
                <p
                    id='tl-esport-summary'
                >
                    Team Liquid esport is a multi-genre esports organization based in the Netherlands, founded in 2000. It is known for its competitive teams in various esports, including Dota 2, League of Legends, mobile legends, and Counter-Strike: Global Offensive. Team Liquid has achieved significant success, including winning multiple LCS titles and receiving the Intel Grand Slam award in 2019. The organization is recognized for its commitment to excellence and has a reputation for producing top-tier professional players.
                </p>

                <div id="section1-content2-img">
                    <img 
                        src={DotaIcon}
                        alt="dota-2"
                        className='game-img'
                        ref={gameImgRef}
                    />
                    <img 
                        src={LOLIcon} 
                        alt="league of legends" 
                        className='game-img'
                        ref={gameImgRef2}
                    />
                    <img 
                        src={CSGOIcon} 
                        alt="csgo" 
                        className='game-img'
                        ref={gameImgRef3}
                    />
                    <img 
                        src={MLBBIcon} 
                        alt="mobile legends" 
                        className='game-img'
                        ref={gameImgRef4}
                    />
                </div>

            </div>
        </section>
    )
}

export default FirstSection