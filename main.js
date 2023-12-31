var trace1 = {
  x: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
  y: [35, 40, 45, 50, 60, 65, 70, 72, 80, 88, 94, 115, 150],
  name: "Total Interest K244,313",
  type: "bar",
  marker: {
    color: [
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
      "rgba(23,38,120,0.8)",
    ],
  },
};

var trace2 = {
  x: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
  y: [20, 28, 33, 40, 50, 55, 59, 65, 72, 80, 85, 100, 110],
  name: "Emplayee K52500",
  type: "bar",
  marker: {
    color: [
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
      "rgba(54, 93, 221, 0.8)",
    ],
  },
};
var trace3 = {
  x: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
  y: [18, 20, 24, 30, 36, 41, 46, 52, 58, 63, 68, 72, 75],
  name: "Employer K73,500",
  type: "bar",
  marker: {
    color: [
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
      "rgba(100, 165, 224, 0.88)",
    ],
  },
};

var data = [trace1, trace2, trace3];

var layout = {
  barmode: "stack",
  title: "Contribution OverTime",
  // color: ['rgba(204,204,204,1)', 'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)']
};

Plotly.newPlot("myDiv", data, layout);
