const initialState = {
    isLoggedIn: false,
    user: {
        email: '',
        emailVerified: false,
        displalyName:'',
        token: ''
    }

};
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            state = { ...state };
            state.isLoggedIn = true;
            state.user = { ...state.user};
            state.user = {...action.payload};
            console.log(state);
            break;
        case 'REMOVE_USER':
            state = {...state};
            state = initialState;
            console.log(state);
            break;

    }
    return state;
};

export default mainReducer;