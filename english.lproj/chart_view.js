GoogleCore.ChartView = SC.View.extend({ 
  classNames: 'chart-view',
  chart:null, 
  type:"PieChart",
  didCreateChart:null, 
  render:function(ctx, first) { 
    if(first) { 
      ctx.push('<div style="position:absolute;top:0;left:0;right:0;bottom:0"></div>'); 
    } 
  }, 
  didCreateLayer:function() { 
    this.invokeLast('_createChart'); 
  }, 
  _createChart:function() { 
    if(this._chart) { 
      //
    } else { 
      var data = this.get('data'); 
      var type = this.get('type'); 

      var div = this.$('div')[0]; 
      console.log(div);
      var chart = new google.visualization.ChartWrapper({chartType:type}); 
      chart.setChartType(type);
      chart.setDataTable(data);
      chart.draw(div);
      this._chart = chart; 
      this.set('chart', chart); 
      if(this.didCreateChart) this.didCreateChart(chart); 
    } 
  } 
}); 



