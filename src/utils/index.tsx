import { getStoryblokApi, ISbRichtext, renderRichText } from "@storyblok/react/rsc";
import DOMPurify from "isomorphic-dompurify";
import { newsPost } from "../types";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function sanitizeContent(content: unknown): string {
    const renderedHtml = renderRichText(content as ISbRichtext | undefined);

    const sanitizedHtml = DOMPurify.sanitize(renderedHtml);

    return sanitizedHtml;
}

export async function fetchNews() {
    const storyblokApi = getStoryblokApi();
    const data = storyblokApi.get(`cdn/stories`, {
        version: "published",
        starts_with: "news",
        is_startpage: false,
    }, {cache: "no-cache"});

    const newsData = (await data).data.stories.map((post: newsPost) => {
        return {
            id: post.slug,
            name: post.name,
            slug: post.slug,
            published_at: post.first_published_at,
            title: post.content.title,
            thumbnail: post.content.thumbnail,
            author: post.content.author,
            summary: post.content.summary,
            content: post.content.content,
            tag: post.content.tag,
        };
    });

    return newsData
}

export async function fetchNewsDetails(postId: string) {
    const storyblokApi = getStoryblokApi();
    const data = storyblokApi.get("cdn/stories/news/" + postId, {
        version: "published",
    }, {cache: "no-cache"});

    const postData = (await data).data.story;

    return {
        id: postData.slug,
        name: postData.name,
        slug: postData.slug,
        published_at: postData.first_published_at,
        title: postData.content.title,
        thumbnail: postData.content.thumbnail,
        author: postData.content.author,
        summary: postData.content.summary,
        content: postData.content.content,
        tag: postData.content.tag,
    };
}

export const handleScrollToSection = () => {
    const sectionId = window.location.hash;
    if (sectionId) {
        const sectionElement = document.querySelector(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    }
};


