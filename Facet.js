const { Point } = require("./Point");
const { Vector } = require("./Vector");

class Facet {
  /**
   *
   * @param {Point} v1
   * @param {Point} v2
   * @param {Point} v3
   */
  constructor(v1, v2, v3) {
    this.vertices = [v1, v2, v3];
    const vector1 = Vector.createVectorByVerticies(v1, v2);
    const vector2 = Vector.createVectorByVerticies(v1, v3);
    const normal = Vector.crossProduct(vector1, vector2);
    normal.normalize();
    this.normal = normal;
  }
}

module.exports.Facet = Facet;
