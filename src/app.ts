#! /usr/bin/env node
import inquirer  from "inquirer";
import showBanner from "node-banner";
import gradient from "gradient-string";
import CheckboxPrompt from "inquirer/lib/prompts/checkbox.js";
import { Add, Divide, Multiply, Sub ,restult} from "./operations.js";

let answers=[
    {
        name:"numOne",
        type:"number",
        message:gradient.rainbow("Please insert first number"),
        validate:(input:number)=>{
            if(isNaN(input)){
                return "Please input again";
            }
            return true;
        }
      
    },
    {
        name:"numTwo",
        type:"number",
        message:gradient.rainbow("Please insert Second number"),
       validate:(input:number)=>{
            if(isNaN(input)){
                return "Please input again";
            }
            return true;
        }
    
    },
    {
        name:"Operations",
        type:'checkbox',
        message:gradient.rainbow("Please select operation"),
        choices:[
            "Add","Sub","Multiply","Divide"
        ]
    },

];
let again=[
    {
        name:"continueagain",
        type:'checkbox',
        message:"Do You want to calculate again",
        choices:[
            "Yes","No"
        ]
    }
];


let calculate = async ()=>{
    let {numOne,Operations,numTwo} = await inquirer.prompt(answers);
    console.log(`Result Operation is ${restult(numOne,numTwo,Operations)}` );
   
    let {continueagain}= await inquirer.prompt(again);
        if(continueagain[0]=="Yes")
            {
                calculate();
            }
}
(async () => {
    await showBanner('Basic Calculator', 'This is a inquirer Calculator',"green","blue");
})();
setTimeout(() => {
    calculate();
}, 1000);
