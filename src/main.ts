import gsap from "gsap";

const result = document.getElementById("result")!;
const summaryBlocks = gsap.utils.toArray<HTMLDivElement>(".summary-block");

gsap.to(result, {
    innerText: "76",
    duration: 1,
    ease: "power1.inOut",
    snap: { innerText: 1 },
});

summaryBlocks.forEach((summaryBlock, index) => {
    gsap.fromTo(summaryBlock, {
        opacity: 0,
        y: 10,
    }, {
        opacity: 1,
        y: 0,
        ease: "power1.out",
        duration: 0.5,
        delay: 0.1 * index + 0.225
    });
});
