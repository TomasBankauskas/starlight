import { type ObjectModel } from '@stackbit/types';

export const sidebarLink: ObjectModel = {
    type: 'object',
    name: 'sidebarLink',
    label: 'Link',
    labelField: 'label',
    fields: [
        { name: 'label', type: 'string' },
        { name: 'link', type: 'string' },
    ]
};