import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function gsapInit() {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  gsap.registerEffect({
    name: 'popIn',
    extendTimeline: true,
    effect: (targets: any,
          config: { y: number; delay: number; duration: number; stagger:number }) => {
      return gsap.fromTo(targets, {
            y: config.y,
            opacity: 0,
            delay: config.delay,
          },
          {
            y: 0,
            opacity: 1,
            duration: config.duration,
            ease: "power4.out",
            stagger: config.stagger,
            scrollTrigger: {
              trigger: targets,
            },
          });
    },
    defaults: {  y: 70, delay: 1, duration: 1, stagger: 0 }
  });
}

export default gsapInit;