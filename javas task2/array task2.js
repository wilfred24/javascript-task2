let data=
[   {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
     {principal:3000, time: 1},
     {principal:2000, time: 3}
    ];

    //InterestCalculator function
    //>' greater, <' less than
function interestCalculator(array){

let interestData= [];
array.forEach((i)=> {
    if(i.principal >= 2500 && (i.time > 1 && i.time < 3)){
        i.rate = 3;
       
    }else if(i.principal >= 2500 && (i.time >= 3)){
       i.rate = 4;
    }else if(i.principal < 2500 || (i.time <= 1)){
       i.rate = 2;
    }else {
      i.rate = 1;
    }
     i.interest = (i.principal * i.rate * i.time)/ 100;
        interestData.push({
            'principal': i.principal,
             'rate' : i.rate,
             'time': i.time,
              'interest' : i.interest
             });
});
        
  
console.log(interestData);
 return interestData; 
}
interestCalculator(data);     