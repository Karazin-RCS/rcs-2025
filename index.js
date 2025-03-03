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
const a = new Point(1, 1, 1);
const b = new Point(2, 1, 1);
const c = new Point(1, 2, 1);
const facet = new Facet(a, b, c);
console.log(facet);
