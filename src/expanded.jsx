import { createSignal, onCleanup } from 'solid-js'
import './index.css'
import { Motion } from 'solid-motionone';
import { Show } from 'solid-js';


export default function Expanded(props) {
    return (
        <Show when={props.data}>
            {(data) => {
                const HeroImage = (p) => (
                    <div class='expandedHeroMedia'>
                        <div class={`projectImage ${p.data.imageMode === 'morph' ? 'morph' : 'normal'}`}>
                            <img src={p.data.heroImg} alt=''/>
                        </div>
                    </div>
                );
                return (

                    <Motion.div
                        class='expandedOverlay'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={props.onClose}
                        >
                        <section class='expandedPage' onClick={(e) => e.stopPropagation()} style={{'--bgImg': `url(${props.data.background})`, '--bgOverlay': props.data.overlay ?? 'rgba(0,0,0,0.65)',}}>
                            <button class='expandedClose' onClick={props.onClose}>X</button>
                            <header class='expandedHero'>
                                {data().imagePlacement === 'hero-left' && <HeroImage data={data()} />}
                                <div class='expandedHeroText'>
                                    <h1>{props.data.title}</h1>
                                    <h3>{props.data.subtitle}</h3>
                                    <h3>{props.data.role}</h3>
                                </div>
                                {data().imagePlacement === 'hero-right' && <HeroImage data={data()} />}
                            </header>

                            <div class='expandedMain'>
                                <div class='expandedLeft'>
                                    {data().imagePlacement === 'left-sidebar' && (
                                        
                                        <div class={`projectImage ${data().imageMode === 'morph' ? 'morph' : 'normal'}`}>
                                            <img class='leftSideImg' src={data().heroImg} alt=''/>
                                        </div>
                                    
                                    )}
                                    {props.data.sections?.map((sec, i) => (
                                        <>
                                            <div class='expandedSection'>
                                                <h2>{sec.heading}</h2>
                                                <Show when={sec.heading1}>
                                                    <h2>{sec.heading1}</h2>
                                                </Show>
                                                <p>{sec.text}</p>
                                                <p>{sec.text1}</p>
                                                <p>{sec.text2}</p>
                                                <p>{sec.text3}</p>
                                                <p>{sec.text4}</p>
                                                <p>{sec.text5}</p>
                                                <p>{sec.text6}</p>
                                                <img src={sec.img} alt=''/>
                                            </div>
                                            {data().imagePlacement === 'between-sections' && (
                                                data().imageAfterSection === i && (
                                                    <div class='inlineImageBlock'>
                                                        <div class={`projectImage ${data().imageMode === 'morph' ? 'morph' : 'normal'}`}>
                                                            <img class='inlineImg' src={data().heroImg} alt=''/>
                                                        </div>
                                                    </div>
                                                ))}
                                        </>

                                    ))}
                                </div>
                                <div class='expandedRight'>
                                    {data().imagePlacement === 'right-sidebar' && (
                                        <div class='sideCard'>
                                            <div class={`projectImage ${data().imageMode === 'morph' ? 'morph' : 'normal'}`}>
                                                <img class='sideImg' src={data().heroImg} alt=''/>
                                            </div>
                                        </div>
                                    )}
                                    {props.data.side?.map(block => (
                                        <div class='sideCard'>
                                            <h2>{block.title}</h2>
                                            <p>{block.text}</p>
                                            <p>{block.text1}</p>
                                            <p>{block.text2}</p> 
                                            <p>{block.text3}</p>
                                            <p>{block.text4}</p>
                                            <p>{block.text5}</p>
                                            <Show when={block.link}>
                                                <a href={block.link} target="_blank" rel="noopener noreferrer">{block.linkName}</a>
                                            </Show>
                                            <Show when={block.link1}>
                                                <a href={block.link1} target="_blank" rel="noopener noreferrer">{block.linkName1}</a>
                                            </Show>
                                        </div>
                                    ))}
                                    <div class='skillrow'>
                                        {props.data.tech?.map(t => (
                                            <span class='skillTag'>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Motion.div>
                );
            }}
        </Show>
    );
}
