var width = 600;
var height = 480;
// First steps to set up marigin and size of the svg
var margin = {top:10, left: 10, bottom:10, right: 10}
var container = d3.select("#map")
    .attr("width", width)
    .attr("height", height)

var svg = container.append('svg')
    .attr("width", width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .append("g");


svg.append("cicle")
    .attr("fill", "red")
    .attr("stroke", "blue")
    .attr("r", 50)
    .translate([width/3, height / 1.5])

    const data= [30,40];


// Set up the projection
// var projection = d3.geo.mercator()
//     .scale(2000)
//     .translate([width/3, height / 1.5])
//     .center([73,19])

// var  path = d3.geo.path()
//     .projection(projection);

// queue()
//     .defer(d3.json, "../data/state.json")
//     .await((error, state) => {
//         console.log(state)
//         svg.selectAll("path")
//             .data(topojson.feature(state, state.objects.MAHARASHTRA_STATE).features)
//             .enter()
//             .append("path")
//             .attr('d', path)
//             .attr('class', 'state')
//     });