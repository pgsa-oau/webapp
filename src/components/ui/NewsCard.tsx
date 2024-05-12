import Link from "next/link";
import React, { use } from "react";

interface NewsCardProps {
    title: string;
    summary?: string;
    thumbnail?: string;
    author: string;
    published_at: string;
    tag?: string;
}

const NewsCard = ({
    title,
    summary,
    thumbnail,
    author,
    published_at,
    tag,
}: NewsCardProps) => {
    const formattedDate = new Date(published_at).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="bg-white overflow-hidden border-b-4 border-purple-500 w-full rounded-lg shadow-sm hover:shadow-xl hover:border-purple-700 transition-shadow duration-300 ease-in-out">
            <img
                src={thumbnail}
                alt={title}
                className="w-full object-cover h-32 sm:h-48 md:h-64"
            />
            <div className="p-4 md:p-6 text-gray-900">
                <div>
                    <p className="text-purple-500 font-semibold text-xs mb-1 leading-none">
                        {tag}
                    </p>
                    <h3 className="font-semibold mb-2 text-lg leading-tight sm:leading-normal">
                        {title}
                    </h3>
                    <p className="text-sm leading-none mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {summary}
                    </p>
                </div>

                <div className="text-sm flex items-center justify-between">
                    <p className="leading-none">{author}</p>
                    <div>
                        <span></span>
                        <p className="leading-none">{formattedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
