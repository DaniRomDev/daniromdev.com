
export type MetaConfig = {
    url: string;
    sitename: string;
    description: string;
    image: string;
    type?: string
    title?: string
    date?: Date
}

interface Configuration {
    meta: MetaConfig
}

const config = {
    meta: {
        url: 'https://daniromdev.com',
        sitename: 'Daniel Romero',
        description: `Javascript lover, traveller and sometimes software engineer`,
        image: 'https://daniromdev.com/static/images/banner.png',
        type: 'website',
        title: "The blog for software traveller engineers"
    }
}

export default config;
