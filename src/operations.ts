export let Add=(ValOne:number,valTwo:number):number=>{
    return ValOne+valTwo;
};
export let Sub=(ValOne:number,valTwo:number):number=>{
    return ValOne-valTwo;
};
export let Multiply=(ValOne:number,valTwo:number):number=>{
    return ValOne*valTwo;
};
export let Divide=(ValOne:number,valTwo:number):number=>{
    return ValOne/valTwo;
};

export let restult=(val1:number,val2:number,operations:string)=>{
       let operation=operations[0];
    switch(operation){
   case "Add": { 
                  return Add(val1,val2);
         
         break; 
      }
     case "Sub": { 
        return Sub(val1,val2);
         break; 
      } 
      case "Multiply": { 
        return Multiply(val1,val2);
        break; 
      }
      case "Divide": { 
        return Divide(val1,val2);
         break; 
      }
 }

};
