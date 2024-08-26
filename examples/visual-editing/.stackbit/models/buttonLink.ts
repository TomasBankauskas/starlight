import { type ObjectModel } from '@stackbit/types';

export const buttonLink: ObjectModel = {
    type: 'object',
    name: 'buttonLink',
    label: 'Button',
    labelField: 'text',
    fields: [
        { name: 'text', type: 'string', default: 'Get Started' },
        { name: 'link', type: 'string', default: '/' },
        {
            name: 'variant',
            type: 'enum',
            controlType: 'button-group',
            options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Minimal', value: 'minimal' }
            ],
            default: 'primary',
        },
        { name: 'icon', type: 'string' },
    ]
};

