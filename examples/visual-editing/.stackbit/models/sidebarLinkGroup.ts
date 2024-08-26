import { type ObjectModel } from '@stackbit/types';

export const sidebarLinkGroup: ObjectModel = {
    type: 'object',
    name: 'sidebarLinkGroup',
    label: 'Group of Links',
    labelField: 'label',
    fields: [
        { name: 'label', type: 'string' },
        {
            type: 'list',
            name: 'items',
            label: 'Items',
            items: {
                type: 'model',
                models: ['sidebarLink', 'sidebarInternalLink', 'sidebarLinkGroup', 'sidebarAutoLinkGroup']
            }
        },
        { name: 'collapsed', type: 'boolean' },
    ]
};