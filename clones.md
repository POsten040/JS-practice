Student pointed out that there is a method that can create deep clones (although not technically native to javascript). [the structureClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)


For reference :

**Deep copy**
> A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

**Shallow Copy**

> A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

**Note on structured Clone**

> But note that structuredClone() isn't a feature of the JavaScript language itself — instead it's a feature of browsers and any other JavaScript runtimes that implement a global object like window.

**Testing it out**
```javascript
const tomHanks = {
  firstName: "Tom",
  favoriteThings: [
    "wholesomeness",
    "movies"
  ]
}

//create shallow copy
let shallowCopyHanks = {...tomHanks}
//alter the shared reference to favoriteThings[0]
shallowCopyHanks.favoriteThings[0] = "Pure Evil"
//should log false
console.log(tomHanks.favoriteThings[0] == "wholesomeness")

const tomHanks1 = {
  firstName: "Tom",
  favoriteThings: [
    "wholesomeness",
    "movies"
  ]
}
//create shallow copy
let shallowCopyHanks2 = {...tomHanks1}
//set property to new value, does not rely on the shared reference to the original array
shallowCopyHanks2.favoriteThings = ["Pure Evil", "movies"]
//should log true
console.log(tomHanks1.favoriteThings[0] == "wholesomeness")

const tomHanks2 = {
  firstName: "Tom",
  favoriteThings: [
    "wholesomeness",
    "movies"
  ]
}
//create deep copy
let deepCopyHanks = structuredClone(tomHanks2)
//reference to favoriteThings[0] is NOT shared and will not alter tomHanks
deepCopyHanks.favoriteThings[0] = "Flying Planes"
//should log true
console.log(tomHanks2.favoriteThings[0] == "wholesomeness")
```

One the second example, this is what the docs explain:

> For shallow copies, it's important to understand that selectively changing the value of a shared property of an existing element in an object is different from assigning a completely new value to an existing element. For example, if in a shallow copy named copy of an array object, the value of the copy[0] element is {"list":["butter","flour"]}, and you do copy[0].list = ["oil","flour"], then the corresponding element in the source object will change, too — because you selectively changed a property of an object shared by both the source object and the shallow copy.