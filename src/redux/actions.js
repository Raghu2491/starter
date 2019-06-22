export const actions = {
    MAKE_API_CALL: 'MAKE_API_CALL',
    API_RESPONSE: 'API_RESPONSE'
};

export const makeApiCall = request => ({
    type: actions.MAKE_API_CALL,
    payload: request,
});

export const apiResponse = response => ({
    type: actions.API_RESPONSE,
    payload: response,
});