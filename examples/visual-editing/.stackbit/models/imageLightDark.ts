import { type ObjectModel } from '@stackbit/types';

export const imageLightDark: ObjectModel = {
    type: 'object',
    name: 'imageLightDark',
    label: 'Light/Dark Image',
    labelField: 'alt',
    fields: [
        { name: 'alt', type: 'string' },
        { name: 'dark', type: 'image' },
        { name: 'light', type: 'image' }
    ]
};