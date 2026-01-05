import { createSignal, onCleanup, onMount, createEffect } from 'solid-js'
import './index.css'
import { Motion } from 'solid-motionone';
import { Show } from 'solid-js';
import gsap from 'gsap';
import { update } from 'three/examples/jsm/libs/tween.module.js';

export default function Expanded1(props) {
    let sliderRef;
    let wheelRef;
    let rafId;


    const totalSlides = 9;
    const endScale = 5;
    let slideWidth = window.innerWidth * 0.45;
    let viewportCenter = window.innerWidth / 2;
    let isMobile = window.innerWidth <= 900;

    const slideTitles = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
    ]

    let currentX = 0;
    let targetX = 0;
    let isScrolling = false;
    let scrollTimeout;
    let activeSlideIndex = 0;

    const cycles = 3;


    onMount(() => {
        let slideTitleEl;
        const thumbnailWheel = document.querySelector('.thumbnail-wheel');

        
        function createSlides() {
            
            if (!sliderRef) return;
            
            for (let i =0; i < totalSlides * cycles; i++) {
                const slide = document.createElement('div');
                slide.className = 'image-slide';

                const img = document.createElement('img');
                const imageNumber = (i % totalSlides) + 1;
                img.src = `/ImageSection/${imageNumber}.png`
                slide.appendChild(img);
                sliderRef.appendChild(slide);

            }
        }

        function initializeSlider() {
            
            if (!sliderRef) return;
            slideTitleEl = sliderRef.querySelector('.image-slide-title');
            const slides = sliderRef.querySelectorAll('.image-slide');

            slides.forEach((slide, index) => {
                const x = index * slideWidth - slideWidth;
                gsap.set(slide, { x: x });
            });

            const centerOffset = window.innerWidth / 2 - slideWidth / 2;
            const oneCycleWidth = totalSlides * slideWidth;
            currentX = centerOffset - oneCycleWidth;
            targetX = currentX;
        }

        function handleScroll(e) {
            const scrollIntensity = e.deltaY || e.detail || e.wheelDelta * -1;
            targetX -= scrollIntensity * 1;

            isScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 0);
        }

        

        window.addEventListener('wheel', handleScroll, {passive: false});
        window.addEventListener('DOMMouseScroll', handleScroll, {passive: false});



        function createThumbnailItems () {
            if (!wheelRef) return;

            for (let i = 0; i < totalSlides; i++) {
                const angle = (i / totalSlides) * Math.PI * 2;
                const radius = isMobile ? 150 : 300;
                const rect = wheelRef.getBoundingClientRect();
                const centerX =rect.width / 2;
                const centerY = rect.height / 2;
                const x = radius * Math.cos(angle) + centerX;
                const y = radius * Math.sin(angle) + centerY;
                
                const thumbnail = document.createElement('div');
                thumbnail.className = 'thumbnail-item';
                thumbnail.dataset.index = i;
                thumbnail.dataset.angle = angle;
                thumbnail.dataset.radius = radius;
                
                const img = document.createElement('img');
                const imageNumber = i + 1;
                img.src = `/ImageSection/${imageNumber}.png`;
                thumbnail.appendChild(img);
                gsap.set(thumbnail, {
                    x,
                    y,
                    xPercent: -50,
                    yPercent: -50,
                    transformOrigin: 'center center',

                });
                wheelRef.appendChild(thumbnail);
            }
        }

        function updateThumbnailItems() {
            if (!wheelRef) return;
            
            const exactSlideProgress = Math.abs(currentX) / slideWidth;
            const currentRotationAngle = -(exactSlideProgress * (360 / totalSlides)) + 90;

            const thumbnails = document.querySelectorAll('.thumbnail-item');
            thumbnails.forEach((thumbnail) => {
                const baseAngle = parseFloat(thumbnail.dataset.angle);
                const radius = isMobile ? 150 : 300;
                const currentAngle = baseAngle + (currentRotationAngle * Math.PI) / 180;
                const rect = wheelRef.getBoundingClientRect();
                const centerX =rect.width / 2;
                const centerY = rect.height / 2;
                const x = radius * Math.cos(currentAngle) + centerX;
                const y = radius * Math.sin(currentAngle) + centerY;

                gsap.set(thumbnail, {
                    x,
                    y,
                    xPercent: -50,
                    yPercent: -50,
                    rotation: 0,
                    transformOrigin: 'center center',
                });
            });
        }

        function animate() {
            currentX += (targetX - currentX) * 0.1;

            const oneCycleWidth = totalSlides * slideWidth;
            if (currentX > (window.innerWidth / 2)) {
                currentX -= oneCycleWidth;
                targetX -= oneCycleWidth;
            } else if (currentX < -(oneCycleWidth * 2)) {
                currentX += oneCycleWidth;
                targetX += oneCycleWidth;
            }
            
            const slides = document.querySelectorAll('.image-slide');
            
            let closestDistance = Infinity;
            let closestIndex = 0;

            slides.forEach((slide, index) => {
                const x = index * slideWidth + currentX;
                gsap.set(slide, {x: x})
                const slideCenterX = x + slideWidth /2;
                const distanceFromCenter = Math.abs(slideCenterX - viewportCenter);

                const outerDistance = slideWidth * 3;
                const progress = Math.min(distanceFromCenter / outerDistance, 1);

                const easedProgress =
                    progress < 0.5
                        ? 2 * progress * progress
                        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                const scale = 1 + easedProgress * (endScale - 1);
                const img = slide.querySelector('img');
                gsap.set(img, {scale: scale});

                if (distanceFromCenter < closestDistance) {
                    closestDistance = distanceFromCenter;
                    closestIndex = index % totalSlides;
                    
                }
                

            });

            activeSlideIndex = closestIndex;
            if (slideTitleEl) slideTitleEl.textContent = slideTitles[activeSlideIndex];
            
            updateThumbnailItems();
            rafId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            isMobile = window.innerWidth <= 900;
            slideWidth = window.innerWidth * (isMobile ? 0.75 : 0.45);
            viewportCenter = window.innerWidth / 2;
            createThumbnailItems();
            initializeSlider();
        });


        createEffect(() => {
            if (!props.data || !sliderRef) return;
            if (!wheelRef) return;
            
            createSlides();
            initializeSlider();
            createThumbnailItems();
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(animate);
            onCleanup(() => {
                window.removeEventListener('wheel', handleScroll);
                cancelAnimationFrame(rafId);
            })
            
        })
    });

    


    return (
        <Show when={props.data}>
            
            
            <Motion.div 
                class='imageOverlay'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                onClick={props.onClose}>
                        
                <div class='imagePage' onClick={(e) => e.stopPropagation()}>
                    <button class='expandedClose' onClick={props.onClose}>X</button>
                    <div class='image-slider' ref={(el) => (sliderRef = el)}>
                        <p class='image-slide-title'>Declan Reed</p>

                    </div>
                    <div class='thumbnail-wheel' ref={(el) => (wheelRef = el)}>

                    </div>
                    
                </div>
            </Motion.div>

            
            
        </Show>
    )
}