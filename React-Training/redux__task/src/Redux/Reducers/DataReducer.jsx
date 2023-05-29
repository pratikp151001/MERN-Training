import Action_Type from "../Actions-Types";

const initialState=[];

const datareducer=(state=initialState,action)=>{
    switch(action.type){
        case(Action_Type.Fetch_Data):
        console.log("Reducer")
        return {
            ...state,fetchedData:action.payload
    }
    }

}
export default datareducer