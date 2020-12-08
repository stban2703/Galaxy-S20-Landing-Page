window.addEventListener('load', function () {

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause"
    });
    //Beneficios
    gsap.to(".benefits__content", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".benefits__content",
            toggleActions: "restart pause reverse pause"
        },
        duration: 0.5,
        stagger: 0.3,
        ease: "in"
    });
    //inicio
    gsap.to(".phone-views__image", {
        xPercent: -100,
        scrollTrigger: {
            trigger: ".phone-views__text",
            toggleActions: "restart pause reverse pause"
        },
        duration: 1.2,
        ease: "circ"
    });

    gsap.to(".phone-views__text", {

        xPercent: 100,
        opacity: 100,
        scrollTrigger: {
            trigger: ".phone-views__text",
            toggleActions: "restart pause reverse pause"
        },
        duration: 1.2,
        ease: "circ"
    });


    //Ventanas
    const featureWindowLeft = document.querySelectorAll(".feature__windowLeft");
    featureWindowLeft.forEach(elem => {
        gsap.to(elem, {
            xPercent: -100,
            scrollTrigger: {
                trigger: elem,
                delay: 5,
                toggleActions: "restart pause reverse pause"
            },
            duration: 1.5,
            ease: "circ",
        })
    });

    const featureWindowRight = document.querySelectorAll(".feature__windowRight");
    featureWindowRight.forEach(elem => {
        gsap.to(elem, {
            xPercent: 100,
            scrollTrigger: {
                trigger: elem,
                delay: 5,
                toggleActions: "restart pause reverse pause"
            },
            duration: 1.5,
            ease: "circ"
        })
    });

});