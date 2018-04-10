/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let result = 0;
  for (let i = 0; i < preferences.length; i++) {
    let link1 = preferences[i]-1;
    if (link1 != i){
    let link2 = preferences[link1]-1;
    let link3 = preferences[link2]-1;
    if (link3==i) {
      result++
    }
    }
    
  }
  return result/3;
  
};
