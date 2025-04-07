const { Facet } = require("./Facet");
const { Point } = require("./Point");
const { Vector } = require("./Vector");

//test cross products
// const a = new Vector(1, 0, 0);
// const b = new Vector(3, 4, 0);
// // const c = Vector.crossProduct(a, b);
// // console.log(c);
// console.log(b.abs);
// b.normalize();
// console.log(b.abs);

// test Points
// const a = new Point(1, 1, 1);
// const b = new Point(2, 1, 1);
// const c = new Point(1, 2, 1);
// const v1 = Vector.createVectorByVerticies(a, b);
// const v2 = Vector.createVectorByVerticies(a, c);
// const v3 = Vector.crossProduct(v1, v2);
// console.log(v3);

// test Facet
// const a = new Point(1, 1, 1);
// const b = new Point(2, 1, 1);
// const c = new Point(1, 2, 1);
// const facet = new Facet(a, b, c);
// console.log(facet);

const phi = Math.PI + Math.PI / 4;
const tg = Math.tan(phi);

function convertRadianToDegree(radian) {
  return (radian * 180) / Math.PI;
}

function convertDegreeToRadian(degree) {
  return (degree * Math.PI) / 180;
}

function theoryTriangleBSP(
  step = 1,
  angleConstName = "phi",
  constAngle = 0,
  a = 1,
  b = 1,
  lambda = 0.03
) {
  const rcs = [];
  for (let angle = 0; angle < 360; angle += step) {
    if ((angleConstName = "phi")) {
      rcs.push(theoryTriangleRCS(constAngle, angle, a, b, lambda));
    } else {
      rcs.push(theoryTriangleRCS(angle, constAngle, a, b, lambda));
    }
  }
  /// draw diagramm
}
/**
 * Calculate RCS for triangle plate by KOBAK
 * @param {number} phi spherical angle PHI in radian
 * @param {number} thetha spherical angle THETA in radian
 * @param {number} a size of the semi-base of the triangle
 * @param {number} b size of the normal of the triangle
 * @param {number} lambda // vawelength in m
 * @returns
 */
function theoryTriangleRCS(phi, theta, a = 1, b = 1, lambda = 0.03) {
  let rcs;
  /**
   *
   * @param {number} phi spherical angle PHI in radian
   * @param {number} thetha spherical angle THETA in radian
   * @returns
   */
  function convertAngleToTheoryAngle(phi, thetha) {
    let phiT;
    let thetaT;
    return { phiT, thetaT };
  }
  return rcs;
}
