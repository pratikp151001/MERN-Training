import Action_Type from "../Actions-Type";

const ADD=(numbers)=>{
    console.log(numbers)
    return {
        type:Action_Type.Sum,
        payload:numbers
    }
}
const SUB=(numbers)=>{
    return {
        type:Action_Type.Sub,
        payload:numbers
    }
}

const MUL=(numbers)=>{
    return {
        type:Action_Type.Mul,
        payload:numbers
    }
}
const DIV=(numbers)=>{
    return {
        type:Action_Type.Div,
        payload:numbers
    }
}


export{ADD,SUB,MUL,DIV}