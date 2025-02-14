// // myAssign
// // it takes an target object and other n objects and copy the new keypair values into target object

// let obj = {a:2,b:4, "h o":"oops" , 1:100,j:[1,2,3] , k: null , m : undefined}
// // let ob2 = {};
// // // let ob3 = {l: "amma"}
// // // console.log(Object.assign(obj));

// // // console.log(Object.assign(ob2,obj));
// // // obj.j[0]=100;
// // // console.log(obj,ob2);
// // // ob2["z j"]=1000
// // // console.log(ob2);
// // let obj2 =structuredClone(obj);
// // console.log(obj2);
// // obj2["j"][0]=100;
// // console.log(obj2,obj);

// // delete obj["a"]
// // console.log(obj);
// // console.log(1 in obj)
// // console.log(Object.keys(obj));
// // console.log("hey",Object.values(obj).length);
// // console.log(Object.seal(obj));
// obj["3"]=100
// console.log(obj);
// console.log(Object.isSealed(obj));
// let new_obj = Object.freeze(obj)
// console.log(new_obj);
// obj["m"]="okm"
// console.log(new_obj)
// console.log
// (Object.isFrozen(obj));


// let obj = {1:2}
// console.log(obj['1']=3);
// console.log(obj);


// let obj = {a:1, b:2 , c:3 , d:[1,2]};
// // Object.seal(obj);
// Object.freeze(obj)
// delete obj.a
// delete obj
// obj.d=987
// obj.d[0]=23
// console.log(obj);

let obj = {1:2}
let m = JSON.stringify(obj)
console.log(m.length);
let d = JSON.parse(m);
console.log(typeof d);

console.log(d);




















