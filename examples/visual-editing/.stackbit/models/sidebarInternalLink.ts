import { type ObjectModel } from '@stackbit/types';

export const sidebarInternalLink: ObjectModel = {
    type: 'object',
    name: 'sidebarInternalLink',
    label: 'Internal Link',
    labelField: 'label',
    fields: [
        { name: 'label', type: 'string' },
        { name: 'slug', type: 'string' },
    ]
};