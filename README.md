# **Frontend Mentor Challenge - Results summary component**

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV "https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV").

## Table of contents

-   [Overview](#overview)

-   [My process](#my-process)

    -   [Built with](#built-with)

    -   [What I learned](#what-i-learned)

        -   [GSAP animation](#gsap-animation)

-   [Resources](#resources)

## Overview

Links:

-   GitHub Repo: <https://github.com/xup60521/Results-summary-component>

-   Website: <https://xup60521.github.io/Results-summary-component/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

-   vite

-   typescript

-   tailwindcss

-   gsap (for animation)

### What I learned

#### GSAP animation

I used `gsap` to implement two animations. First is number increment, and second is summary blocks entrance animation.

Both are easy to do with this animation library. When setting up the result value, the only thing we need to do is call `gsap.to` function.

```ts
gsap.to("#result", {
    innerText: "76",
    duration: 1,
    ease: "power1.inOut",
    snap: { innerText: 1 },
});
```

Whenever an user open this page, the animation would automatically play.

Apart from that, I also add another animation. This one has a twist, and we need to take advantage of `gsap`’s helper function.

```ts
const summaryBlocks = gsap.utils.toArray<HTMLDivElement>(".summary-block");
```

By doing so, `summaryBlocks.forEach` can apply multiple GSAP animation to each component at once.

```ts
summaryBlocks.forEach((summaryBlock, index) => {
    gsap.fromTo(
        summaryBlock,
        {
            opacity: 0,
            y: 10,
        },
        {
            opacity: 1,
            y: 0,
            ease: "power1.out",
            duration: 0.5,
            delay: 0.1 * index + 0.225,
        }
    );
});
```

When an user enter this website, these elements fade in sequentially.

## Resources

-   TailwindCSS Docs - <https://tailwindcss.com/docs>

-   Google Fonts - <https://fonts.google.com>

-   GSAP docs - <https://gsap.com/docs/v3/>
