import expect from 'expect'
import deepFreeze from 'deep-freeze'
import authUser from '../../reducers/authUser'
import * as types from '../../constants/ActionTypes'

describe('authUser reducer', () => {
    it('should handle initial state', () => {
        const initialState = {
            id: 0,
            name: '',
            avatar: '',
            role: '',
            skills: [],
        };
        expect(initialState).toEqual(authUser())
    });

    it('should handle ' + types.LOGIN, () => {
        const stateBefore = {
            id: 0,
            name: '',
            avatar: '',
            role: '',
            skills: [],
        };
        const action = {
            type: types.LOGIN,
            payload: {
                id: '1234567',
                name: 'socrates.philosopher',
                avatar: 'icon.png',
                role: 'admin',
                skills: [],
            }
        };
        const stateAfter = {
            id: '1234567',
            name: 'socrates.philosopher',
            avatar: 'icon.png',
            role: 'admin',
            skills: [],
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = authUser(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });

    it('should handle ' + types.LOGOUT, () => {
        const stateBefore = {
            id: '1234567',
            name: 'socrates.philosopher',
            avatar: 'icon.png',
            role: 'admin',
            skills: [],
        };
        const action = {
            type: types.LOGOUT,
        };
        const stateAfter = {
            id: 0,
            name: '',
            avatar: '',
            role: '',
            skills: [],
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = authUser(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });

    it('should handle ' + types.USER_ADD_SKILL, () => {
        const stateBefore = {
            id: '1234567',
            name: 'socrates.philosopher',
            avatar: 'icon.png',
            role: 'admin',
            skills: [
                {
                    id: '1234',
                    name: 'css', 
                }
            ],
        };
        const action = {
            type: types.USER_ADD_SKILL,
            payload: {
                id: '1234567',
                name: 'javascript', 
            }
        };
        const stateAfter = {
            id: '1234567',
            name: 'socrates.philosopher',
            avatar: 'icon.png',
            role: 'admin',
            skills: [
                {
                    id: '1234',
                    name: 'css', 
                }, 
                {
                    id: '1234567',
                    name: 'javascript', 
                }
            ],
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = authUser(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });

    it('should handle ' + types.USER_REMOVE_SKILL, () => {
        const stateBefore = {
            id: '1234567',
            name: 'socrates.philosopher',
            avatar: 'icon.png',
            role: 'admin',
            skills: [
                {
                    id: '1234',
                    name: 'css', 
                }, 
                {
                    id: '1234567',
                    name: 'javascript', 
                }
            ],
        };

        const action = {
            type: types.USER_REMOVE_SKILL,
            payload: '1234',
        };
        const stateAfter = {
            id: '1234567',
            name: 'socrates.philosopher',
            avatar: 'icon.png',
            role: 'admin',
            skills: [
                {
                    id: '1234567',
                    name: 'javascript', 
                }
            ],
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = authUser(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });
 
    it('should handle ' + types.USER_REORDER_SKILL, () => {
        const stateBefore = {
            id: '1234567',
            name: 'socrates.philosopher',
            avatar: 'icon.png',
            role: 'admin',
            skills: [
                {
                    id: '1234',
                    name: 'css', 
                }, 
                {
                    id: '1234567',
                    name: 'javascript', 
                }, 
                {
                    id: '1',
                    name: 'es6', 
                },
            ],
        };

        const action = {
            type: types.USER_REORDER_SKILL,
            payload: {
                currPos: 2,
                newPos: 0,
            },
        };
        const stateAfter = {
            id: '1234567',
            name: 'socrates.philosopher',
            avatar: 'icon.png',
            role: 'admin',
            skills: [
                {
                    id: '1',
                    name: 'es6', 
                },
                {
                    id: '1234',
                    name: 'css', 
                }, 
                {
                    id: '1234567',
                    name: 'javascript', 
                },
            ],
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = authUser(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });
   
});

