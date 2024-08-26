import { type ObjectModel } from '@stackbit/types';

export const imageHtml: ObjectModel = {
    type: 'object',
    name: 'imageHtml',
    label: 'HTML Image',
    labelField: 'alt',
    fields: [
        { name: 'alt', type: 'string' },
        { name: 'file', type: 'string' }
    ]
};