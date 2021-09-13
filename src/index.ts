import * as d3 from 'd3';

const width = 975;
const height = 610;

const svg = d3.create('svg')
  .attr('width', width)
  .attr('height', height);

const backgrond = svg.append('path')
  .attr('fill', '#ddd');

  const borders = svg.append('path')
 .attr('fill', 'none')
 .attr('stroke', '#fff')
 .attr('stroke-linejoin', 'round')
 .attr('stroke-linecap', 'round');

document.body.appendChild(svg.node() as SVGSVGElement);