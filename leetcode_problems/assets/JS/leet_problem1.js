/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj ={
    a: {
        b: {
            c: 12,
            j: false,
        },
        k: null,
    },
};
// console.log(obj);

function findPath(obj, strVal) {
    // checking for a valid obj
    if(!obj || typeof obj !== "object") {
        return 'It is not a valid object';
    }
    // Checking for a valid string
    if(!strVal || typeof strVal !== "string") {
        return 'It is not valid string';
    }


    let array = strVal.split(".");
    // console.log(array);
    for (let item of array) {
        if (!obj || typeof obj !== "object") {
            return;
        }
        obj = obj[item]; // obj [a] => obj
    }
    // return obj;
    console.log(obj);



};

findPath(obj, 'a.b.c');
// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null