
export type Configuration = {
    meta: MetaConfig,
    navigation: NavigationConfig,
    blog: BlogConfig,
    accounts: { [name: string]: SocialAccount },
    analytics: { [platform: string]: AnalyticConfig }
}

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

export type BlogConfig = {
    categories: string[]
}

export type SocialAccount = {
    key: string;
    href: string
}

export type AnalyticConfig = {
    domain: string;
    tracking_code: string
}


const config: Configuration = {
    meta: {
        url: process.env.NEXT_PUBLIC_APP_URL || 'https://daniromdev.com',
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
        categories: ['General', 'Javascript', 'PHP', 'Laravel', 'DevOps', 'Test', 'React', 'Mobile']
    },
    accounts: {
        github: {
            key: 'github',
            href: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`,
        },
        linkedin: {
            key: 'linkedin',
            href: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USER}`,
        }
    },
    analytics: {
        fathom: {
            domain: process.env.NEXT_PUBLIC_APP_URL || 'daniromdev.com',
            tracking_code: process.env.NEXT_PUBLIC_FATHOM_TRACKING_CODE as string,
        }
    }
}

export default config;
