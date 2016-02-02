// get data in json
var dataUrl = "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json";

d3.json(dataUrl, function(nations){
    //console.log(nations)
    var chart_area = d3.select('#chart_area');
    var frame = chart_area.append("svg");
    var canvas = frame.append("g");

    // Set margins, width and height.
    var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
    var frame_width = 960;
    var frame_height = 350;


    var canvas_width = frame_width - margin.left - margin.right;
    var canvas_height = frame_height - margin.top - margin.bottom;

    frame.attr("width", frame_width);
    frame.attr("height", frame_height);

    canvas.attr("tranform", "translate(" + margin.left + "," + margin.top + ")");
    //canvas.attr("margin-top", margin.top)
    //canvas.attr("margin-left", margin.left)
    var xScale = d3.scale.log();
    xScale.domain([250, 1e5]);
    xScale.range([0, canvas_width]);

    var xAxis_generator_function = d3.svg.axis().orient("bottom").scale(xScale);
    canvas.append("g")
	    .call(xAxis_generator_function)
	    .attr("transform", "translate(0, " + canvas_height + ")")
	    .attr("class", "x axis");


    //var circle = canvas.append("circle")
    //var circle_att = {cx: 50, cy: 50, r: 40};
    //circle.attr("cx", circle_att.cx)
    //circle.attr("cy", circle_att.cy)
    //circle.attr("r", circle_att.r)
    //for (var i in circle_att){
    //    //console.log(i, circle_att[i])
    //    circle.attr(i, circle_att[i])
    //}

});


