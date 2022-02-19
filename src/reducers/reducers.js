import { personaOne } from '../data/personaData.js';

export const personaReducer = (state = personaOne, action) => {
    switch (action.type){
        case 'PERSONA_SWITCH':
            const newState = state.button !== action.persona.button ? {
                button: action.persona.button, 
                name: action.persona.name, 
                job: action.persona.job[Math.floor(Math.random()*action.persona.job.length)], 
                logo: action.persona.logo,
                bio: action.persona.bio
            } : {
                button: personaOne.button, 
                name: personaOne.name, 
                job: personaOne.job[Math.floor(Math.random()*personaOne.job.length)], 
                logo: personaOne.logo,
                bio: personaOne.bio
            }
            return newState;
        default:
            const defaultState = {
                button: state.button, 
                name: state.name, 
                job: state.job[0], 
                logo: state.logo,
                bio: state.bio
            }
            return defaultState;
    }
};