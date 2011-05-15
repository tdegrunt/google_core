GoogleCore.MapView = SC.View.extend({ 
  classNames: 'map-view',
  map:null, 
  center:new google.maps.LatLng(0, 0), 
  zoom:14, 
  didCreateMap:null, 
  render:function(ctx, first) { 
    if(first) { 
      ctx.push('<div style="position:absolute;top:0;left:0;right:0;bottom:0"></div>'); 
    } 
  }, 
  didCreateLayer:function() { 
    this.invokeLast('_createMap'); 
  }, 
  _createMap:function() { 
    if(this._map) { 
      google.maps.event.trigger(this._map, 'resize'); 
    } else { 
      var center = this.get('center'); 
      var opts = { 
        zoom: this.get('zoom'), 
        center: center, 
        mapTypeId: google.maps.MapTypeId.ROADMAP 
      }; 
      var div = this.$('div')[0]; 
      var map = new google.maps.Map(div, opts); 
      this._map = map; 
      this.set('map', map); 
      if(this.didCreateMap) this.didCreateMap(map); 
    } 
  } 
}); 


