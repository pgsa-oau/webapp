import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/image-slider";

const CarouselSection = () => {
    const images = [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
        "/images/image4.jpg",
        "/images/image5.jpg",
    ];

    return (
        <ImagesSlider className="md:h-[40rem] h-[20rem] z-50" images={images}>
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
                <motion.p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-4">
                    The Postgraduate Students&apos; Association
                </motion.p>
            </motion.div>
        </ImagesSlider>
    );
};

export default CarouselSection;
