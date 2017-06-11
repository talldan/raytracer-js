
export default function canvas(parentElement, dimensions) {
  if (!parentElement || !parentElement.appendChild) {
    throw 'canvas renderer, expected first argument to be a valid DOM element';
  }

  const canvasElement = document.createElement('canvas');
  canvasElement.width = dimensions.width;
  canvasElement.height = dimensions.height;
  parentElement.appendChild(canvasElement);
  const context = canvasElement.getContext('2d');

  return (pixelData) => {
    const imageData = new ImageData(
      Uint8ClampedArray.from(pixelData),
      dimensions.width,
      dimensions.height
    );
    context.putImageData(imageData, 0, 0);
  };
}
