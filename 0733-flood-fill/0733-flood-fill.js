/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, color) {
  if (image[sr][sc] === color) return image;
  const originColor = image[sr][sc];
  calculate(image, sr, sc, originColor, color);
  return image;

  function calculate(image, sr, sc, originColor, color) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
    if (image[sr][sc] !== originColor) return;
    image[sr][sc] = color;
    calculate(image, sr, sc - 1, originColor, color);
    calculate(image, sr, sc + 1, originColor, color);
    calculate(image, sr - 1, sc, originColor, color);
    calculate(image, sr + 1, sc, originColor, color);
  }
}