'use strict';

// ----------- MUSTACHE ----------

// mustache
(function(){
  var cellTemplate = document.getElementById('carousel-cells-template').innerHTML;

  Mustache.parse(cellTemplate);

  var listCells = '';

  for(var i = 0; i < cellData.length; i++){
    listCells += Mustache.render(cellTemplate, cellData[i]);
  }

results.insertAdjacentHTML('beforeend', listCells);
  
})();



// ----------- FLICKITY ----------

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



// ----------- MAPS ----------
var infos = document.getElementById('marker-infos');
(function(){

// Initialize and add the map
  window.initMap = function () {

    // The map, centered at cell-1 coords
    var map = new google.maps.Map(
        document.getElementById('map'), {
          zoom: 16, 
          center: cellData[0].coords
        });

        var markersArray = [];

    // Markers, positioned at cell-x coords
    for(var i = 0; i < cellData.length; i++){
      var markerX = new google.maps.Marker({
        position: cellData[i].coords, 
        map: map
      });
      markersArray.push(markerX);

    }    
  };

})();


