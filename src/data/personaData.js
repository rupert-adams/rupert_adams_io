import skull_logo from '../media/skull_diggery_fun_io2.png';
import face_logo from '../media/1BW.jpeg';
import { bioData } from './bioData.js';

export const personaOne = {
    'button': 'Work',
    'name': 'Rupert Adams',
    'job': [
        'Infrastructure Engineer', 
        'Tech Writer', 
        'System Designer'
    ],
    'logo': face_logo,
    'bio': bioData[0]
};
    
export const personaTwo = {
    'button': 'Play',
    'name': 'Skull_Diggery',
    'job': [
        'Spooky Player', 
        'Media Preservationist', 
        'Game Designer'
    ],
    'logo': skull_logo,
    'bio': bioData[1]
};