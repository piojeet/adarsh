
 var lineDom = document.getElementById('lineChart');
var lineChart = echarts.init(lineDom);

var lineOption = {
  grid: { top: 40, bottom: 40, left: 0, right: 25, containLabel: true },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2021-01-01', '2021-02-01', '2021-03-01', '2021-04-01', '2021-05-01', '2021-06-01'], // Add dates here
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
    splitLine: {
      show: true,
      lineStyle: { type: 'dashed', color: '#e0e0e0' },
      interval: 0
    }
  },
  yAxis: { type: 'value', show: false },
  series: [
    {
      data: [70, 150, 180, 200, 230, 260],
      type: 'line',
      smooth: true,
      showSymbol: true,
      symbol: 'circle',
      symbolSize: function (value, params) {
        return params.dataIndex === 5 ? 12 : 6; // Keep the last dot larger by default
      },
      itemStyle: {
        color: function (param) {
          return param.dataIndex === 5 ? '#59c4e6' : '#59c4e6'; // white fill for last dot
        },
        borderColor: function (param) {
          return param.dataIndex === 5 ? '#59c4e6' : '#000'; // blue border for last dot
        },
        borderWidth: function (param) {
          return param.dataIndex === 5 ? 2 : 0; // only last dot has border
        }
      },
      emphasis: {
        symbolSize: 10, // Scale up the size of all dots (except the last one) when hovered
        itemStyle: {
          color: '#ffffff', // Change color on hover for better visibility
          borderColor: '#59c4e6', // Blue border on hover
          borderWidth: 2 // Border width on hover
        }
      },
      lineStyle: {
        color: '#59c4e6',
        width: 2
      }
    }
  ],
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      var date = params[0].axisValueLabel; // Get the date of the hovered point
      var value = params[0].data; // Get the value of the hovered point
      return date + '<br/>Value: ' + value;
    }
  }
};

lineChart.setOption(lineOption);

 

 // ✅ Make chart responsive
 window.addEventListener('resize', function () {
    lineChart.resize();
  });