window.addEventListener('load', function () {

    gsap.registerPlugin(ScrollTrigger);


    const benefits = document.querySelectorAll(".benefits__content")
    //Beneficios
    gsap.to(".benefits__content", {
        opacity: 1,
        scrollTrigger: {
            start: "top center",
            trigger: ".benefits__content",
            toggleActions: "play none reverse reset"
        },
        stagger: 0.1,
        duration: 0.5,
        ease: "in"
    });

    //inicio
    gsap.to(".phone-views__image", {
        xPercent: -100,
        scrollTrigger: {
            trigger: ".phone-views__text",
            toggleActions: "play none reverse reset"
        },
        duration: 1.5,
        ease: "circ"
    });

    gsap.to(".phone-views__text", {
        xPercent: 100,
        opacity: 100,
        scrollTrigger: {
            trigger: ".phone-views__text",
            toggleActions: "play none reverse reset"
        },
        duration: 1.5,
        ease: "circ"
    });


    //Ventanas
    const featureWindowLeft = document.querySelectorAll(".feature__windowLeft");
    featureWindowLeft.forEach(elem => {
        gsap.to(elem, {
            xPercent: -100,
            scrollTrigger: {
                start: "top 10% center",
                trigger: elem,
                toggleActions: "play none reverse reverse"
            },
            duration: 1.5,
            ease: "expo",
        })
    });

    const featureWindowRight = document.querySelectorAll(".feature__windowRight");
    featureWindowRight.forEach(elem => {
        gsap.to(elem, {
            xPercent: 100,
            scrollTrigger: {
                start: "top 10% center",
                trigger: elem,
                toggleActions: "play none reverse reverse"
            },
            duration: 1.5,
            ease: "expo"
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
                toggleActions: "play none reverse reset"
            },
            duration: 1.2,
            ease: "sine"
        })
    });

    // Transicion gatos
    gsap.to(".feature__interaction--zoom", {
        scrollTrigger: {
            start: "top center",
            trigger: document.querySelector(".feature__interaction--zoom"),
            toggleActions: "play none reverse reset"
        },
        opacity: 1,
        ease: "in",
        duration: 1.5
    });

    // Transicion video
    gsap.to(".feature__media", {
        scrollTrigger: {
            start: "top center",
            trigger: document.querySelector(".feature__media"),
            toggleActions: "play none reverse reset"
        },
        opacity: 1,
        ease: "in",
        duration: 1.5
    });

    // Oscurecer fondo
    const features = document.querySelectorAll(".feature");

    gsap.to(features[1], {
        scrollTrigger: {
            start: "top top",
            trigger: document.querySelector(".blank"),
            scrub: true,
            toggleActions: "play none reverse reset"
        },
        backgroundColor: "#000000",
        ease: "in"
    });

    gsap.to(document.querySelector(".blank"), {
        scrollTrigger: {
            trigger: document.querySelector(".blank"),
            scrub: true,
            start: "top top",
            toggleActions: "play none reverse reset"
        },
        backgroundColor: "#000000",
        ease: "in"
    });


    gsap.to(features[2], {
        scrollTrigger: {
            trigger: document.querySelector(".blank"),
            scrub: true,
            start: "top top",
            toggleActions: "play none reverse reset"
        },
        backgroundColor: "#000000",
        ease: "in"
    });

    gsap.to(".feature__window--dark", {
        scrollTrigger: {
            trigger: document.querySelector(".blank"),
            scrub: true,
            start: "top top",
            toggleActions: "play none reverse reset"
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

    // Animacion newsletter
    const newsletterContainer = document.querySelector(".newsletter__container");
    const nlForm = document.querySelector(".newsletter__form");

    nlForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const tl = gsap.timeline({});
        tl.to(newsletterContainer, {x: -100, duration: 0.5});
        tl.to(newsletterContainer, {x: 1000, opacity: 0, duration: 1, ease: "power3"});
        tl.to(newsletterContainer, {x: -2000, duration: 0});
        tl.to(newsletterContainer, {x: 0, opacity: 1, duration: 2, ease: "sine"});
    })

});