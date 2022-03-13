import aws from '../media/skill_pictures/aws.png'
import py from '../media/skill_pictures/python.png'
import tf from '../media/skill_pictures/terraform.png'
import ans from '../media/skill_pictures/ansible.png'
import doc from '../media/skill_pictures/docker.png'

import sh from '../media/playing_pictures/sh.png'
import mgs from '../media/playing_pictures/mgs2.png'
import eld from '../media/playing_pictures/eldring.png'

export const bioData = [
    {
        'title': 'Rupert Adams',
        'bio': [
        "Current Data/Infrastructure Engineer. Previous Thespian. Radical Egalitarian and Tinkerer. If I had to describe myself in four words it would be: 'Does not speak Spanish'. Currently working for Alpega as well as on a number of small projects that will be updated in my blog. I am always open for a chat and my favourite colour is none of your business.",
        "Along with some web design and building, my skill-set includes:"
        ],
        'persona_set': {
            'AWS Solutions architect': aws,
            'Python': py,
            'Terraform': tf,
            'Ansible': ans,
            'Docker': doc
        }
    },
    {
        'title': 'Skull_Diggery',
        'bio': [
            "Enthusiastic player of games. I love horror, but am only just starting to get around to playing the classics. Sharing my thoughts through the medium of video with some cheeky cultural theory snuck in. Feel free to drop me a message!",
            "Currently playing:"
        ],
        'persona_set': {
            'Silent Hill': sh,
            'Metal Gear Solid 2: Substance': mgs,
            'Elden Ring': eld
        }
    }
]