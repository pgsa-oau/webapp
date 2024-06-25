import React from "react";

interface NewsCardProps {
    title: string;
    summary?: string;
    thumbnail?: string;
    author: string;
    published_at: string;
    tag?: string;
}

const NewsCard = React.memo(
    ({ title, summary, thumbnail, published_at }: NewsCardProps) => {
        const formattedDate = React.useMemo(
            () =>
                new Date(published_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                }),
            [published_at]
        );

        return (
            <div className="flex flex-col gap-3 pb-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                ></div>
                <div>
                    <p className="text-[#111618] text-base font-medium leading-normal overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {title}
                    </p>
                    <p className="leading-normal my-2 text-xs">
                        {formattedDate}
                    </p>
                    <p className="text-[#607e8a] text-sm font-normal leading-normal overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {summary}
                    </p>
                </div>
            </div>
        );
    }
);

export default NewsCard;
