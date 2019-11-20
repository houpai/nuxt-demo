let chartData = [
  {
    year: "1.桂林西瓜霜含片（3ug*20片）",
    sales: 38
  },
  {
    year: "2.1952 年",
    sales: 52
  },
  {
    year: "3.1957 年",
    sales: 145
  },
  {
    year: "4.1958 年",
    sales: 48
  }
];

function compare(property) {
  return function(a, b) {
    let value1 = a[property];
    let value2 = b[property];
    return value1 - value2;
  };
}

let formatedChartData = chartData.sort(compare('year'));
console.log('formatedChartData===', formatedChartData);
