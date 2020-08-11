export const loadAuthToken = () => {
    console.log('getting local storage')
    const user = localStorage.getItem('user');
    return JSON.parse(user) //  returns { authToken: <whatever the token is>, userId: <whatever the userId is> }
};

export const saveAuthToken = (authToken, userId) => {
    try {
        console.log('storing in local storage')
        localStorage.setItem('user', JSON.stringify({'authToken': authToken, 'id': userId}));
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};


