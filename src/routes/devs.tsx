import { HoverEffect } from "../components/ui/card-hover-effect";

const DevsPage = () => {
    return (
        <div className="mx-auto py-4 md:min-h-[87vh] relative z-50">
            <p className="text-white text-2xl gradient-text">Meet our Development Team</p>
            <HoverEffect items={team} />
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
