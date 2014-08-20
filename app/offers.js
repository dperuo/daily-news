$(function(){

  $.getJSON('app/offers.json', function(data) {

    var catArray = [],
        template = $('#mustache').html(),
        html     = Mustache.render(template, data);

    data.offers.forEach(function (offer, index) {
      catArray.push(offer.category)
    })

    alert(catArray)

    $('.offers__panel').html(html);
  })

  var catItems = $('.offers__cat-list-item');

  catItems.on('click', clickMe);

  function clickMe() {
    var activeClass = 'offers__cat-list-item--active';
    catItems.removeClass(activeClass);
    $(this).addClass(activeClass);
  }
});
