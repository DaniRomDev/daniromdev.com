
export type MetaConfig = {
    url: string;
    sitename: string;
    description: string;
    image: string;
    type?: string
    title?: string
    date?: string
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
        sitename: 'Software engineering Blog - Daniel Romero',
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
    },
    blog: {
        categories: ['General', 'Javascript', 'PHP', 'Laravel', 'Deployment', 'Test', 'React', 'Mobile', 'Travel']
    }
}

export default config;
