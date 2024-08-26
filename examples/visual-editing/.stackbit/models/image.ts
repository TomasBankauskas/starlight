import { type ObjectModel } from '@stackbit/types';

export const image: ObjectModel = {
    type: 'object',
    name: 'image',
    label: 'Image',
    labelField: 'alt',
    fields: [
        { name: 'alt', type: 'string' },
        { name: 'file', type: 'image' }
    ]
};