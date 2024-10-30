function element(id) {
  return document.getElementById(id)
}

function createGraph() {
  Highcharts.chart('graphContainer', {
    title: {
      text: 'ผู้ป่วยแต่ละประเภทในปี 2563-2565'
    },
    yAxis: {
      title: {
        text: 'จำนวน (คน)'
      }
    },
    xAxis: {
      title: {
        text: 'ปี'
      },
      tickInterval: 1
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2563
      }
    },
    series: [{
      name: 'ผู้ป่วยสะสม',
      data: [21716, 2163101, 2229381]
    }, {
      name: 'ผู้ป่วยรักษาสะสม',
      data: [29, 22615, 21605]
    }, {
      name: 'ผู้ป่วยเสียชีวิตสะสม',
      data: [68, 5546, 10053]
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  });
}

function createBar() {
  Highcharts.chart('barContainer', {
    chart: {
      type: 'bar'
    },
    title: {
        text: 'ผู้ป่วยแต่ละประเภทในปี 2563-2565'
    },
    xAxis: {
        categories: ['ผู้ป่วยสะสมทั้งหมด', 'ผู้ป่วยรักษาสะสม', 'ผู้ป่วยเสียชีวิตสะสม'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'จำนวน (คน)',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'ปี 2565',
        data: [2229381, 2163101, 21716]
    }, {
      name: 'ปี 2564',
        data: [21605, 22615, 29]
    }, {
      name: 'ปี 2563',
        data: [10053, 5546, 68]
    },]
  });
}

function createPie() {
  Highcharts.chart('pieContainer', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'สัดส่วนรักษาสำเร็จและเสียชีวิตสะสม'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'ผู้ติดเชื้อรักษาสะสม',
          y: 2191262,
        sliced: true,
        selected: true
      }, {
          name: 'ผู้ติดเชื้อเสียชีวิตสะสม',
          y: 21813
      }]
    }]
  });
}

function createTable() {
  let thead = element('thead');
  let tbody = element('tbody');

  function createCol(txt, notheader) {
    let c = document.createElement(notheader == undefined? 'th': 'td');
    c.textContent = txt;
    return c
  }
  function createHeader() {
    thead.appendChild(createCol('ปี'));
    thead.appendChild(createCol('ผู้ป่วยติดเชื้อสะสม'));
    thead.appendChild(createCol('ผู้ป่วยรักษาสะสม'));
    thead.appendChild(createCol('ผู้ป่วยเสียชีวิตสะสม'));
  }

  function addBody(d) {
    let tr = document.createElement('tr');
    
    tr.appendChild(createCol(d.name, true))
    tr.appendChild(createCol(d.total, true))
    tr.appendChild(createCol(d.screen, true))
    tr.appendChild(createCol(d.provide, true))

    tbody.appendChild(tr);
  }

  function createBody() {
    addBody({ name: '2565', total: 2229381, screen: 2163101, provide: 21716 });
    addBody({ name: '2564', total: 21605, screen: 22615, provide: 29 });
    addBody({ name: '2563', total: 10053, screen: 5546, provide: 68 });
  } 

  createHeader();
  createBody();
}

$(document).ready(function () {
      totalH.textContent = 2261039;
      screenH.textContent = 2191262;
      provideH.textContent = 21813;
    
      createGraph();
      createBar();
      createPie();
      createTable();
});