import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import {Link} from "react-router-dom";
import { fetchNews } from "../utils";
import NewsCard from "../components/ui/NewsCard";
import { post } from "../types";
import { useEffect, useState } from "react";

const NoticeBoard = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews().then((data) => setNews(data));
    }
    , []);

    return (
        <div className="space-y-5 relative z-50 text-white">
            <section className="font-medium space-y-4">
                <Card className="bg-transparent border-0">
                    <CardHeader>
                        <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                            Notice Board
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <CardDescription>
                            Welcome to the PGSA Notice Board. Here you will find
                            important information, updates, and announcements
                            from the PGSA. Be sure to check back regularly for
                            the latest updates.
                        </CardDescription>

                        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                            {news.map((post: post) => (
                                <Link
                                    key={post.id}
                                    to={`/board/${post.slug}`}
                                    className="w-full md:w-[30%]"
                                >
                                    <NewsCard key={post.id} {...post} />
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </section>
            <section className="font-medium space-y-4">
                <Card className="bg-transparent border-0">
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
                                    +2348164031725 / +2347038675918
                                </li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                </Card>
            </section>
            <section className="font-medium space-y-4">
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
                                    +2348164031725 / +2347038675918
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
