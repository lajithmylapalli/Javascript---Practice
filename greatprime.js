const great = (x)=>{
    let i;
    for(y=0;y<x;y++)
    {
        for(i=2;i<x-1;i++)
        {
            if(i%x==0)
            {
                console.log(`${i}`);
            }
        }
    }
};great(5);