// JQUERY 
   
$(document).ready(function(){
    $(".name, .student, .small-intro").lettering();
    // IMAGES OVERLAY EFFECT
    anime({
        targets: '.home .person-overlay',
        translateX: 1100,
        delay: 1000,
        duration: 1500,
        easing: 'easeInSine'
    })
    anime ({
        targets: '.home .person img', 
        opacity: 1,
        delay: 1500,
        duration: 1500,
        easing: 'easeInSine'
    })

    // STUDENT

    anime({
        targets: '.student span',
        opacity: 1,
        duration: 1500,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start: 3000})
    })

    // FUSION NAME - FADE IN

    anime({
        targets: '.name span',
        opacity: 1,
        duration: 3000,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start: 4500})
    })
    // FUSION 2 ANIMATION UP AND DOWN LETTERS

    anime({
        targets: '.name .char2, .name .char4, .name .char6',
        keyframes: [
            {translateY: 100, duration: 1500}
        ],
        easing: 'easeInOutExpo',
        delay: 8000,
    })
    anime({
        targets: '.name .char3, .name .char5',
        keyframes: [
            {translateY: -100, duration: 1500}
        ],
        easing: 'easeInOutExpo',
        delay: 8000,
    })
    // LOGO
    anime({
        targets: '.search',
        opacity: 1,
        duration: 3000,
        delay: 9500,
    })

     // MENU

     anime({
         targets: '.menu li' ,
         opacity: 1,
         duration: 3000,
         delay: anime.stagger(150, {start: 10500})
     })
  

    // INTRO

    anime({
        targets: '.small-intro span',
        opacity: 1,
        duration: 1000,
        easing: 'easeInSine',
        delay: anime.stagger(50, {start: 11000})
    })



})
