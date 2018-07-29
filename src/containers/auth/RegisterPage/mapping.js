export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addUser: (user) => {
            dispatch({
                type: "ADD_USER",
                payload: {...user}
            })
        }
    }
}
