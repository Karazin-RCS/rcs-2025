const { Point } = require("./Point");

class Vector extends Point {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  constructor(x, y, z) {
    super(x, y, z);
  }

  normalize() {
    const abs = this.abs;
    this.x = this.x / abs;
    this.y = this.y / abs;
    this.z = this.z / abs;
  }

  get abs() {
    return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** 0.5;
  }

  /**
   *
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Vector}
   */
  static crossProduct(a, b) {
    return new Vector(
      a.y * b.z - a.z * b.y,
      a.z * b.x - a.x * b.z,
      a.x * b.y - a.y * b.x
    );
  }
  /**
   *
   * @param {Point} p1
   * @param {Point} p2
   * @returns {Vector}
   */
  static createVectorByVerticies(p1, p2) {
    return new Vector(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
  }
}

module.exports.Vector = Vector;
