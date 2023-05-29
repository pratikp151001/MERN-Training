import Action_Type from "../Actions-Type";


const initialSate = {
    fullsentence: ""
}
const ContactstringReducer = (state = initialSate, actions) => {
    console.log("PPPPP")
    switch (actions.type) {
        case (Action_Type.Contact):
            return {
                ...state,
                fullsentence: actions.payload.join("")
            }
        default:
            return state

    }

}


export default ContactstringReducer;