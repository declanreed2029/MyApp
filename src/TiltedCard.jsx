import {onMount, onCleanup} from 'solid-js';
import { Motion } from 'solid-motionone';
import { createSignal} from "solid-js";

export default function TiltedCard(props) {
  let ref;

  const [rotateX, setRotateX] = createSignal(0);
  const [rotateY, setRotateY] = createSignal(0);
  const [scale, setScale] = createSignal(1);

  function onMove(e) {
    const rect = ref.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;

    const rx = ((-dy / rect.height) * 20);
    const ry = ((dx / rect.width) * 20);

    setRotateX(rx);
    setRotateY(ry);
    ref.style.setProperty('--tiltX', ry.toFixed(3));
    ref.style.setProperty('--tiltY', rx.toFixed(3));
    ref.style.setProperty('--mx', (dx / (rect.width / 2)).toFixed(3));
    ref.style.setProperty('--my', (dy / (rect.height / 2)).toFixed(3));
  } 

  function onEnter() {
    setScale(1.1);
  }

  function onLeave() {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  }

  return (
    <div
      ref={ref}
      class="tilt-wrapper"
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Motion.div
        class="tilt-inner"
        style={{
          zIndex: 2,
          transform: `perspective(1000px) rotateX(${rotateX()}deg) rotateY(${rotateY()}deg) scale(${scale()})`,
          transformStyle: "preserve-3d",
          transition: "transform 0.2s ease-out"
        }}
      >
        {props.children}
      </Motion.div>
    </div>
  );
}


