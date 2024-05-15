import { NavigationMenu } from "../components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="sticky bottom-0 z-[1000] px-4 backdrop-filter backdrop-blur-md">
    <div className="md:container bg-none flex gap-4 flex-row items-center align-middle justify-between py-4 md:py-4 text-primary border-0 shadow-none">
        <div className="flex flex-col md:flex-row justify-between items-center align-middle gap-4">
            <NavigationMenu className="neon-border hidden md:block">
                <Link to="/#aboutUs">About Us</Link>
            </NavigationMenu>
            <NavigationMenu className="neon-border hidden md:block">
                <Link to="/#aimsAndObjectives">
                    Aims and Objectives
                </Link>
            </NavigationMenu>
            <NavigationMenu className="neon-border hidden md:block">
                <Link to="/contact_us">Contact Us</Link>
            </NavigationMenu>
            <NavigationMenu className="neon-border">
                <Link
                    to="/devs"
                    className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500"
                >
                    Meet the Devs
                </Link>
            </NavigationMenu>
        </div>
        <div>&copy; {year} OAU PGSA</div>
    </div>
</div>
    );
};

export default Footer;
