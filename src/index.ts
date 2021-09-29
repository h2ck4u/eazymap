import * as d3 from 'd3';
import * as topoclient from 'topojson-client';

window.onload = function () {
  drawMap();
};

function drawMap() {
  const koreaMap = require('../public/korea.json');
  const geojson = topoclient.feature(koreaMap, koreaMap.objects.skorea_provinces_2018_geo) as any;
  const center = d3.geoCentroid(geojson);

  const width = 600;
  const height = 1000;
  const svg = d3
    .select('.d3')
    .append('svg')
    .attr('width', width).attr('height', height);
  const map = svg.append('g');

  let projection = d3.geoMercator()
    .scale(1)
    .translate([0, 0])

  const path = d3.geoPath().projection(projection) as any;
  const bounds = path.bounds(geojson);
  const widthScale = (bounds[1][0] - bounds[0][0]) / width;
  const heightScale = (bounds[1][1] - bounds[0][1]) / height;
  const scale = 1 / Math.max(widthScale, heightScale);
  const xoffset = width / 2 - scale * (bounds[1][0] + bounds[0][0]) / 2 + 10;
  const yoffset = height / 2 - scale * (bounds[1][1] + bounds[0][1]) / 2 + 80;
  projection.scale(scale).translate([xoffset, yoffset]);

  map
    .selectAll('path').data(geojson.features)
    .enter().append('path')
    .attr('d', path);

  // const zoomed = () => {
  //   map.attr('transform', d3.geoTransform)
  // }
  // const zoom = d3.zoom().scaleExtent([1, 8]).on('zoom', zoomed)
  // svg.call(zoom)
}