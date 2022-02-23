const TEST_DATA = [
    {'id' :1, 'value': 100, 'country': 'India'},
    {'id' :2, 'value': 160, 'country': 'USA'},
    {'id' :3, 'value': 80, 'country': 'China'},
    {'id' :4, 'value': 50, 'country': 'UK'},
    {'id' :5, 'value': 110, 'country': 'UAE'}
]

var container = d3.select("#chart")
    .attr("width", width)
    .attr("height", height);


var width = 400;
var height = 420;
var chart = container
    .data(TEST_DATA)
    .enter()
    