function sum(){
    var i, n, sum=0;
    n=parseInt(document.getElementById("first").value);
    for(i=1; i<=n; i++)
    {
        sum= sum+i;
    }
    document.getElementById("num").innerHTML= "sum of " +n + " natural number is:" +sum;
}