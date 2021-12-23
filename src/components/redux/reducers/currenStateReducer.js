


const initialState = true;



const currenStateReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "ON_OFF":
        return action.payload ? state = false : state = true
            default:
                return state
    }
}



export default currenStateReducer;