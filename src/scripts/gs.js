window.addEventListener('load', function () {

    gsap.registerPlugin(ScrollTrigger);


    //Beneficios
    gsap.to(".benefits__content", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".benefits__content",
            toggleActions: "restart pause reverse pause"
        },
        stagger: 0.1,
        duration: 0.5,
        ease: "in"
    });

    //inicio
    gsap.to(".phone-views__image", {
        xPercent: -100,
        scrollTrigger: {
            scrub: true,
            trigger: ".phone-views__text",
            toggleActions: "restart pause reverse pause"
        },
        ease: "circ"
    });

    gsap.to(".phone-views__text", {
        xPercent: 100,
        opacity: 100,
        scrollTrigger: {
            trigger: ".phone-views__text",
            toggleActions: "restart pause reverse pause"
        },
        duration: 0.5,
        ease: "circ"
    });


    //Ventanas
    const featureWindowLeft = document.querySelectorAll(".feature__windowLeft");
    featureWindowLeft.forEach(elem => {
        gsap.to(elem, {
            xPercent: -100,
            scrollTrigger: {
                scrub: true,
                trigger: elem,
                toggleActions: "restart pause reverse pause"
            },
            ease: "circ",
        })
    });

    const featureWindowRight = document.querySelectorAll(".feature__windowRight");
    featureWindowRight.forEach(elem => {
        gsap.to(elem, {
            xPercent: 100,
            scrollTrigger: {
                scrub: true,
                trigger: elem,
                delay: 1,
                toggleActions: "restart pause reverse pause"
            },
            ease: "circ"
        })
    });

    // Texto de las secciones
    const sectionDescText = document.querySelectorAll(".section-desc__text");
    sectionDescText.forEach(elem => {
        gsap.to(elem, {
            yPercent: 100,
            opacity: 1,
            scrollTrigger: {
                trigger: elem,
                toggleActions: "restart pause reverse pause"
            },
            duration: 0.5,
            ease: "sine"
        })
    });

    // Oscurecer fondo
    const features = document.querySelectorAll(".feature");

    gsap.to(features[1], {
        scrollTrigger: {
            start: "top top",
            trigger: document.querySelector(".blank"),
            scrub: true,
            toggleActions: "restart pause reverse pause"
        },
        backgroundColor: "#000000",
        ease: "in"
    });

    gsap.to(document.querySelector(".blank"), {
        scrollTrigger: {
            trigger: document.querySelector(".blank"),
            scrub: true,
            start: "top top",
            toggleActions: "restart pause reverse pause"
        },
        backgroundColor: "#000000",
        ease: "in"
    });


    gsap.to(features[2], {
        scrollTrigger: {
            trigger: document.querySelector(".blank"),
            scrub: true,
            start: "top top",
            toggleActions: "restart pause reverse pause"
        },
        backgroundColor: "#000000",
        ease: "in"
    });

    


    // Modo noche transicion
    gsap.utils.toArray(".comparisonSection").forEach(section => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "center center",
                // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                end: () => "+=" + section.offsetWidth,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                pinSpacing: section.offsetWidth
            },
            defaults: { ease: "none" }
        });
        // animate the container one way...
        tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0 }, { xPercent: 0 })
            // ...and the image the opposite way (at the same time)
            .fromTo(section.querySelector(".afterImage img"), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
    });

});