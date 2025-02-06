const merge = (arr1, arr2) => {
    console.log(`Merging ${JSON.stringify(arr1)} and ${JSON.stringify(arr2)}`);
    let mergedArr = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      console.log(`Comparing ${arr1[i]} and ${arr2[j]}`);
      if (arr1[i] < arr2[j]) {
        console.log(`Adding ${arr1[i]} from arr1`);
        mergedArr.push(arr1[i]);
        i++;
      } else {
        console.log(`Adding ${arr2[j]} from arr2`);
        mergedArr.push(arr2[j]);
        j++;
      }
    }
  
    console.log(`Remaining in arr1: ${JSON.stringify(arr1.slice(i))}`);
    console.log(`Remaining in arr2: ${JSON.stringify(arr2.slice(j))}`);
  
    return mergedArr.concat(arr1.slice(i)).concat(arr2.slice(j));
  };
  
  const mergeSort = (arr) => {
    console.log(`Splitting: ${JSON.stringify(arr)}`);
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  };
  
  const unsorted = [105, 79, 100, 110];
  
  console.log(mergeSort(unsorted)); 