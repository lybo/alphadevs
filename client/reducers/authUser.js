import * as types from '../constants/ActionTypes'
import skill from './skill';

const initialState = {
    id: 0,
    name: '',
    avatar: '',
    role: '',
    skills: [],
};

export default function(state = initialState, action = { type: '', payload: {} }) {
    const mapSkill = (skillState) => {
        return skillState.id === action.payload.id ? skill(skillState, action) : skillState;
    };
    switch (action.type) {
        case types.REMEMBER_ME:
            return {
                id: action.payload.id,
                name: action.payload.name,
                avatar: action.payload.avatar,
                role: action.payload.role,
                skills: action.payload.role,
            };
        case types.LOGIN:
            return {
                id: action.payload.id,
                name: action.payload.name,
                avatar: action.payload.avatar,
                role: action.payload.role,
                skills: action.payload.skills,
            };
        case types.LOGOUT:
            return {
                id: 0,
                name: '',
                avatar: '',
                role: '',
                skills: [],
            };
        case types.USER_ADD_SKILL:
            return {
                ...state,
                skills: [
                    ...state.skills,
                    skill(undefined, action),
                ],
            };

        case types.USER_REORDER_SKILL:
            const { currPos, newPos } = action.payload;
            const skills = state.skills; 
            const currentSkill = skills[currPos];
            const removedSkills = [
                ...skills.slice(0, currPos),
                ...skills.slice(currPos + 1)
            ];
            return {
                ...state,
                skills: [
                    ...removedSkills.slice(0, newPos),
                    currentSkill,
                    ...removedSkills.slice(newPos)
                ],
            };

        case types.USER_REMOVE_SKILL:
            return {
                ...state,
                skills: state.skills.filter(skill =>
                    skill.id !== action.payload
                ),
            };
        default: 
            return state;
    }   
};

