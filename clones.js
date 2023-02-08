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


