import skull_logo from '../media/Skull_Diggery_logo_salmon.png';
import face_logo from '../media/1BW.jpeg';
import face_fall_logo from '../media/1BW_fall.jpg';
import { bioData } from './bioData.js';

export const personaOne = {
    'button': 'Work',
    'name': 'Rupert Adams',
    'job': [
        'Infrastructure Engineer', 
        'Tech Writer', 
        'Egalitarian System Designer'
    ],
    'logo': [
        face_logo,
        face_fall_logo
    ],
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