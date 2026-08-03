"use strict";

/**
 * ===========================================================
 *  Shantanu Sharma CV
 *  app.js
 * ===========================================================
 */

const App = {

    isMobile() {
        return window.matchMedia("(max-width:768px)").matches;
    },

    init() {
        this.updateExperience();
        this.lazyImages();
        this.setBackground();
        this.initParticles();
    },

    /**
     * =======================================================
     * Experience Timer
     * =======================================================
     */
    updateExperience() {

        document.querySelectorAll(".umbrashiaTimer")
            .forEach(el => {

                const from =
                    new Date(el.dataset.from);

                const to =
                    el.dataset.to
                        ? new Date(el.dataset.to)
                        : new Date();

                let months =
                    (to.getFullYear() - from.getFullYear()) * 12 +
                    (to.getMonth() - from.getMonth());

                const years =
                    Math.floor(months / 12);

                months %= 12;

                el.textContent =
                    `${years} Years ${months} Months`;

            });

    },

    /**
     * =======================================================
     * Native Lazy Loading Fallback
     * =======================================================
     */

    lazyImages() {

        const images =
            document.querySelectorAll("img.lazy");

        if (!("IntersectionObserver" in window)) {

            images.forEach(img => {

                img.src = img.dataset.src;

                img.classList.remove("lazy");

            });

            return;

        }

        const observer =
            new IntersectionObserver(entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    const img =
                        entry.target;

                    if (img.dataset.src)
                        img.src = img.dataset.src;

                    if (img.dataset.srcset)
                        img.srcset = img.dataset.srcset;

                    img.classList.remove("lazy");

                    observer.unobserve(img);

                });

            });

        images.forEach(img =>
            observer.observe(img));

    },

    /**
     * =======================================================
     * Desktop Background
     * =======================================================
     */

    setBackground() {

        if (this.isMobile())
            return;

        document.body.style.backgroundImage =
            "url('images/background-min.webp')";

        document.body.style.backgroundRepeat =
            "no-repeat";

        document.body.style.backgroundAttachment =
            "fixed";

        document.body.style.backgroundPosition =
            "center";

        document.body.style.backgroundSize =
            "cover";

    },

    /**
     * =======================================================
     * Particles
     * =======================================================
     */

    initParticles() {

        if (this.isMobile())
            return;

        if (typeof particlesJS === "undefined")
            return;

        const colorStars = [
            {
                color: "#00b3ff",
                stroke: "#fc0000"
            },
            // {
            //     color: "#2fe85b",
            //     stroke: "#9a4fdc"
            // },

           

            // {
            //     color: "#9a4fdc",
            //     stroke: "#fca300"
            // },

            // {
            //     color: "#cdcc56",
            //     stroke: "#00edfc"
            // }

        ];

        requestIdleCallback(() => {

            colorStars.forEach((item, index) => {

                const element =
                    document.querySelector(
                        "#particles-js" + index
                    );

                if (!element)
                    return;

                particlesJS(
                    "particles-js" + index,
                    {

                        particles: {

                            number: {

                                value: 30,

                                density: {

                                    enable: true,

                                    value_area: 200

                                }

                            },

                            color: {

                                value: item.color

                            },

                            shape: {

                                type: "circle"

                            },

                            opacity: {

                                value: 0.8,

                                random: true

                            },

                            size: {

                                value: 3,

                                random: true

                            },

                            line_linked: {

                                enable: true,

                                distance: 150,

                                color: item.stroke,

                                opacity: .4,

                                width: 2

                            },

                            move: {

                                enable: true,

                                speed: 3

                            }

                        },

                        interactivity: {

                            detect_on: "canvas",

                            events: {

                                onhover: {

                                    enable: true,

                                    mode: "grab"

                                },

                                resize: true

                            }

                        },

                        retina_detect: true

                    });

            });

        });

    }

};

/**
 * ===========================================================
 * Web Share API
 * ===========================================================
 */

async function openShareLInk() {

    if (!navigator.share) {

        alert("Web Share API is not supported.");

        return;

    }

    try {

        await navigator.share({

            title: "Shantanu Sharma CV",

            text: "Shantanu Sharma CV",

            url: location.href

        });

    }

    catch (e) {

        console.log(e);

    }

}

/**
 * ===========================================================
 * Initialize
 * ===========================================================
 */

document.addEventListener(
    "DOMContentLoaded",
    () => App.init()
);