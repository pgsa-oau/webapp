import { Link } from "react-router-dom";
import AimsAndObjectives from "../components/AimsAndObjectives";
import CarouselSection from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import { pageData } from "../components/pageData";
import { Button } from "../components/ui/button";

const HomePage = () => {
    return (
        <main className="flex h-full min-h-[95vh] flex-col gap-4 items-center justify-between p-2 z-50">
            <CarouselSection />

            <div className="flex flex-col items-center p-4 gap-2 z-50 border-2 border-transparent bg-clip-padding backdrop-filter backdrop-blur-xl rounded-2xl animate-pulse-gradient w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-secondary animate-pulse">
                    Latest Information!
                </h2>

                <Button
                    variant="outline"
                    size="sm"
                    className="px-2 rounded-sm text-white font-semibold animate-pulse"
                >
                    <Link to="/board">Visit Our Notice Board</Link>
                </Button>
            </div>

            <div
                id="aboutUs"
                className="py-2 flex flex-col md:flex-row gap-4 md:gap-6"
            >
                {pageData.heroAboutUs.map((item) => (
                    <HeroSection
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

            <section id="aimsAndObjectives" className="w-full py-2">
                <AimsAndObjectives />
            </section>
        </main>
    );
};

export default HomePage;
