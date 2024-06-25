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
                className="md:container pt-20 flex flex-col gap-4 md:gap-6"
            >
                <section className="flex md:h-[25vh] items-center">
                    <HeroSection
                        key={pageData.heroAboutUs[0].title}
                        title={pageData.heroAboutUs[0].title}
                        description={pageData.heroAboutUs[0].description}
                    />

                    <section className="hidden md:flex justify-center items-center h-full md:w-2/5 py-4">
                        <img
                            src="/images/goals.svg"
                            alt="Side Image"
                            className="h-full w-full rounded-xl object-contain"
                        />
                    </section>
                </section>

                <section className="flex md:h-[25vh] items-center">
                    <section className="hidden md:flex justify-center items-center h-full md:w-2/5 py-4">
                        <img
                            src="/images/shared_goals.svg"
                            alt="Side Image"
                            className="h-full w-full rounded-xl object-contain"
                        />
                    </section>
                    <HeroSection
                        key={pageData.heroAboutUs[1].title}
                        title={pageData.heroAboutUs[1].title}
                        description={pageData.heroAboutUs[1].description}
                    />
                </section>
            </div>

            <section id="aimsAndObjectives" className="md:container w-full p-5">
                <AimsAndObjectives />
            </section>
        </main>
    );
};

export default HomePage;
