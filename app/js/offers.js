$(function(){

  var activeClass = 'offers__cat-list-item--active',
      catItems    = '.offers__cat-list-item',
      json        = 'app/js/offers.json',
      offerPanel  = '.offers__panel';
      template    = $('#mustache').html();



  // --------------- GET JSON --------------- //
  $.getJSON(json, function(data) {
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
