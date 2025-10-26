const sort = (arr)=>{
    
    for(let i=0;i<arr.length;i++)
    {
        if (arr[i] < arr[i-1])
        {
            console.log('Given array is in sorted order');
            return;
        }
        
    }
    console.log('Given array is not in sorted order');

};sort([1,2,3,4,5,6]);