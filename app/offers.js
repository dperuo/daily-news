$(function(){

  $.getJSON('app/offers.json', function(data) {

    $(data.offers).each(function (index, offer) {
      $('.offers__panel').append('<div class="offers__panel-item" data-cat="' + offer.category + '"><dt class="offers__panel-header">' + offer.header + '</dt><dd class="offers__panel-img"><img src="' + offer.image + '"></dd><dd class="offers__panel-price">' + offer.price + '</dd></div>')
    })
  })

  var catItems = $('.offers__cat-list-item');

  catItems.on('click', clickMe);

  function clickMe() {
    var activeClass = 'offers__cat-list-item--active';
    catItems.removeClass(activeClass);
    $(this).addClass(activeClass);
  }

});
