import Action_Type from "../Actions-Type";

const initialSate = {
    result: 0
}

const CalulationReducer = (state = initialSate, action) => {
    console.log(action.type) 
    console.log("object")
    
    switch (action.type) {
        case (Action_Type.Sum):
           console.log("123object")
            return {
                ...state, result: state.result + action.payload
            }
        case (Action_Type.Sub):
            return {
                ...state, result: state.result - action.payload
            }

        case (Action_Type.Mul):
            return {
                ...state, result: state.result * action.payload
            }
        case (Action_Type.Div):
            return {
                ...state, result: state.result / action.payload
            }
            default:
                return  state
                
    }
}
export default CalulationReducer