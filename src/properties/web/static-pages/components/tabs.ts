import { DesignToken } from 'style-dictionary/types';

const tabs: DesignToken = {
    tabs: {
        buttonStyle: {
            tab: {
                unselected: {
                    backgroundColor: { $value: 'var(--ds-control-secondary-background-color)' },
                    borderColor: { $value: 'var(--ds-control-secondary-border-color)' },
                    textColor: { $value: 'var(--ds-text-secondary-color)' },
                },
                selected: {
                    backgroundColor: { $value: 'var(--ds-control-primary-background-color)' },
                    borderColor: { $value: 'var(--ds-control-primary-border-color)' },
                    textColor: { $value: 'var(--ds-text-primary-color)' },
                },
            },
        },
    },
};

export default tabs;
