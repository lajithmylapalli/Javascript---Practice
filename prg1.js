const isAnagram = (s, t) =>{
    let out=s.split("");
    let spl = t.split("");
    if(out.length!=spl.length){
        return false;
    }
    for(let i =0;i<out.length;i++){
        let count=-1;
        for(let j=0;j<t.length;j++){
            if(out[i]==spl[j]){
                count=j;
                break;
            }
        }
        if(count==-1){
            console.log("flase");
            return false;
        }
        spl.splice(count,1);
    }
    console.log("true");
    return true;
};
isAnagram("hello","oellh");
isAnagram("cat","rat");