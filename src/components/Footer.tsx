import { NavigationMenu } from "../components/ui/navigation-menu";
import { Card } from "../components/ui/card";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="bg-slate-200">
            <div className="md:container flex flex-col gap-4 md:flex-row items-center align-middle justify-between py-4 md:py-4 text-primary z-[1000] border-0 shadow-none">
            <div className="flex flex-col md:flex-row justify-between items-center align-middle gap-4">
                <NavigationMenu className="neon-border">
                    <Link to="/#aboutUs">
                        About Us
                    </Link>
                </NavigationMenu>
                <NavigationMenu className="neon-border">
                    <Link to="/#aimsAndObjectives">
                        Aims and Objectives
                    </Link>
                </NavigationMenu>
                <NavigationMenu className="neon-border">
                    <Link to="/contact_us">
                        Contact Us
                    </Link>
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
