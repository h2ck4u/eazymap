/* eslint-disable @typescript-eslint/no-var-requires */
import {select, geoMercator, geoPath, zoom} from 'd3';
import {feature} from 'topojson-client';

window.onload = function () {
  drawMap();
};

function drawMap () {
  // eslint-disable-next-line global-require
  const koreaMap = require('../public/korea.json');
  const geojson = feature(koreaMap, koreaMap.objects.skorea_provinces_2018_geo) as any;

  const width = 600;
  const height = 1000;
  const svg = select('.korea').append('svg').attr('width', width).attr('height', height);
  const map = svg.append('g');

  const projection = geoMercator()
    .scale(1)
    .translate([0, 0]);

  const path = geoPath().projection(projection);
  const bounds = path.bounds(geojson);
  const widthScale = (bounds[1][0] - bounds[0][0]) / width;
  const heightScale = (bounds[1][1] - bounds[0][1]) / height;
  const scale = 1 / Math.max(widthScale, heightScale);
  // eslint-disable-next-line no-mixed-operators
  const xoffset = width / 2 - scale * (bounds[1][0] + bounds[0][0]) / 2 + 10;
  // eslint-disable-next-line no-mixed-operators
  const yoffset = height / 2 - scale * (bounds[1][1] + bounds[0][1]) / 2 + 80;
  projection.scale(scale).translate([xoffset, yoffset]);

  map
    .selectAll('path').data(geojson.features)
    .enter().append('path')
    .attr('d', path);

  const zoomHandler = zoom()
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

  function zoomed (event) {
    console.log(event);
    const {transform} = event;
    map.attr('transform', transform);
    map.attr('stroke-width', 1 / transform.k);
  }

  svg.call(zoomHandler);
}
