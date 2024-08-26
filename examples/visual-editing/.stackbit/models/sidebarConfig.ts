import { type DataModel } from '@stackbit/types';

export const sidebarConfig: DataModel = {
    type: 'data',
    name: 'sidebarConfig',
    label: 'Sidebar Configuration',
    singleInstance: true,
    readOnly: true,
    filePath: 'src/data/sidebarConfig.json',
    fields: [
        {
            type: 'list',
            name: 'items',
            label: 'Sidebar items',
            items: {
                type: 'model',
                models: ['sidebarLink', 'sidebarInternalLink', 'sidebarLinkGroup', 'sidebarAutoLinkGroup']
            }
        }
    ]
};
