window.addEventListener('load', function () {

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause"
    });

    //Beneficios
    gsap.to(".benefits__content", {
        opacity: 1,
        scrollTrigger: {
            scrub: true,
            trigger: ".benefits__content",
            toggleActions: "restart pause reverse pause"
        },
        stagger: 0.3,
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
            scrub: true,
            trigger: ".phone-views__text",
            toggleActions: "restart pause reverse pause"
        },
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
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            ease: "sine"
        })
    });

    // Oscurecer fondo
    const features = document.querySelectorAll(".feature");
    gsap.to(features[2], {
        scrollTrigger: {
            trigger: features[1],
            scrub: true,
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