// 1.Do the below programs in anonymous function & IIFE
// a, Print odd numbers in an array ?
//answer;var arr =[12,13,14,15,16,17,18,19,20];
//anonymous function;
var arr =[12,13,14,15,16,17,18,19,20];
var odd=function(arr1) {
    var    temp =[];
    var    j = 0;
        for(i=0;i<arr1.length;i++){
            if(arr1[i]%2!=0){
                temp[j] =arr1[i];
                j++;
            }
            
        }
        return temp;
        
    }
    console.log(odd(arr));
    //IIFE function;
    var arr =[12,13,14,15,16,17,18,19,20];
    console.log((function(arr1) {
        var    temp =[];
        var    j = 0;
            for(i=0;i<arr1.length;i++){
                if(arr1[i]%2!=0){
                    temp[j] =arr1[i];
                    j++;
                }
                
            }
            return temp;
            
        })(arr));
        

    

//b,Convert all the strings to title caps in a string array?
//answer;
//anonymous function;
var arr = ["i","love","guvi"];
var title_caps = function(arr1){
    for(i=0;i<arr1.length;i++){
       arr1[i]=arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1);
    }
    return arr1;
}
console.log(title_caps(arr));

// IIFE ;
var arr = ["i","love","guvi"];
console.log((function(arr1){
    for(i=0;i<arr1.length;i++){
       arr1[i]=arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1);
    }
    return arr1;
})(arr));
//c.Sum of all numbers in an array?
//IIFE ;
var arr = [12,13,14,15,16];

console.log((function(arr1){
    var sum = 0;
    for(i=0;i<arr1.length;i++){
      sum = sum+arr1[i];
    }
    return sum;
})(arr));

//anonymous function;

var arr = [12,13,14,15,16];

total_value = function(arr1){
    var sum = 0;
    for(i=0;i<arr1.length;i++){
      sum = sum+arr1[i];
    }
    return sum;
}
console.log(total_value(arr));

//D.Return all the prime numbers in an array?
//ANS;
//anonymous function;

var arr = [12,13,14,15,16,7];

prime_value = function(arr1){
    var res = [];
    var k = 0;
    for(i=0;i<arr1.length;i++){
        var count = 0;
        for(j=1;j<=arr1[i];j++) {
            if(arr1[i]%j==0) {
                count++;
            }
        }
        if (count==2) {
            res[k] = arr1[i];
            k++;
        }
    }
    return res;
}
console.log(prime_value(arr));
//IIFE ;
var arr = [12,13,14,15,16,7];

console.log((function(arr1){
    var res = [];
    var k = 0;
    for(i=0;i<arr1.length;i++){
        var count = 0;
        for(j=1;j<=arr1[i];j++) {
            if(arr1[i]%j==0) {
                count++;
            }
        }
        if (count==2) {
            res[k] = arr1[i];
            k++;
        }
    }
    return res;
})(arr));
//E.Return all the palindromes in an array
//IIFE;
var arr = [121,13431,16661,77177,145,159];

console.log((function(arr1){
    var res = [];
    var k = 0;
    for(i=0;i<arr1.length;i++){
        var n = arr1[i];
        var sum = 0;
        
        while(n>0){    
            var r=n%10;  //getting remainder
            sum=(sum*10)+r;    
            n=Math.floor(n/10);
            
        }
      
        if(sum==arr1[i]){
            res[k] = arr1[i];
            k++;
        }
    }
    return res;
})(arr));
////anonymous function;
var arr = [121,13431,16661,77177,145,159];

Palindrome =function(arr1){
    var res = [];
    var k = 0;
    for(i=0;i<arr1.length;i++){
        var n = arr1[i];
        var sum = 0;
        
        while(n>0){    Palindrome 
            var r=n%10;  //getting remainder
            sum=(sum*10)+r;    
            n=Math.floor(n/10);
            
        }
      
        if(sum==arr1[i]){
            res[k] = arr1[i];
            k++;
        }
    }
    return res;
}
 console.log(Palindrome (arr));
//F.Return median of two sorted arrays of the same size.
//Ans;anonymous function;
var arr1 = [12,13,18,77,14,15];
var arr2 = [12,45,67,89,65,44];


median =function(arra,arrb){
    
   var arr = [...arra,...arrb];
   var final = arr.sort();
   var id = final.length/2;
   var out = (final[id]+final[id-1])/2;
   
   return out;
        
}
 console.log(median(arr1,arr2));
 //IIFE;
 //ANS;
 var arr1 = [12,13,18,77,14,15];
 var arr2 = [12,45,67,89,65,44];
 
 
 console.log((function(arra,arrb){
     
    var arr = [...arra,...arrb];
    var final = arr.sort();
    var id = final.length/2;
    var out = (final[id]+final[id-1])/2;
    
    return out;
         
 
 })(arr1,arr2));
 //G.Remove duplicates from an array?
 //Ans;
 //IIFE;
 var arr1 = [12,13,18,77,14,15];
var arr2 = [13,12,45,67,13,65,18];


console.log((function(arra,arrb){
    
   var arr = [...arra,...arrb];
   var final = arr;
   console.log(final);
   for(i=0;i<final.length;i++){
       for(j=i+1;j<final.length;j++){
           if(final[i]==final[j]) {
               final.splice(j,1);
               j--;
           }
       }
   }
   return final;
        

})(arr1,arr2));

//anonymous function;
var arr1 = [12,13,18,77,14,15];
var arr2 = [13,12,45,67,13,65,18];


var duplicate=function(arra,arrb){
    
   var arr = [...arra,...arrb];
   var final = arr;
 
   for(i=0;i<final.length;i++){
       for(j=i+1;j<final.length;j++){
           if(final[i]==final[j]) {
               final.splice(j,1);
               j--;
           }
       }
   }
   return final;
        

}
console.log(duplicate(arr1,arr2));
//H.Rotate an array by k times?
//Ans;//anonymous function;
var arr1 = [12,13,18,77,14,15,1,1,1,12,3,4];


var rotate_f=function(arra,n){
    len=arra.length;
    rotate = arra.slice(-n);
    suffix = arra.slice(0,len-n);
    final = [...rotate,...suffix];
    return final;
}
console.log(rotate_f(arr1,5));

////IIFE;
//Ans;
var arr1 = [12,13,18,77,14,15,1,1,1,12,3,4];

console.log((function(arra,n){
    len=arra.length;
    rotate = arra.slice(-n);
    suffix = arra.slice(0,len-n);
    final = [...rotate,...suffix];
    return final;
})(arr1,5));

//3,Do the below programs in arrow functions?
//Ans;
//A.Print odd numbers in an array

var primenumber=(ele)=>{
    var    temp =[];
    var  j = 0;
    for(i=0;i<ele.length;i++){
        if(ele[i]%2!=0){
            temp[j] =ele[i];
            j++;
        }
        
    }
    return temp;
}
console.log(primenumber([12,13,14,15,16,17,18,19,20]));

//B.Convert all the strings to title caps in a string array
//Ans;
 
var titlecaps=(ele)=>{
      
    for(i=0;i<ele.length;i++){
       ele[i]=ele[i].charAt(0).toUpperCase()+ele[i].slice(1);
    }
    return ele;
}

    console.log(titlecaps(["i","love","guvi"]));

//c.Sum of all numbers in an array
//Ans;

var adding=(ele)=>{

    var sum = 0;
    for(i=0;i<ele.length;i++){
      sum = sum+ele[i];
    }
    return sum;
}

    console.log(adding([12,13,14,15,16]));

//D.Return all the prime numbers in an array
//Answer;
var prime_value=(arr1)=>{


    var res = [];
    var k = 0;
    for(i=0;i<arr1.length;i++){
        var count = 0;
        for(j=1;j<=arr1[i];j++) {
            if(arr1[i]%j==0) {
                count++;
            }
        }
        if (count==2) {
            res[k] = arr1[i];
            k++;
        }
    }
    return res;
}


    console.log(prime_value([12,13,14,15,16,7]));

//E.Return all the palindromes in an array
//Answer;
  
var Palindrome=(arr1)=>{

    var res = [];
    var k = 0;
    for(i=0;i<arr1.length;i++){
        var n = arr1[i];
        var sum = 0;
        
        while(n>0){    Palindrome 
            var r=n%10;  
            sum=(sum*10)+r;    
            n=Math.floor(n/10);
            
        }
      
        if(sum==arr1[i]){
            res[k] = arr1[i];
            k++;
        }
    }
    return res;
}



    console.log(Palindrome([121,13431,16661,77177,145,159]));









