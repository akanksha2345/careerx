
    var num=5674;
    var sum=0;
    document.write(num%10);
    document.write(parseInt(num/10));
    while(num>0){
        var rem=num%10;
        sum=sum+rem;
        num=parseInt(num%10);
    }
    document.write(sum);

    
    
 