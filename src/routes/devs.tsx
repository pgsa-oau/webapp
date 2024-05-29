import { HoverEffect } from "../components/ui/card-hover-effect";

const DevsPage = () => {
    return (
        <div className="mx-auto py-4 md:min-h-[87vh] z-50 md:container pt-20 flex flex-col items-center justify-center gap-4">
            <p className="text-white text-2xl gradient-text">
                Meet our Development Team
            </p>
            <section className="flex items-center">
                <HoverEffect items={team} />
                <section className="hidden md:flex justify-center items-center h-full md:w-2/5 py-4">
                    <img
                        src="/images/shared_goals.svg"
                        alt="Side Image"
                        className="h-full w-full rounded-xl object-contain"
                    />
                </section>
            </section>
        </div>
    );
};

export default DevsPage;

const team = [
    {
        title: "Taofiq Sulayman",
        description: "Software Engineer || Team Lead",
        link: "https://www.linkedin.com/in/taofiq-sulayman/",
        imageUrl: `https://robohash.org/${Math.floor(Math.random() * 10)}`,
    },
    {
        title: "Igbalaoluwa Rowaiye",
        description: "UI/UX Designer || Project Manager",
        link: "https://www.linkedin.com/in/igbalaoluwa-rowaiye/",
        imageUrl: `https://robohash.org/${Math.floor(Math.random() * 10)}`,
    },
    // {
    //     title: "Oluwaseun Abolade",
    //     description: "Frontend Engineer",
    //     link: "https://www.linkedin.com/in/oluwaseun-abolade/",
    //     imageUrl: `https://robohash.org/${Math.floor(Math.random() * 10)}`,
    // },
];
