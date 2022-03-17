import skull_logo from '../media/skull_diggery_rs.png';
import face_logo from '../media/ru_de.png';
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