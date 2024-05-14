import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";
import { Menu } from "lucide-react";

const navigationItems = [
    {
        title: "About",
        href: "/#aboutUs",
    },
    {
        title: "Notice Board",
        href: "/board",
    },
    {
        title: "Gallery",
        href: "/gallery",
    },
    {
        title: "Resources",
        href: "/resources",
    },
    {
        title: "Membership",
        links: [
            {
                href: "https://docs.google.com/forms/d/e/1FAIpQLSe1_rMRH4gPIi-JonVGVC7mlXf_1dnv6Vwy0Dn6LMoa2OubCQ/viewform?usp=sf_NavLink",
                text: "Become a Member",
                target: "_blank",
            },
            { href: "/members", text: "Members" },
            { href: "/members#honorary-members", text: "Honorary Member" },
        ],
    },
    {
        title: "Leadership",
        links: [
            {
                href: "/leadership/departmental-pgsa",
                text: "Departmental PGSA",
            },
            {
                href: "/leadership/hall-hec",
                text: "Halls of Residence (meet your HEC)",
            },
            {
                href: "/leadership/legislature",
                text: "The Legislature (meet your Students’ Parliamentary Council)",
            },
            {
                href: "/leadership/administrative-quarters",
                text: "Administrative Quarters (meet your Central Executive Council)",
            },
            {
                href: "/leadership/judicial-quarter",
                text: "The Judicial Quarter (Meet the Judicial Council)",
            },
        ],
    },
    {
        title: "Contact Us",
        href: "/contact_us",
    },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-200 p-2 md:py-3 font-san sticky top-0 z-[1000]">
            <div className="md:container flex items-center justify-between">
                <NavigationMenu>
                    <NavLink to="/">
                        <div className="flex gap-1 items-center justify-center">
                            <div className="avatar hidden lg:flex">
                                <div className="rounded-full w-6">
                                    <img src="/oau.png" />
                                </div>
                            </div>

                            <div className="avatar">
                                <div className="rounded-full w-6">
                                    <img src="/pgsa.png" />
                                </div>
                            </div>

                            <div className="font-extrabold text-transparent text-xs lg:text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500">
                                OAU PGSA
                            </div>
                        </div>
                    </NavLink>
                </NavigationMenu>

                <div className="hidden lg:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.links ? (
                                        <>
                                            <NavigationMenuTrigger className="bg-transparent neon-border">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="flex bg-slate-200 flex-col items-start w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                                                {item.links.map((link) => (
                                                    <NavLink
                                                        to={link.href}
                                                        key={link.text}
                                                        target={
                                                            link.target
                                                                ? link.target
                                                                : "_self"
                                                        }
                                                    >
                                                        <NavigationMenuLink
                                                            className={`${navigationMenuTriggerStyle()} bg-transparent neon-border text-wrap`}
                                                        >
                                                            {link.text}
                                                        </NavigationMenuLink>
                                                    </NavLink>
                                                ))}
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavLink
                                            to={item.href}
                                            key={item.title}
                                        >
                                            <NavigationMenuLink
                                                className={`${navigationMenuTriggerStyle()} bg-transparent neon-border text-wrap`}
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </NavLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="lg:hidden">
                    <Menu fill="purple" onClick={toggleMenu} />
                </div>
            </div>

            {isOpen && (
                <div>
                    <NavigationMenu className="max-w-full justify-start">
                        <NavigationMenuList className="flex bg-slate-200 flex-col items-start align-middle">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.links ? (
                                        <>
                                            <Accordion
                                                type="single"
                                                collapsible
                                                className=""
                                            >
                                                <AccordionItem
                                                    className="border-0"
                                                    key={item.title}
                                                    value={`${item.title}`}
                                                >
                                                    <AccordionTrigger className="text-sm hover:no-underline ps-4">
                                                        {item.title}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="flex flex-col gap-2 p-0 text-ellipsis overflow-hidden">
                                                        {item.links.map(
                                                            (link) => (
                                                                <NavLink
                                                                    to={
                                                                        link.href
                                                                    }
                                                                    key={
                                                                        link.text
                                                                    }
                                                                    className="text-ellipsis overflow-hidden"
                                                                >
                                                                    <NavigationMenuLink
                                                                        className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-violet-300 text-wrap text-ellipsis overflow-hidden`}
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        {
                                                                            link.text
                                                                        }
                                                                    </NavigationMenuLink>
                                                                </NavLink>
                                                            )
                                                        )}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </>
                                    ) : (
                                        <NavLink to={item.href}>
                                            <NavigationMenuLink
                                                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-violet-300 text-sm text-wrap text-ellipsis overflow-hidden`}
                                                onClick={toggleMenu}
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </NavLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            )}
        </nav>
    );
};

export default Header;
