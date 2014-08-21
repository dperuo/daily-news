$(function(){

  var activeClass = 'offers__cat-list-item--active',
      catArray    = [],
      catItems    = '.offers__cat-list-item',
      json        = 'app/js/offers.json',
      offerPanel  = '.offers__panel';
      template    = $('#mustache').html();



  // --------------- GET JSON --------------- //
  $.getJSON(json, function(data) {

    data.offers.forEach(function (offer) {
      catArray.push(offer.category);
    });

    $(offerPanel).html(Mustache.render(template, data));
  });



  // --------------- EVENT HANDLERS --------------- //
  $(catItems).on('click', clickMe);



  // --------------- FUNCTIONS --------------- //
  function clickMe() {
    $(catItems).removeClass(activeClass);
    $(this).addClass(activeClass);
  }
});
