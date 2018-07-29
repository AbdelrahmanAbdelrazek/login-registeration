export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeUser: () => {
            dispatch({
                type: "REMOVE_USER"
            })
        }
    }
}

export const mapStateToProps = (state) => {
    return{
        user: {...{...state.mainReducer.user}}
    };
}