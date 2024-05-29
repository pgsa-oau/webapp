import AimsAndObjectives from "../components/AimsAndObjectives";
import CarouselSection from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import { pageData } from "../components/pageData";

const HomePage = () => {
    return (
        <main className="flex h-full min-h-[100vh] flex-col gap-4 items-center justify-between p-0 z-50 m-0">
            <CarouselSection />

            <div
                id="aboutUs"
                className="md:container pt-20 flex flex-col md:flex-row gap-4 md:gap-6"
            >
                {pageData.heroAboutUs.map((item) => (
                    <HeroSection
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

            <section id="aimsAndObjectives" className="md:container w-full p-5">
                <AimsAndObjectives />
            </section>
        </main>
    );
};

export default HomePage;
