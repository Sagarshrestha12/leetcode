/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// This is a solution to the Two Sum problem using a brute force approach.
// var twoSum = function(nums, target) {
//     for(let i = 0;i <= nums.length-1; i++ ){
//         for(let j = i+1; j<= nums.length; j++){
//             if(nums[i]+nums[j]=== target){
//                 return [i,j];
//             }
//         }
//     }
// };

function isTargetOfNumFound(targetArr, startIndex, endIndex, targetNum) {
//   let startIndex = stra
let startIndexing = startIndex; 
  while (startIndex <= endIndex && startIndex >= startIndexing) {
    let mid = Math.floor((startIndex + endIndex) / 2);

    if (targetArr[mid] === targetNum) {
      return true; 
    } else if (targetNum < targetArr[mid]) {
      endIndex = mid - 1; 
    } else {
      startIndex = mid + 1; 
    }
  }

  return false;
}


var findIndexOfElement = function (nums,num, indexI){
 for(let i =0; i< nums.length; i++){
    if(indexI === -1 && nums[i]=== num){
        return i; 
    }
    else if(nums[i]=== num && indexI !== i){
        return i; 
    }
 }
 return 0; 
}

var twoSum = function(nums, target){

   let sortArray = [...nums].sort((a,b)=> a-b);

    for(let n =0; n < sortArray.length; n++ ){
        let num = sortArray[n];
        let numy  = target - num; 
        if(isTargetOfNumFound(sortArray, n+1, nums.length-1, numy)){
            
            let i = findIndexOfElement(nums,num, -1); 
            return [i,findIndexOfElement(nums,numy,i )]
        }
    }
    return [1,1]
}


