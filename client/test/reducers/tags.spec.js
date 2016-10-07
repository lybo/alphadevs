import expect from 'expect'
import deepFreeze from 'deep-freeze'
import tags from '../../reducers/tags'
import * as types from '../../constants/ActionTypes'

describe('tags reducer', () => {
    it('should handle initial state', () => {
        const initialState = [];
        expect(initialState).toEqual(tags())
    });

    it('should handle ' + types.POPULATE_TAGS, () => {
        const stateBefore = [];
        const action = {
            type: types.POPULATE_TAGS,
            payload: [
                {
                    id: '1234',
                    name: 'css', 
                }, 
                {
                    id: '1234567',
                    name: 'javascript', 
                }
            ]
        };
        const stateAfter = [
            {
                id: '1234',
                name: 'css', 
            }, 
            {
                id: '1234567',
                name: 'javascript', 
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = tags(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });

    it('should handle ' + types.ADD_TAG, () => {
        const stateBefore = [
            {
                id: '1234',
                name: 'css', 
            }
        ];
        const action = {
            type: types.ADD_TAG,
            payload: {
                id: '1234567',
                name: 'javascript', 
            }
        };
        const stateAfter = [
            {
                id: '1234',
                name: 'css', 
            }, 
            {
                id: '1234567',
                name: 'javascript', 
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = tags(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });

    it('should handle ' + types.REMOVE_TAG, () => {
        const stateBefore = [
            {
                id: '1234',
                name: 'css', 
            }, 
            {
                id: '1234567',
                name: 'javascript', 
            }
        ];

        const action = {
            type: types.REMOVE_TAG,
            payload: '1234',
        };
        const stateAfter = [
            {
                id: '1234567',
                name: 'javascript', 
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = tags(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });
   
});

