import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import { fetchNewsDetails, sanitizeContent } from "../utils";
import { post } from "../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "../components/ui/skeleton";

const NewsDetailsPage = () => {
    const [newsData, setNewsData] = useState<post | null>(null);
    const params = useParams();

    useEffect(() => {
        fetchNewsDetails(params.postId as string).then((data) =>
            setNewsData(data)
        );
    }, [params.postId]);

    return (
        <div className="px-6 z-40 md:container pt-20">
            {newsData === null ? (
                <div className="flex flex-col items-center justify-center h-screen relative z-50 gap-8">
                    <div className="flex flex-col space-y-3 w-full">
                        <Skeleton className="h-[125px] md:h-96 w-[250px] md:w-full rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mx-auto antialiased pt-4 relative z-50">
                    <div className="mb-10">
                        <h1 className={twMerge("text-4xl mb-4")}>
                            {newsData.title}
                        </h1>

                        <div className="text-sm prose prose-sm dark:prose-invert">
                            <img
                                src={newsData.thumbnail}
                                alt={newsData.title}
                                className="rounded-lg mb-10 object-cover md:max-h-[680px]"
                            />
                            <div
                                className="post-content"
                                dangerouslySetInnerHTML={{
                                    __html: sanitizeContent(newsData.content),
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default NewsDetailsPage;
