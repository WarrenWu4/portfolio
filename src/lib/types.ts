export interface Proj {
    title: string
    desc: string
    techstack: string[]
    article: string
    thumbnail?: string
    github?: string
    demo?: string
}

export interface Blog {
    title: string
    article: string
    "date-created": string
    desc: string
    thumbnail?: string
}

export interface Misc {
    link: string
    text: string
    icon: string
    background: string
}

export interface Event {
    title: string
    description: string
    date: string
}