// creating container for svg 
var width = 960;
var height = 500;
var spacebetweeneyes = 100;
var eyeoffset = -70;
var eyeradius = 30;
var eyebrowwidth = 80;
var eyebrowheight =10;
var eyebrowoffset =-110
var canvas = d3.select("body")
						.append("svg")
						.attr("width",width)
						.attr("height",height);
// grouping the eye element
var g = canvas.append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);						


var face = g.append("circle")
			 			.attr("r",height/2)
			 			.attr("fill","yellow")
						.attr("stroke","black");
//grouping the eye brow element
var eyesG = g.append('g')
  .attr('transform', `translate(0, ${eyeoffset})`);
  
var lefteye = eyesG.append("circle")
			 			.attr("cx",-spacebetweeneyes)
			 			.attr("cy",eyeoffset)
			 			.attr("r",eyeradius)
			 			.attr("fill","black");

var righteye = eyesG.append("circle")
			 			.attr("cx",+spacebetweeneyes)
			 			.attr("cy",eyeoffset)
			 			.attr("r",eyeradius)
			 			.attr("fill","black");


var eyebrowG= eyesG
				.append('g')
			    .attr('transform',`translate(0, ${eyebrowoffset})`);
eyebrowG
  .transition().duration(2000)
    .attr('transform', `translate(0, ${eyebrowoffset - 20})`)
  .transition().duration(2000)
    .attr('transform', `translate(0, ${eyebrowoffset})`);						

var mouth = g.append('path')
                  .attr('d', d3.arc()({
                  innerRadius: 140,
                  outerRadius: 150,
                  startAngle: Math.PI / 2,
                  endAngle: Math.PI * 3 / 2
    }));
var lefteyebrow=eyebrowG
				.append('rect')
				  .attr('width',eyebrowwidth)
				  .attr('height',eyebrowheight)
				  .attr('x',-spacebetweeneyes-eyebrowwidth/2);				
var righteyebrow=eyebrowG
				 .append('rect')
				  .attr('width',eyebrowwidth)
				  .attr('height',eyebrowheight)
				  .attr('x',spacebetweeneyes-eyebrowwidth/2);				
