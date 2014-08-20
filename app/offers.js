$(function(){

  var catItems = $('.offers__cat-list-item');

  $.getJSON('app/offers.json', function(data) {
    var offers = $(data.offers);

    //stuff here

  })

  catItems.on('click', clickMe);

  function clickMe() {
    var activeClass = 'offers__cat-list-item--active';
    catItems.removeClass(activeClass);
    $(this).addClass(activeClass);
  }

});

// var catItem = $('.offers__cat-list-item');
// var offers = [
//     {
//       "header":   "Lorem ipsum dolor sit amet",
//       "price":    "$75",
//       "image":    "http://static2.nydailynews.com/polopoly_fs/1.1907209.1408381007!/img/httpImage/image.jpg_gen/derivatives/index_140/kittens19f-1-web.jpg",
//       "category": "Travel"
//     },
//     {
//       "header":   "Sed ut perspiciatis unde",
//       "price":    "$100",
//       "image":    "http://static1.nydailynews.com/polopoly_fs/1.1907064.1408368705!/img/httpImage/image.jpg_gen/derivatives/index_140/kid-rock-concert-atlanta.jpg",
//       "category": "Travel"
//     },
//     {
//       "header":   "Voluptatem accusantium",
//       "price":    "$90",
//       "image":    "http://static3.nydailynews.com/polopoly_fs/1.1907021.1408370671!/img/httpImage/image.jpg_gen/derivatives/index_140/people-rowling.jpg",
//       "category": "Events & Activities"
//     },
//     {
//       "header":   "Perspiciatis unde sed ut ",
//       "price":    "$200",
//       "image":    "http://static1.nydailynews.com/polopoly_fs/1.1906590.1408364106!/img/httpImage/image.jpg_gen/derivatives/index_140/heidi-klum.jpg",
//       "category": "Events & Activities"
//     },
//     {
//       "header":   "Nemo enim ipsam voluptatem",
//       "price":    "$55",
//       "image":    "http://static2.nydailynews.com/polopoly_fs/1.1905268.1408139199!/img/httpImage/image.jpg_gen/derivatives/index_140/darkhorse18tvf-1-web.jpg",
//       "category": "Dining"
//     },
//     {
//       "header":   " Quis autem vel eum iure",
//       "price":    "$100",
//       "image":    "http://static1.nydailynews.com/polopoly_fs/1.1907184.1408374440!/img/httpImage/image.jpg_gen/derivatives/index_140/gloria-estefan-atlanta.jpg",
//       "category": "Dining"
//     }
//   ];

//   catItem.on('click', function() {
//     var cat = $(this).data('cat');
//     for (i = 0; i < offers.length; i++) {
//         document.write(offers[i].header);
//     }
//   });

// });






























//   $.each(offers, function (index, obj){
//     $.each(obj, function (key, value) {
//       key === 'header' && dl.append('<dt>' + value + '</dt>');
//       key === 'price' && dl.append('<dd>' + value + '</dd>');
//       key === 'image' && dl.append('<dd><img src="' + value + '"></dd><br>');
//     });
//   });



// });


// function offers(array) {
//   array.forEach(function (a, b, c) {
//     document.write(a.price, '<br>',
//                    '<img src="', a.image, '"><br>',
//                    a.header, '<br>',
//                    a.category,
//                    '<br><br>');
//   })

// }

