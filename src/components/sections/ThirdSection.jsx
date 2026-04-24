import '../../styles/ThirdSection.css'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const ThirdSection = () => {
    useEffect(() => {
        let panels = gsap.utils.toArray(".panel");
        let activePanelIndex = 0;

        gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#section3",
            pin: true,
            scrub: 1,
            end: "+=3500",
            onUpdate: (self) => {
            const progress = self.progress;
            const newActiveIndex = Math.round(progress * (panels.length - 1));
            const isLastPanel = newActiveIndex === panels.length - 1;
            
            if (newActiveIndex !== activePanelIndex) {
                activePanelIndex = newActiveIndex;
                
                const lastPanel = panels[panels.length - 1];

                    gsap.to(lastPanel, {
                    scale: isLastPanel ? 1.6 : 1,
                    duration: 2
                });

                panels.forEach((panel, index) => {
                const pElement = panel.querySelector('p');
                gsap.to(pElement, {
                    opacity: index === activePanelIndex ? 1 : 0.2,
                    duration: 1.5
                });
                });
            }
            }
        }
        });

    }, [])

    return (
        <section id="section3">
            <div className="panel">
                <div className="panel-img">
                    <img src="https://cdn.prod.website-files.com/64bf6e8cda9043babe7ca004/68c2fb67636e7424a7f3b43a_68aca7c61f5c066982147fa2_rwf-header.webp" />
                    <img src="https://tse3.mm.bing.net/th/id/OIP.xPCwxPoE0TUaJJMmq1fuuwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" />
                </div>
                <div className="panel-content">
                    <h2>How Team Liquid won the RWF — again</h2>
                    <p>
                        Every Race to World First is a huge event of its own, and the race through Manaforge Omega was no exception. And, as usual, it was Liquid and Echo, the top two guilds in the world, who battled for control of the race. But in the end, Liquid Guild stood victorious for the third raid in a row.

                        As usual, given the earlier North American server reset, Liquid took the lead on the mid-raid bosses. They fell behind only briefly on boss #6, Fractillus, before pulling ahead again going into the final boss, Dimensius the All-Devouring. Liquid and Echo wound up head-to-head on Dimensius, trading new best attempts and spots on the leaderboard for days before it all culminated in a grand finale on Saturday, August 23. On that fateful day, Liquid and Echo, both acutely aware of how close the other was to victory, pushed to secure the win on the final boss in this expansion. 

                        Echo seemed to have it in the bag, with two back to back attempts that could have been kills if only a player or two had stayed alive slightly longer. Many fans and commentators were convinced then that, despite the time difference and the fact that they had already been playing for 18 hours, Echo would emerge victorious. 
                    </p>


                </div>
            </div>
            <div className="panel">
                <div className="panel-img">
                    <img src="https://cdn.prod.website-files.com/64bf6e8cda9043babe7ca004/690b6a90e41e8e2c11bacab7_article-tl-for-unicef.webp" />
                    <img src="https://cdn.pixabay.com/photo/2014/04/02/10/35/unicef-303925_1280.png" />
                </div>
                <div className="panel-content">
                    <h2>We're on a mission with our newest partner UNICEF</h2>
                    <p>
                        We're thrilled to announce our latest partnership with UNICEF, the world’s largest children’s rights agency. Together with UNICEF we will champion the humanitarian organization’s goals through gaming, special streams, in-game activations, and events focused on UNICEF’s Sustainable Development Goal “Quality Education”. Through its professional esports teams and content creators, Team Liquid will bring UNICEF’s mission to young gamers and esports fans around the world.

                        The collaboration was unveiled at the Intel x Team Liquid World Tour event in London, where Team Liquid founder and Co-CEO Victor Goossens spoke about the importance of working with UNICEF: “As a teenager, gaming taught me about new cultures, helped me develop a work ethic, and gave me a goal to strive towards. It was a life-changing opportunity for me, and everyone at Team Liquid likewise believes in the transformative power of gaming. Bringing these opportunities to young people is part of our mission, and we are honored to partner with UNICEF and work with them to support children worldwide in reaching their full potential.”</p>

                </div>
            </div>
            <div className="panel">
                <div className="panel-img">
                    <img src="https://cdn.prod.website-files.com/64bf6e8cda9043babe7ca004/68c34ae486ca1eaec9428b20_68191eb5a2353dbb824e0f0b_yuuji%2520header.webp" />
                    <img src="https://www.strafe.com/esports-betting/strafe-news/wp-content/uploads/sites/29/Team-Liquid-win-LTA-North-Split-1-2025.jpg" />
                </div>
                <div className="panel-content">
                    <h2>Welcome Yuuji: NA’s top prospect enters the rotation</h2>
                    <p>
                        If you’ve been following the League of Legends Tier 2 scene, you know that Ganbat "Yuuji" Ulziidelger is one of the most anticipated NACL players of the last several years. The 22-year-old jungler, dubbed the “Mongolian Monster” for his individual dominance, could have easily joined an LTA team ahead of the 2025 season — if only he was counted as an NA player. Yuuji was assured he would count as an NA resident after years of living and studying in the US, only for his status to revert at the last second.

                        It was too late in the offseason for an LTA team to justify picking up an import rookie jungler, and too late for any LEC team to secure an EU work visa before the Winter split began.  And so Yuuji — despite being the back-to-back NACL MVP — stared down another year spent in a pond where he had already proved he was the biggest fish.

                        Yuuji would soon get a chance to reach the sea, though. After a shocking last-place finish at the inaugural First Stand, Team Liquid Head Coach Jake “Spawn” Tiberi began holding tryouts and substituting players in scrims. The process was intended to help the team isolate and identify issues — it didn’t necessitate roster changes, but they weren’t out of the question either.

                        A month later, of all the prospects that Liquid tested, only Yuuji remained. TL began the process of acquiring him as a sixth-man jungler from DarkZero Dragonsteel, Maryville University’s NACL team. Only days after he got the news — before he’d even moved out of St. Louis — we sat down with Yuuji to hear about his decade-long journey from playing 250-ping NA solo queue in Mongolia to the Riot Games Arena in Los Angeles.</p>

                    <p>

                    </p>
                </div>
            </div>
            <div className="panel">
                <div className="panel-img">
                    <img src="https://cdn.prod.website-files.com/64bf6e8cda9043babe7ca004/68c2fb66cd5cf4cd716e3d5e_67febe0ca54d9653fe69da66_dabuz%2520riddles.webp" />
                    <img src="https://tse3.mm.bing.net/th/id/OIP.xPCwxPoE0TUaJJMmq1fuuwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" />
                </div>
                <div className="panel-content">
                    <h2>Farewell Dabuz and Riddles</h2>
                    <p>
                        Team Liquid competes in a lot of titles but few of them are quite like Super Smash Bros. This game is one of the first ones that we joined when we expanded outside of Starcraft and we were one of the first major esports teams to jump in after the Smash Doc caught fire. Though we are not leaving all of Smash Bros. (not by a longshot) we are leaving the competitive side of Ultimate and saying goodbye to two players that we’ve really come to hold dear over the years they’ve been on the team. (Seriously, everyone here has so much good to say about them.)

In order to commemorate their time here at Team Liquid, we have a few farewell letters to share in addition to our farewell video. We want to thank Riddles and Dabuz for putting their heart into the competition, the content, and the Team Liquid community. We also want to thank every fan who cheered for us and for them over the years. Please keep cheering for them as they find new victories under new banners. 
                    </p>

                </div>
            </div>
            <div className="panel" id='last-panel'>
                <div className="panel-img"> 
                    <img src="https://cdn.prod.website-files.com/64bf6e8cda9043babe7ca006/65f4485ffcfa3b80fe43eff2_Horizontal-on-dark.svg" alt="Team Liquid Icon" />
                </div>
            </div>
        </section>
    )
}

export default ThirdSection