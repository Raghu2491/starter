export const actions = {
    MAKE_API_CALL: 'MAKE_API_CALL'
}

export const makeApiCall = request => ({
    type: actions.CREATE_USER_PROFILE,
    payload: request,
})