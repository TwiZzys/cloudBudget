$(function () {
  $('.toTop').on('click', function (e) {
    e.preventDefault();
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });
  // при прокрутке окна (window)
  $(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 300) {
      // то сделать кнопку scrollup видимой
      $('.toTop').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
      $('.toTop').fadeOut();
    }
  });
  $('.menu').on('click', 'a', function (e) {
    e.preventDefault();
    let cl = $(this).attr('href'),
      top = $(cl).offset().top;

    $('html,body').animate({
      scrollTop: top
    }, 1500)
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
})
