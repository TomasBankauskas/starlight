import { type ObjectModel } from '@stackbit/types';

export const banner: ObjectModel = {
    type: 'object',
    name: 'banner',
    label: 'Banner',
    labelField: 'content',
    fields: [
        { name: 'content', type: 'text' }
    ]
};