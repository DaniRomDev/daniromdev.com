
export type Configuration = {
    meta: MetaConfig,
    navigation: NavigationConfig,
    blog: BlogConfig,
    external_links: {
        [name: string]: ExternalLink[]
    }
    accounts: { [name: string]: SocialAccount },
    analytics: { [platform: string]: AnalyticConfig }
}

export type ExternalLink = {
    href: string,
    title: string
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
    domains: string[];
    tracking_code: string
}


const config: Configuration = {
    meta: {
        url: process.env.NEXT_PUBLIC_APP_URL || 'https://daniromdev.com',
        sitename: 'Software engineering Blog - Daniel Romero',
        description: `Clean code lover, failed traveller attempt and sometimes software engineer`,
        image: `${process.env.NEXT_PUBLIC_APP_URL}/static/images/banner.png`,
        type: 'website',
        title: "The blog for programmers that like computer stuff"
    },
    navigation: {
        routes: [{
            href: '/',
            text: 'Home'
        },
        {
            href: '/blog',
            text: 'Blog'
        },
        {
            href: '/resources',
            text: 'Resources'
        }
        ]
    },
    blog: {
        categories: ['General', 'Javascript', 'PHP', 'Clean architectures', 'Laravel', 'Docker', 'DevOps', 'Testing', 'React', 'Mobile']
    },
    external_links: {
        general: [{
            href: "https://jameshalsall.co.uk/posts/why-soft-deletes-are-evil-and-what-to-do-instead",
            title: "Why soft deletes are evil and what to do instead"
        }, {
            href: "https://stanete.com/system-design-101",
            title: "System design 101"
        }, {
            href: "https://stanete.com/system-design-102",
            title: "System design 102"
        }],
        laravel: [{ href: "https://laravel-news.com", title: "Laravel news " },
        { href: "https://laravel-code.tips/", title: "Laravel code tips" },
        { href: "https://spatie.be/open-source?search=&sort=-downloads", title: "Spatie open source packages and courses" },
        { href: "https://laravelexamples.com/", title: "Laravel real code examples" }

        ],
        devOps: [{
            href: "https://blog.udemy.com/what-is-devops/",
            title: "What Is DevOps: How To Build An Efficient DevOps Team"
        },
        {
            href: "https://blog.udemy.com/devops-engineer/?utm_source=newsletter-instructor&utm_medium=instructor&utm_campaign=blog",
            title: "Becoming a DevOps Engineer: Understanding the Role and Responsibilities"
        }],
        ["clean Architectures"]: [{
            href: "https://refactoring.guru/",
            title: "Refactoring guru (Design patterns with real examples)"
        }, {
            href: "https://www.patterns.dev/",
            title: "Free book on Javascript patterns, updated on 2022"
        }, {
            href: "https://patricsteiner.github.io/state-machine-in-a-ddd-context/",
            title: "State machine in a DDD context"
        }, {
            href: "https://medium.com/@felipefreitasbatista/developing-the-ubiquitous-language-1382b720bb8c",
            title: "Developing the ubiquitous language"
        }, {
            href: "https://github.com/Sairyss/domain-driven-hexagon",
            title: "Domain driven hexagon"
        }]
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
            domains: ['daniromdev.com', 'www.daniromdev.com'],
            tracking_code: process.env.NEXT_PUBLIC_FATHOM_TRACKING_CODE as string,
        }
    }
}

export default config;
