$(function(){
    tabs();
    firstslider();
    secondslider();
    mainlider();
    blogblur();
    showmap();
});
   function tabs() {

       $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
           $(this)
               .addClass('active').siblings().removeClass('active')
               .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
       });

   }





 function firstslider() {
     $('.owl-carousel ').owlCarousel({
         items: 1,
         loop: true,
         margin: 1,
         heigth: 550,
         dots: false,
         nav: true,
         navText: ["<img src=\"img/arrowleft.png\" />", "<img src=\"img/arrowright.png\" />"]

     });
 }

function secondslider() {
    $('.owl-carouselfirst').owlCarousel({
        items: 4,
        loop: true,
        margin: 1,
        dots: false,
        nav: true,
        navText: ["<img src=\"img/arrowl.png\" />", "<img src=\"img/arrowr.png\" />"]
    });
}

function mainlider() {
    $('.photoslider').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: true,
        animateOut: 'flipOutX',
        animateIn: 'flipInX'

    });
}

function blogblur() {

    $('.flex-container-blog img').mouseover(function() {
        $(".eye img , .eye2 img ,.eye3 img ").stop().animate({
            opacity: 1
        }, 500 ),
        $( ".link img,.link2 img,.link3 img" ).stop().animate({
            opacity: 1
        }, 500 ),
        $( ".flex-item-blog>img" ).css({
            "filter" : "blur(2px)"
        });

    });
    $('.flex-container-blog img').mouseout(function() {
        $( ".eye img, .eye2 img ,.eye3 img " ).stop().animate({
            opacity: 0
        }, 500 ),
        $( ".link img,.link2 img,.link3 img" ) .stop().animate({
            opacity: 0
        }, 500 ),
        $( ".flex-item-blog>img" ).css({
            "filter" : "blur(0px)"
        });
    });
/*---------PRICES------*/
    $('.flex-item-price').mouseover(function() {
        $( ".flex-item-price>.prices b" ).css({
                "color" : "#f4511e"
            });

    });
    $('.flex-item-price2').mouseover(function() {
        $( ".flex-item-price2>.prices b" ).css({
            "color" : "#f4511e"
        });

    });
    $('.flex-item-price3').mouseover(function() {
        $( ".flex-item-price3>.prices b" ).css({
            "color" : "#f4511e"
        });

    });
    $('.flex-item-price4').mouseover(function() {
        $( ".flex-item-price4>.prices b" ).css({
            "color" : "#f4511e"
        });

    });
    $('.flex-item-price,.flex-item-price2,.flex-item-price3,.flex-item-price4').mouseout(function() {
        $( ".prices b" ).css({
            "color" : "rgb(255,255,255)"
        });

    });
    /*---------MENU------*/
    $('.menu').mouseover(function() {
        $(".submenu").stop().animate({
            opacity: 1
        }, 1000 );

    });
    $('.menu').mouseout(function() {
        $(".submenu").stop().animate({
            opacity: 0
        }, 1000 );

    });



}

function showmap() {

    $('.map button').click(function () {
        $(".maps").toggle({
            "display": "block",
            "position": "relative"
        });

    });
}