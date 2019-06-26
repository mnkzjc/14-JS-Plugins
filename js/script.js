'use strict';

// mustache
(function(){
  var cellTemplate = document.getElementById('carousel-cells-template').innerHTML;

  Mustache.parse(cellTemplate);

  var listCells = '';

  for(var i = 0; i < cellData.length; i++){
    console.log(cellData);
    listCells += Mustache.render(cellTemplate, cellData[i]);
  }

results.insertAdjacentHTML('beforeend', listCells);
  
})();


// carousel
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  autoPlay: true,
  cellAlign: 'left',
  contain: true,
  hash: true,
  wrapAround: true
});

// reset button
var buttonReset = document.querySelector('.button-reset');
buttonReset.addEventListener('click', function(event){
    flkty.select(0);
});


// progress bar
var progressBar = document.querySelector('.progress-bar')
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

