import {shallow} from 'enzyme';
import "../../__tests__/setup/setupTests"
import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_SUCCESS,
    AUTH_ERROR,
    ADD_FROM_USER_PROFILE,

    storeAuthInfo,
    login,

    refreshAuthToken,
    logOut
} from '../../actions/auth';

describe('auth actions', () => {

    it('Should dispatch login success aka storeAuthInfo', () => {
        const authToken = "1234"

        global.fetch = jest.fn().mockImplementation(() => {
            Promise.resolve({
                json() {
                    return authToken;
                }
            })
        })

        const dispatch = jest.fn();
        return login()(dispatch).then(() => {
            expect(fetch.toHaveBeenCalledWith('/authToken'));
            expect(dispatch).toHaveBeenCalledWith(storeAuthInfo)
        })

    })
})