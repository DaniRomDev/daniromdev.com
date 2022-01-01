
export type MetaConfig = {
    url: string;
    sitename: string;
    description: string;
    image: string;
    type?: string
    title?: string
    date?: Date
}

export type NavigationRoute = {
    href: string;
    text: string;
}

export type NavigationConfig = {
    routes: NavigationRoute[]
}


const config = {
    meta: {
        url: process.env.NEXT_PUBLIC_APP_URL,
        sitename: 'Daniel Romero',
        description: `Javascript lover, traveller and sometimes software engineer`,
        image: `${process.env.NEXT_PUBLIC_APP_URL}/static/images/banner.png`,
        type: 'website',
        title: "The blog for programmers that like travel and computer stuff"
    },
    navigation: {
        routes: [{
            href: '/',
            text: 'Home'
        },
        {
            href: '/blog',
            text: 'Blog'
        }
        ]
    }
}

export default config;
