import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/image-slider";
import { Link } from "react-router-dom";

const CarouselSection = () => {
    const images = [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
        "/images/image4.jpg",
        "/images/image5.jpg",
    ];

    return (
        <ImagesSlider className="h-[100vh] z-50" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p
                    className="text-2xl md:text-4xl text-center gradient-text font-extrabold py-4"
                    animate={{ x: 0 }}
                    initial={{ x: -100 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    The OAU Postgraduate Students&apos; Association
                </motion.p>

                <div className="flex flex-col md:flex-row gap-8 pt-8">
                    <motion.a
                        className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors cursor-pointer text-center"
                        href="/#aboutUs"
                        animate={{ y: 0 }}
                        initial={{ y: 100 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    >
                        About Us
                    </motion.a>

                    <motion.div
                        className="inline-block px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors cursor-pointer"
                        animate={{ y: 0 }}
                        initial={{ y: 100 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    >
                        <Link to="/board">Latest News !</Link>
                    </motion.div>
                </div>
            </motion.div>
        </ImagesSlider>
    );
};

export default CarouselSection;
