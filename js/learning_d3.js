// get data in json
var dataUrl = "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json";

d3.json(dataUrl, function(nations){

    var filtered_nations = nations.map(function(i){return i});
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

    canvas.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //canvas.attr("margin-top", margin.top)
    //canvas.attr("margin-left", margin.left)
    var xScale = d3.scale.log()
	    .domain([250, 1e5])
	    .range([0, canvas_width]);

    var xAxis_generator_function = d3.svg.axis()
	    .orient("bottom")
	    .scale(xScale);

    canvas.append("g")
	    .call(xAxis_generator_function)
	    .attr("transform", "translate(0, " + canvas_height + ")")
	    .attr("class", "x axis");

    var yScale = d3.scale.linear()
	    .domain([10,85])
	    .range([canvas_height, 0]);

    var yAxis_generator_function = d3.svg.axis()
	    .orient("left")
	    .scale(yScale);

    canvas.append("g")
	    .attr("class", "y axis")
	    .call(yAxis_generator_function);

    var data_canvas = canvas
	    .append("g")
	    .attr("class", "data_canvas");

    d3.selectAll(".region_cb").on("change", function(){
	   var region_type = this.value;

	   if (this.checked) {
	      var new_nations = nations.filter(function(nations_element){
		      return nations_element.region == region_type;
	      }); 
	      filtered_nations = filtered_nations.concat(new_nations);
	      update_function();
	   }
	   else{
	       filtered_nations = filtered_nations.filter(function(nations_element){
		       return nations_element.region != region_type;
	       });
	       update_function();
	   };
   });

   function update_function() {
      var d3_link = data_canvas
  	    .selectAll(".dot")
  	    .data(filtered_nations,
  			    function(d){
  				    return d.name;
  			    });
      d3_link.enter()
  	    .append("circle")
  	    .attr("class", "dot")
  	    .attr("r", 5)
  	    .attr("cx",
  			    function(d){
  				    return xScale(d.income[0])
  			    })
  	    .attr("cy",
  			    function(d){
  				    return yScale(d.lifeExpectancy[0])
  			    });
      d3_link.exit().remove();
   
   };

   update_function();

   //console.log(nations);
   //console.log(filtered_nations);
//----------------------------------------------------------------------------------------------------
//function toggle(source) {
//  checkboxes = document.getElementsByName('region');
//    for(var i=0, n=checkboxes.length;i<n;i++) {
//        checkboxes[i].checked = source.checked;
//          }
//}
//toggle();
//    var d3_link = data_canvas
//	    .selectAll(".dot")
//	    .data(nations,
//			    function(d){
//				    return d.name;
//			    });
//
//    d3_link.enter()
//	    .append("circle")
//	    .attr("class", "dot")
//	    .attr("r", 5)
//	    .attr("cx",
//			    function(d){
//				    return xScale(d.income[0])
//			    })
//	    .attr("cy",
//			    function(d){
//				    return yScale(d.lifeExpectancy[0])
//			    });
//
//    //var circle = canvas.append("circle")
//    //var circle_att = {cx: 50, cy: 50, r: 40};
//    //circle.attr("cx", circle_att.cx)
//    //circle.attr("cy", circle_att.cy)
//    //circle.attr("r", circle_att.r)
//    //for (var i in circle_att){
//    //    //console.log(i, circle_att[i])
//    //    circle.attr(i, circle_att[i])
//    //}
//
});
