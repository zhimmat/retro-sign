var $svg = $('svg');
var $btn = $('.btn');

$svg.on('click', function (e) {
  $svg.toggleClass('is-engaged');
});
