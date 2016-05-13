
$(document).ready(function(){
   /* $("#count1").spincrement({
        thousandSeparator: " ", // Разделитель тыcячных
        duration: 1200,         // Продолжительность анимации в миллисекундфч
        decimalPlaces: 0,       // Сколько знаков оставлять после запятой
        decimalPoint: ""     // Разделитель десятичной части числа
    });

    $("#count2").spincrement({
        thousandSeparator: " ",
        duration: 1200,
        decimalPlaces: 0,
        decimalPoint: ""
    });

    $("#count3").spincrement({
        thousandSeparator: " ",
        duration: 2000,
        decimalPlaces: 0,
        decimalPoint: ""
    });*/

    var show = true;
    var countBox = "#counts";
    $(window).on("scroll load resize", function(){

              if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

              var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
              var e_top = $(countBox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

              console.log(w_top+"."+e_top);

              var w_height = $(window).height();        // Высота окна браузера
              var d_height = $(document).height();      // Высота всего документа

              var e_height = $(countBox).outerHeight(); // Полная высота блока со счетчиками

              if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
                  $("#count1").spincrement({
                      thousandSeparator: " ", // Разделитель тыcячных
                      to: 100,
                      duration: 1200,         // Продолжительность анимации в миллисекундфч
                      decimalPlaces: 0,       // Сколько знаков оставлять после запятой
                      decimalPoint: ""     // Разделитель десятичной части числа
                  }),
                      $("#count2").spincrement({
                      thousandSeparator: " ",
                      to: 1300,
                      duration: 1200,
                      decimalPlaces: 0,
                      decimalPoint: ""
                      }),
                      $("#count3").spincrement({
                      thousandSeparator: " ",
                      to: 15000,
                      duration: 2000,
                      decimalPlaces: 0,
                      decimalPoint: ""
                  });

                  show = false;
              }
          });
});