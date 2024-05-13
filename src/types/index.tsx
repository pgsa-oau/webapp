export interface post {
    id: string;
    name: string;
    slug: string;
    published_at: any;
    title: string;
    thumbnail: string;
    author: string;
    summary: string;
    content: any;
    tag: string;
}

export interface newsPost {
    slug: string;
    name: string;
    first_published_at: any;
    content: {
        title: string;
        thumbnail: string;
        author: string;
        summary: string;
        content: any;
        tag: string;
    };
}
