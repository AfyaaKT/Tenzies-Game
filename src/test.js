function heighest(buildingHeights){
let buildings = 0;
let heighest = Math.max(...buildingHeights)
for(let i =0 ; i<= buildingHeights.length ; i++){
    if (buildingHeights[i]=== heighest)
    buildings ++
}
return buildings
}
console.log(heighest([1,2,6,6,7,7,7,7,6,3,3]));