#Overview

This is a Google Maps view for [Sproutcore](http://www.github.com/sproutcore/sproutcore).

#How to use

Clone this repository in your frameworks folder. 
To include a map in your view, add the following to your page:

    map: GoogleCore.MapView.design({
      layout: { left: 500, top: 20, width: 250, height: 250 },
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 14
    })

To include a chart in your view, add the following to your page:

    chart: GoogleCore.ChartView.design({
      type: "PieChart",
      layout: { left: 800, top: 20, width: 250, height: 250 },
      data: new google.visualization.DataTable({
        cols: [
          {id: 'task', label: 'Task', type: 'string'},
          {id: 'hours', label: 'Hours per Day', type: 'number'}
        ],
        rows: [
          {c:[{v: 'Work'}, {v: 11}]},
          {c:[{v: 'Eat'}, {v: 2}]},
          {c:[{v: 'Commute'}, {v: 2}]},
          {c:[{v: 'Watch TV'}, {v:2}]},
          {c:[{v: 'Sleep'}, {v:7, f:'7.000'}]}
        ]
      }),
    })

