import canvas from './renderers/canvas';

const dimensions = {
  width: 100,
  height: 100
};
const rootElement = document.getElementById('root');
const canvasRenderer = canvas(rootElement, dimensions);
const pixelData = new Array(dimensions.width * dimensions.height * 4);

canvasRenderer(pixelData);
