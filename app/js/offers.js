$(function(){

  var catItems = $('.offers__cat-list-item');


  // --------------- GET JSON --------------- //
  $.getJSON('app/js/offers.json', function(data) {

    var catArray = [],
        template = $('#mustache').html(),
        html     = Mustache.render(template, data);

    data.offers.forEach(function (offer) {
      catArray.push(offer.category);
    });

    $('.offers__panel').html(html);
  });


  // --------------- EVENT HANDLERS --------------- //
  catItems.on('click', clickMe);



  // --------------- FUNCTIONS --------------- //
  function clickMe() {
    var activeClass = 'offers__cat-list-item--active';
    catItems.removeClass(activeClass);
    $(this).addClass(activeClass);
  }
});
