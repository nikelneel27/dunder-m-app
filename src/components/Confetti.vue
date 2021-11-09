<template>
  <div class="confetti">
    <Confetti
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="{
        fullScreen: {
          enable: true,
        },
        particles: {
          number: { value: 0 },
          color: { value: ['#1E00FF', '#FF0061', '#E1FF00', '#00FF9E'] },
          shape: {
            type: 'confetti',
            options: {
              confetti: {
                type: ['circle', 'square'],
              },
            },
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              minimumValue: 0,
              speed: 2,
              startValue: 'max',
              destroy: 'min',
            },
          },
          size: { value: 7, random: { enable: true, minimumValue: 3 } },
          life: {
            duration: { sync: true, value: 5 },
            count: 1,
          },
          move: {
            enable: true,
            gravity: { enable: true, acceleration: 20 },
            speed: 50,
            decay: 0.05,
            direction: 'none',
            outModes: { default: 'destroy', top: 'none' },
          },
        },
        interactivity: { detectsOn: 'canvas', events: { resize: true } },
        detectRetina: true,
        background: { color: '#000' },
        responsive: [
          {
            maxWidth: 700,
            options: { particles: { move: { speed: 30, decay: 0.05 } } },
          },
        ],
        emitters: [
          {
            direction: 'top-right',
            rate: { delay: 0.1, quantity: 10 },
            position: { x: 0, y: 50 },
            size: { width: 100, height: 100 },
          },
          {
            direction: 'top-left',
            rate: { delay: 0.1, quantity: 10 },
            position: { x: 100, y: 50 },
            size: { width: 100, height: 100 },
          },
        ],
      }"
    />
  </div>
</template>


 

<script>
import { loadConfettiShape } from "tsparticles-shape-confetti";
export default {
  methods: {
    particlesInit(main) {
      loadConfettiShape(main);
    },
  },
};
</script>

<style>
.confetti {
  height: 400px;
}
::v-deep confetti #tsparticles {
  height: 400px;
  width: 100%;
}
</style>