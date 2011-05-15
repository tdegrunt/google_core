#Overview

This is a Google Maps view for [Sproutcore](http://www.github.com/sproutcore/sproutcore).

#How to use

Clone this repository in your frameworks folder. And include something like tho following in your views:

    map: GoogleCore.MapView.design({
      layout: { left: 500, top: 20, width: 250, height: 250 },
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 14
    })
