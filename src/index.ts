import * as d3 from 'd3';

const width = 975;
const height = 610;

const svg = d3.create('svg')
.attr('width', width)
.attr('height', height);

const backgrond = svg.append('path');
const borders = svg.append('path');

document.body.appendChild(svg.node() as SVGSVGElement);
