function duplicateCount(text){
    var h = [...text.toLowerCase()].reduce((h,c)=>(h[c]=h[c]+1||1,h),{});
    return Object.keys(h).filter(k=>h[k]>1).length;
}

console.log(duplicateCount('accessories'))