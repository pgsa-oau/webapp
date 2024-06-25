import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Link } from "react-router-dom";
import { fetchNews } from "../utils";
import NewsCard from "../components/ui/NewsCard";
import { post } from "../types";
import { useEffect, useState } from "react";
import { Skeleton } from "../components/ui/skeleton";

const NoticeBoard = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews().then((data) => setNews(data));
    }, []);

    return (
        <div className="space-y-5 relative z-50 pt-16 md:container">
            <section className="font-medium space-y-4">
                <div>
                    <div className="relative flex flex-col justify-center items-center h-60 md:h-[45vh] mt-4 bg-[url('/images/noticeboard.png')] bg-cover bg-center mb-4">
                        <div className="p-4 backdrop-blur-sm bg-white/30 rounded-lg flex flex-col justify-center items-center">
                            <h1 className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                                See Our E-Notice Board
                            </h1>
                            <p>
                                Stay current with all the news and information
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {news.length > 0 ? (
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                {news.map((post: post) => (
                                    <Link
                                        key={post.id}
                                        to={`/board/${post.slug}`}
                                    >
                                        <NewsCard key={post.id} {...post} />
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                <Skeleton className="h-[125px] md:h-40 w-full rounded-xl" />
                                <Skeleton className="h-[125px] md:h-40 w-full rounded-xl" />

                                <Skeleton className="h-[125px] md:h-40 w-full rounded-xl" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="font-medium space-y-4">
                <div className="bg-transparent border-0">
                    <CardHeader>
                        <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                            Safety and Security
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <CardDescription>
                            Your safety and security is our top priority. We
                            have put in place measures to ensure that you are
                            safe and secure while on campus.
                        </CardDescription>
                        <CardDescription>
                            We have a team of security personnel who are always
                            available to attend to your security needs. You can
                            reach out to them via the following options:
                        </CardDescription>
                        <CardDescription>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Emergency Contact:</strong>{" "}
                                    +2347050721579
                                </li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                </div>
            </section>

            <section className="font-medium space-y-8">
                <Card className="bg-transparent border-0">
                    <CardHeader>
                        <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                            Diversity and Inclusion
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <CardDescription>
                            We are committed to creating a diverse and inclusive
                            environment for all our students. We believe that
                            diversity and inclusion are essential for the growth
                            and development of our students.
                        </CardDescription>
                        <CardDescription>
                            We have put in place measures to ensure that all our
                            students feel welcome and included. You can reach
                            out to us if you have any concerns or suggestions on
                            how we can improve our diversity and inclusion
                            efforts.
                        </CardDescription>
                        <CardDescription>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Email:</strong>
                                    <a
                                        href="mailto:pgsaife@oauife.edu.ng"
                                        className="text-blue-500"
                                    >
                                        {" "}
                                        pgsaife@oauife.edu.ng{" "}
                                    </a>
                                </li>
                                <li>
                                    <strong>Phone Contact:</strong>{" "}
                                    +2347050721579
                                </li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default NoticeBoard;
