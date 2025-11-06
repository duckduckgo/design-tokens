import pkgJson from '../../package.json' with { type: 'json' };

const version = pkgJson.version;

const fileHeader = {
    fileHeader: async (messages: string[]) => {
        const date = new Date();

        // prettier-ignore
        return [
            ...messages,
            `Source: https://dub.duckduckgo.com/duckduckgo/design-tokens`,
            `Version: ${version}`,
            `Last updated: ${date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'})}`,
        ];
    },
};

export default fileHeader;
