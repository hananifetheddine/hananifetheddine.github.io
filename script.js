$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Flutter developer", "Ui/Ux mobile designer","Voice over"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Freelancer", "Flutter developer", "Ui/Ux mobile designer","Voice over"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    /*$(document).ready(function(){
        // Initialize Owl Carousel
        $(".owl-carousel").owlCarousel();

        // Add click event to each portfolio item
        $(".card").click(function() {
            // Get the link from the 'a' tag inside the portfolio item
            var link = $(this).find(".text a").attr("href");

            // Show a popup with options
            var choice = prompt("Choose an option:\n1. YouTube\n2. UI\n3. Code\n4. Play Store");

            // Handle the user's choice
            switch (choice) {
                case '1':
                    window.open(link, '_blank'); // Open link in a new tab
                    break;
                case '2':
                    // Handle UI option (you can customize this)
                    alert("Show UI details");
                    break;
                case '3':
                    // Handle Code option (you can customize this)
                    alert("Show Code details");
                    break;
                case '4':
                    // Handle Play Store option (you can customize this)
                    alert("Redirect to Play Store");
                    break;
                default:
                    // Handle other cases or do nothing
                    break;
            }
        });
    });*/
});