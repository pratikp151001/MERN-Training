import Action_Type from "../Actions-Type";

const CONCAT =(sentences)=>{
    console.log("oOOOOOOO")
    console.log(sentences)
    return {
        type:Action_Type.Contact,
        payload:sentences
    }
}
export {CONCAT}