import gsap from "gsap";

import { lerp } from "three/src/math/MathUtils.js";

const collection = {
  1: {
    title: "Python",
    img1: "/LogoBackground/PhythonLogo1.png",
    img: "/Logo/PythonLogo.png",
    description:
      "-Numerous Certifications from Codeacademy \n -Used during the Air Force Research Lab Challenge Competition",
  },
  2: {
    title: "Javascript",
    img1: "/LogoBackground/JavascriptLogo1.png",
    img: "/Logo/JavascriptLogo.png",
    description: "-Used to build DeclanReed.net",
  },
  3: {
    title: "CSS",
    img1: "/LogoBackground/CSSLogo1.png",
    img: "/Logo/CSSLogo.png",
    description: "-Used to build DeclanReed.net",
  },
  4: {
    title: "Laser Engraver",
    img1: "/LogoBackground/LaserEngraverLogo1.png",
    img: "/Logo/LaserEngraverLogo.png",
    description:
      "-Certification from Segal Design Institute \n -Utilized in Personal Projects",
  },
  5: {
    title: "HTML",
    img1: "/LogoBackground/HTMLLogo1.png",
    img: "/Logo/HTMLLogo.png",
    description: "-Used to build DeclanReed.net",
  },
  6: {
    title: "Solid",
    img1: "/LogoBackground/SolidLogo1.png",
    img: "/Logo/SolidLogo.png",
    description: "-Framework used to build DeclanReed.net",
  },
  7: {
    title: "Saws/Mills",
    img1: "/LogoBackground/SawsMillsLogo1.png",
    img: "/Logo/SawsMillsLogo.png",
    description:
      "-Certification from Segal Design Institute \n -Utilized in Personal Projects",
  },
  8: {
    title: "Java",
    img1: "/LogoBackground/JavaLogo1.png",
    img: "/Logo/JavaLogo.png",
    description: "-Learned and used in AP CS \n -Used in Personal Projects",
  },
  9: {
    title: "Blender",
    img1: "/LogoBackground/BlenderLogo1.png",
    img: "/Logo/BlenderLogo.png",
    description:
      "-Used to create and render Images/Animations for DeclanReed.net",
  },
  10: {
    title: "General Machinery",
    img1: "/LogoBackground/GeneralMachineryLogo1.png",
    img: "/Logo/GeneralMachineryLogo.png",
    description:
      "-Certification from Segal Design Institute \n -Utilized in Personal Projects",
  },
  11: {
    title: "NASA CEA",
    img1: "/LogoBackground/NASACEALogo1.png",
    img: "/Logo/NASACEALogo.png",
    description: "-Used to calculate Mixture Ratios for the Propulsion Team",
  },
  12: {
    title: "Fusion360",
    img1: "/LogoBackground/Fusion360Logo1.png",
    img: "/Logo/Fusion360Logo.png",
    description:
      "-3D Design Projects \n -Syracuse University Astro-Bioengineering class \n -Jack Rover construction",
  },
  13: {
    title: "OpenRocket",
    img1: "/LogoBackground/OpenRocketLogo1.png",
    img: "/Logo/OpenRocketLogo.png",
    description: "-Used in early Rocket Propotype Construction at NU Stars",
  },
  14: {
    title: "MotionOne",
    img1: "/LogoBackground/MotionOneLogo1.png",
    img: "/Logo/MotionOneLogo.png",
    description: "-Used to create animations for DeclanReed.net",
  },
  15: {
    title: "Vite",
    img1: "/LogoBackground/ViteLogo1.png",
    img: "/Logo/ViteLogo.png",
    description: "-Framework used to build DeclanReed.net",
  },
};
const titleSVGs = {
  Python: "/Skills/Python.svg",
  Javascript: "/Skills/JavaScript.svg",
  CSS: "/Skills/CSS.svg",
  HTML: "/Skills/HTML.svg",
  Solid: "/Skills/Solid.svg",
  Java: "/Skills/Java.svg",
  Blender: "/Skills/Blender.svg",
  "NASA CEA": "/Skills/NASA CEA.svg",
  Fusion360: "/Skills/Fusion 360.svg",
  OpenRocket: "/Skills/OpenRocket.svg",
  Vite: "/Skills/Vite.svg",
  "Laser Engraver": "/Skills/Laser Engraver.svg",
  "Saws/Mills": "/Skills/Mills.svg",
  "General Machinery": "/Skills/General Machinery.svg",
  MotionOne: "/Skills/Motion One.svg",
};

async function loadInlineSvg(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Failed to load SVG from ${url}: ${res.status} ${res.statusText}`,
    );
  }
  return await res.text();
}

function prepPathDraw(svgEl) {
  const paths = svgEl.querySelectorAll("path");
  paths.forEach((path) => {
    const len = path.getTotalLength();
    path.dataset.length = String(len);
    path.setAttribute("stroke-dasharray", String(len));
    path.setAttribute("stroke-dashoffset", String(len));
  });
}

function reversePathDraw(svgEl) {
  const paths = svgEl.querySelectorAll("path");
  paths.forEach((path) => {
    const len = path.dataset.length || path.getTotalLength();
    path.setAttribute("stroke-dashoffset", String(len));
  });
  svgEl.classList.remove("draw");
}

export function getCollection() {
  const gallery = document.querySelector(".gallery");
  const skillsdescription = document.querySelector(".skillsdescription");
  const galleryContainer = document.querySelector(".gallery-container");
  const skillssectionitems = [];
  const transformState = [];
  let currentTitle = null;
  let currentDescription = null;
  let isPreviewActive = false;
  let isTransitioning = false;
  let activeSkillEl = null;

  const config = {
    imageCount: 15,
    radius: 315,
    sensitivity: 500,
    effectFalloff: 250,
    cardMoveAmount: 50,
    lerpFactor: 0.15,
    isMobile: window.innerWidth <= 500,
  };
  const parallaxState = {
    targetX: 0,
    targetY: 0,
    targetZ: 0,
    currentX: 0,
    currentY: 0,
    currentZ: 0,
  };

  function attachParallax(el) {
    const inner = el.querySelector(".skills-inner");
    if (!inner) return;

    const strength = 15;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      const x = (nx - 0.5) * strength * 2;
      const y = (ny - 0.5) * strength * 2;

      inner.style.setProperty("--bgx", `${x}px`);
      inner.style.setProperty("--bgy", `${y}px`);
    });
    el.addEventListener("mouseleave", () => {
      inner.style.setProperty("--bgx", `0px`);
      inner.style.setProperty("--bgy", `0px`);
    });
  }

  for (let i = 0; i < config.imageCount; i++) {
    const angle = (i / config.imageCount) * Math.PI * 2;
    const x = config.radius * Math.cos(angle);
    const y = config.radius * Math.sin(angle);
    const cardIndex = (i % config.imageCount) + 1;
    const skillssectionitem = document.createElement("div");
    skillssectionitem.className = "skillssectionitem";
    skillssectionitem.dataset.index = i;
    skillssectionitem.dataset.title = collection[cardIndex].title;
    skillssectionitem.dataset.description = collection[cardIndex].description;

    const inner = document.createElement("div");
    inner.className = "skills-inner";
    skillssectionitem.appendChild(inner);

    const bg = document.createElement("img");
    bg.src = collection[cardIndex].img1;
    inner.appendChild(bg);
    bg.className = "skills-bg";

    const fg = document.createElement("img");
    fg.src = collection[cardIndex].img;
    inner.appendChild(fg);
    fg.className = "skills-fg";

    gsap.set(skillssectionitem, {
      x,
      y,
      rotation: (angle * 180) / Math.PI + 90,
      transformPerspective: 800,
      transformOrigin: "center center",
    });

    gallery.appendChild(skillssectionitem);

    attachParallax(skillssectionitem);

    skillssectionitems.push(skillssectionitem);
    transformState.push({
      currentRotation: 0,
      targetRotation: 0,
      currentX: 0,
      targetX: 0,
      currentY: 0,
      targetY: 0,
      currentScale: 1,
      targetScale: 1,
      angle,
    });

    skillssectionitem.addEventListener("click", (e) => {
      if (!isPreviewActive && !isTransitioning) {
        activeSkillEl = skillssectionitem;
        togglePreview(parseInt(skillssectionitem.dataset.index));
        e.stopPropagation();
      }
    });
  }

  function enablePreviewTilt() {
    if (!activeSkillEl) return;

    const onMove = (e) => {
      if (!isPreviewActive || isTransitioning) return;

      const rect = activeSkillEl.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const rx = (-dy / rect.height) * 18;
      const ry = (dx / rect.width) * 18;
      const bg = activeSkillEl.querySelector(".skills-bg");
      gsap.to(bg, {
        rotationX: rx,
        rotationY: ry,
        z: -40,
        transformPerspective: 800,
        transformOrigin: "center center",
        duration: 0.18,
        overwrite: true,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      if (!activeSkillEl) return;
      gsap.to(activeSkillEl, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    activeSkillEl._previewTiltMove = onMove;
    activeSkillEl._previewTiltLeave = onLeave;

    activeSkillEl.addEventListener("mousemove", onMove);
    activeSkillEl.addEventListener("mouseleave", onLeave);
  }

  function disablePreviewTilt() {
    if (!activeSkillEl) return;
    if (activeSkillEl._previewTiltMove) {
      activeSkillEl.removeEventListener(
        "mousemove",
        activeSkillEl._previewTiltMove,
      );
      activeSkillEl._previewTiltMove = null;
    }
    if (activeSkillEl._previewTiltLeave) {
      activeSkillEl.removeEventListener(
        "mouseleave",
        activeSkillEl._previewTiltLeave,
      );
      activeSkillEl._previewTiltLeave = null;
    }
    gsap.set(activeSkillEl, {
      rotationX: 0,
      rotationY: 0,
    });
  }

  function hideDescriptionThenSvg(onDone) {
    const svgEl = skillsdescription.querySelector("svg.skillTitleSvg");
    if (currentDescription) {
      gsap.to(currentDescription, {
        opacity: 0,
        duration: 0.5,
        y: 10,
        ease: "power2.out",
        onComplete: () => {
          currentDescription.remove();
          currentDescription = null;
          if (svgEl) {
            reversePathDraw(svgEl);
            setTimeout(() => {
              skillsdescription.innerHTML = "";
              onDone?.();
            }, 2000);
          } else {
            skillsdescription.innerHTML = "";
            onDone?.();
          }
        },
      });
      return;
    }
    if (svgEl) {
      reversePathDraw(svgEl);
      setTimeout(() => {
        skillsdescription.innerHTML = "";
        onDone?.();
      }, 2000);
    } else {
      skillsdescription.innerHTML = "";
      onDone?.();
    }
  }

  async function togglePreview(index) {
    isPreviewActive = true;
    isTransitioning = true;

    const btn = document.querySelector(".coolButton2");
    btn?.classList.add("fadeOut");

    btn?.addEventListener("animationend", () => btn.classList.add("done"), {
      once: true,
    });

    const btn1 = document.querySelector(".skillslist");
    btn1?.classList.add("fadeOut");

    btn1?.addEventListener("animationend", () => btn1.classList.add("done"), {
      once: true,
    });

    const angle = transformState[index].angle;
    const targetPosition = (Math.PI * 3) / 2;
    let rotationRadians = targetPosition - angle;

    if (rotationRadians > Math.PI) {
      rotationRadians -= Math.PI * 2;
    } else if (rotationRadians < -Math.PI) {
      rotationRadians += Math.PI * 2;
    }

    transformState.forEach((state) => {
      state.currentRotation = state.targetRotation = 0;
      state.currentScale = state.targetScale = 1;
      state.currentX = state.targetX = state.targetY = state.currentY = 0;
    });

    gsap.to(gallery, {
      onStart: () => {
        skillssectionitems.forEach((skillssectionitem, i) => {
          gsap.to(skillssectionitem, {
            x: config.radius * Math.cos(transformState[i].angle),
            y: config.radius * Math.sin(transformState[i].angle),
            rotationY: 0,
            scale: 1,
            duration: 1.25,
            ease: "power4.out",
          });
        });
      },
      scale: 5,
      y: 1400,
      rotation: (rotationRadians * 180) / Math.PI + 360,
      duration: 2,
      ease: "power4.inOut",
      onComplete: () => {
        isTransitioning = false;
        enablePreviewTilt();
      },
    });

    gsap.to(parallaxState, {
      currentX: 0,
      currentY: 0,
      currentZ: 0,
      duration: 0.75,
      ease: "power2.out",
      onUpdate: () => {
        gsap.set(galleryContainer, {
          rotateX: parallaxState.currentX,
          rotateY: parallaxState.currentY,
          rotateZ: parallaxState.currentZ,
          transformOrigin: "center center",
        });
      },
    });

    const titleText = skillssectionitems[index].dataset.title;
    const descriptionText = skillssectionitems[index].dataset.description;

    skillsdescription.innerHTML = "";

    const svgUrl = titleSVGs[titleText];
    if (svgUrl) {
      const svgMarkup = await loadInlineSvg(svgUrl);

      skillsdescription.innerHTML = `
                <div class="skillTitleSlot">
                    ${svgMarkup}
                </div>
            `;
      const svgEl = skillsdescription.querySelector("svg");
      if (svgEl) {
        svgEl.classList.add("skillTitleSvg");
        prepPathDraw(svgEl);
        requestAnimationFrame(() => {
          svgEl.classList.add("draw");
        });
      }
    } else {
      const h1 = document.createElement("h1");
      h1.textContent = titleText;
      skillsdescription.appendChild(h1);
      currentTitle = h1;
    }
    const p = document.createElement("p");
    p.textContent = descriptionText;
    skillsdescription.appendChild(p);
    currentDescription = p;

    const svgEl = skillsdescription.querySelector("svg.skillTitleSvg");
    if (svgEl) {
      const DRAW_MS = 3000;
      setTimeout(() => {
        p.classList.add("show");
      }, DRAW_MS + 500);
    } else {
      p.classList.add("show");
    }
  }

  function resetGallery() {
    hideDescriptionThenSvg();

    gsap.killTweensOf(gallery);
    skillssectionitems.forEach((el) => gsap.killTweensOf(el));
    isTransitioning = false;
    if (isTransitioning) return;
    isTransitioning = true;
    if (currentTitle) {
      const words = currentTitle.querySelectorAll(".title");
      gsap.to(words, {
        y: "-125%",
        duration: 0.75,
        delay: 0.5,
        stagger: 0.1,
        ease: "power4.out",
        onComplete: () => {
          currentTitle.remove();
          currentTitle = null;
        },
      });
      const words1 = currentTitle.querySelectorAll(".description");
      gsap.to(words1, {
        y: "-125%",
        duration: 0.75,
        delay: 0.5,
        stagger: 0.1,
        ease: "power4.out",
        onComplete: () => {
          currentDescription.remove();
          currentDescription = null;
        },
      });
    }

    const viewportWidth = window.innerWidth;
    let galleryScale = 1;

    if (viewportWidth < 750) {
      galleryScale = 0.6;
    } else if (viewportWidth < 1100) {
      galleryScale = 0.8;
    }

    gsap.to(gallery, {
      scale: galleryScale,
      y: 0,
      x: 0,
      rotation: 0,
      duration: 2.5,
      ease: "power4.inOut",
      onComplete: () => {
        isPreviewActive = false;
        isTransitioning = false;

        disablePreviewTilt();
        activeSkillEl = null;

        document
          .querySelector(".coolButton2")
          ?.classList.remove("fadeOut", "done");
        document
          .querySelector(".skillslist")
          ?.classList.remove("fadeOut", "done");

        Object.assign(parallaxState, {
          targetX: 0,
          targetY: 0,
          targetZ: 0,
          currentX: 0,
          currentY: 0,
          currentZ: 0,
        });
      },
    });
  }

  function handleResize() {
    const viewportWidth = window.innerWidth;
    config.isMobile = viewportWidth <= 800;

    let galleryScale = 1;
    if (viewportWidth < 750) {
      galleryScale = 0.6;
    } else if (viewportWidth < 1100) {
      galleryScale = 0.8;
    }
    gsap.set(gallery, {
      scale: galleryScale,
    });
    if (!isPreviewActive) {
      parallaxState.currentX = 0;
      parallaxState.currentY = 0;
      parallaxState.currentZ = 0;
      parallaxState.targetX = 0;
      parallaxState.targetY = 0;
      parallaxState.targetZ = 0;

      transformState.forEach((state) => {
        state.targetRotation = 0;
        state.currentRotation = 0;
        state.targetScale = 1;
        state.currentScale = 1;
        state.targetX = 0;
        state.currentX = 0;
        state.targetY = 0;
        state.currentY = 0;
      });
    }
  }
  window.addEventListener("resize", handleResize);
  handleResize();
  document.addEventListener("click", () => {
    if (isPreviewActive && !isTransitioning) {
      resetGallery();
    }
  });
  document.addEventListener("mousemove", (e) => {
    if (isPreviewActive || isTransitioning || config.isMobile) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const percentX = (e.clientX - centerX) / centerX;
    const percentY = (e.clientY - centerY) / centerY;
    parallaxState.targetY = percentX * 15;
    parallaxState.targetX = -percentY * 15;
    parallaxState.targetZ = (percentX + percentY) * 5;

    skillssectionitems.forEach((skillssectionitem, i) => {
      const rect = skillssectionitem.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.sensitivity && !config.isMobile) {
        const flipFactor = Math.max(0, 1 - distance / config.effectFalloff);
        const angle = transformState[i].angle;
        const moveAmount = config.cardMoveAmount * flipFactor;

        transformState[i].targetRotation = 100 * flipFactor;
        transformState[i].targetX = Math.cos(angle) * moveAmount;
        transformState[i].targetY = Math.sin(angle) * moveAmount;
        transformState[i].targetScale = 1 + 0.3 * flipFactor;
      } else {
        transformState[i].targetRotation = 0;
        transformState[i].targetX = 0;
        transformState[i].targetY = 0;
        transformState[i].targetScale = 1;
      }
    });
  });

  function animateskills() {
    if (!isPreviewActive && !isTransitioning) {
      parallaxState.currentX +=
        (parallaxState.targetX - parallaxState.currentX) * config.lerpFactor;
      parallaxState.currentY +=
        (parallaxState.targetY - parallaxState.currentY) * config.lerpFactor;
      parallaxState.currentZ +=
        (parallaxState.targetZ - parallaxState.currentZ) * config.lerpFactor;
      gsap.set(galleryContainer, {
        rotateX: parallaxState.currentX,
        rotateY: parallaxState.currentY,
        rotation: parallaxState.currentZ,
      });

      skillssectionitems.forEach((skillssectionitem, index) => {
        const state = transformState[index];
        state.currentRotation +=
          (state.targetRotation - state.currentRotation) * config.lerpFactor;
        state.currentX += (state.targetX - state.currentX) * config.lerpFactor;
        state.currentY += (state.targetY - state.currentY) * config.lerpFactor;
        state.currentScale +=
          (state.targetScale - state.currentScale) * config.lerpFactor;
        const angle = state.angle;
        const x = config.radius * Math.cos(angle);
        const y = config.radius * Math.sin(angle);
        gsap.set(skillssectionitem, {
          x: x + state.currentX,
          y: y + state.currentY,
          rotationY: state.currentRotation,
          scale: state.currentScale,
          rotation: (angle * 180) / Math.PI + 90,
          transformPerspective: 800,
        });
      });
    }
    requestAnimationFrame(animateskills);
  }
  animateskills();
}
