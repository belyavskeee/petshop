AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//работа 5
function func1() {
  var btn = document.querySelector('.open-popup');
  var blockHidden = document.querySelector('.popup-bg');
  blockHidden.classList.add('b-show');
}

function func2() {
  var b = document.querySelector("textarea");
  b.setAttribute("disabled", "disabled");
}



//работа 6-7
$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup-bg').click(function(e) {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

//работа 8
$(document).ready(function() {
  $('.baton').click(function(e) {
    e.preventDefault();
    var first_name = $('#firstName').val();
    var last_name = $('#lastName').val();
    var email = $('#email').val();
    var address = $('#address').val();
 
    $(".error").remove();
 
    if (first_name.length< 1) {
      $('#firstName').after('<p class="error">Это поле не должно быть пустым</p>');
    }
    if (last_name.length< 1) {
      $('#lastName').after('<p class="error">Это поле не должно быть пустым</p>');
    }
    if (email.length< 1) {
      $('#email').after('<p class="error">Это поле не должно быть пустым</p>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<p class="error">Введите правильную почту</p>');
      }
    }
    if (password.length< 8) {
      $('#address').after('<p class="error">Адрес не может быть менее 8 символов</p>');
    }
  });
});


$('.update').click(function(e) {
  e.preventDefault();
  $('h3').fadeOut(800);
  $('li:odd').addClass('grey_text');
});

$(document).ready(function(){   
    // создаем действия при клике на кнопку
    var animateTest = function() {
        var widthElement = parseInt($('.kvadrat').width());
        var heightElement = parseInt($('.kvadrat').height());
        var stepZoom = 50;
        var speedAnimate = 1000;
        // запуск анимации
        $(this).animate(
            // анимация
            {
                width: (widthElement + stepZoom) + 'px',
                height: (heightElement + stepZoom) + 'px'
            }, 
            // скорость анимации
            speedAnimate,                   
        );
    }
     
    //  задаем действия для кнопки
    $('.kvadrat').bind('click', animateTest);
});



// $( "#controlgroup" ).controlgroup();

// $( "#tabs" ).tabs();

// $( "#dialog" ).dialog({
//     autoOpen: false,
//     width: 400,
//     buttons: [
//         {
//             text: "Ok",
//             click: function() {
//                 $( this ).dialog( "close" );
//             }
//         },
//         {
//             text: "Cancel",
//             click: function() {
//                 $( this ).dialog( "close" );
//             }
//         }
//     ]
// });

// // Link to open the dialog
// $( "#dialog-link" ).click(function( event ) {
//     $( "#dialog" ).dialog( "open" );
//     event.preventDefault();
// });

// $( "#datepicker" ).datepicker({
//     inline: true
// });

// $( "#slider" ).slider({
//     range: true,
//     values: [ 17, 67 ]
// });

// $( "#progressbar" ).progressbar({
//     value: 20
// });

// $( "#spinner" ).spinner();

// $( "#menu" ).menu();

// $( "#tooltip" ).tooltip();

// $( "#selectmenu" ).selectmenu();

// // Hover states on the static widgets
// $( "#dialog-link, #icons li" ).hover(
//     function() {
//         $( this ).addClass( "ui-state-hover" );
//     },
//     function() {
//         $( this ).removeClass( "ui-state-hover" );
//     }
// );


new Swiper('.swiper', {
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination', // "String with CSS selector or HTML element of the container with pagination" - цитата из документации, обратие внимание
        clickable: true,
        },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },

    spacebetween: 90,
});