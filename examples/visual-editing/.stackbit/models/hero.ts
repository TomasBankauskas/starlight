import { type ObjectModel } from '@stackbit/types';

export const hero: ObjectModel = {
    type: 'object',
    name: 'hero',
    label: 'Hero',
    labelField: 'title',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'tagline', type: 'string' },
        { name: 'image', type: 'model', models: ['image', 'imageLightDark', 'imageHtml'] },
        { name: 'actions', type: 'list', items: { type: 'model', models: ['buttonLink'] } }
    ]
};