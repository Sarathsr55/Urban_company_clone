export const initialState = {
    popUp: false
}

export const AppReducer = (state,action)=>{
    switch(action.type){
        case 'POPUP':
            return {popUp : action.payload}
    }
}