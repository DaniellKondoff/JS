/**
 * Created by Kondoff on 08-Oct-16.
 */
let polygon = {
    about: { name: "triangle", color: "red" },
    corners: [{x:2, y:6}, {x:3, y:1}, {x:-2, y:2}]
};
console.log(JSON.stringify(polygon)); // {"about":{"name":"triangle","color":"red"},"corners":[{"x":2,"y":6},{"x":3,"y":1},{"x":-2,"y":2}]}
console.log(polygon.about.color); // red
polygon.about.location = {x:4, y:-7};
console.log(JSON.stringify(polygon))
console.log(polygon.about.location);
