var a = [1,2,3,4,5];

 evenFinder = (num) => {
    if (num%2==0) 
    return num + " is Even Number";
    else
    return num + " is odd Number";
};

for(var i=0 ; i < a.length ; i++ ){
    console.log(evenFinder(a[i]));
}