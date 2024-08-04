Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".heading", {
  videos: ["./Videos/first.mp4", "./Videos/second.mp4", "./Videos/third.mp4"],
});

gsap.to(".fLeftElm", {
  scrollTrigger: {
    trigger: "#fImages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: "power1.out",
});

let sections = document.querySelectorAll(".fLeftElm");

Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach(function (element, index) {
      ScrollTrigger.create({
        trigger: element,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
