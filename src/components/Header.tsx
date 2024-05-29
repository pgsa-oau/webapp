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
        isScrollLink: true,
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
        <nav className="p-2 md:py-3 fixed w-full top-0 z-[1000] bg-white/20 shadow-lg ring-1 ring-white/5 backdrop-filter backdrop-blur-sm">
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

                            <div className="font-extrabold text-xs lg:text-xl gradient-text">
                                OAU PGSA
                            </div>
                        </div>
                    </NavLink>
                </NavigationMenu>

                <div className="hidden lg:flex font-extrabold">
                    <NavigationMenu>
                        <NavigationMenuList className="">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.links ? (
                                        <>
                                            <NavigationMenuTrigger>
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="flex border-0 flex-col items-start w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] gradient-text font-semibold backdrop-filter backdrop-blur-lg">
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
                                                            className={`${navigationMenuTriggerStyle()} text-wrap`}
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
                                                className={`${navigationMenuTriggerStyle()} text-wrap`}
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
                    <Menu
                        fill="aqua"
                        stroke="aquamarine"
                        onClick={toggleMenu}
                    />
                </div>
            </div>

            {isOpen && (
                <div>
                    <NavigationMenu className="max-w-full justify-start">
                        <NavigationMenuList className="flex flex-col items-start align-middle border-0 ">
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
                                                    <AccordionContent className="flex flex-col gap-2 p-0 text-ellipsis overflow-hidden font-semibold">
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
                                                                        className={`${navigationMenuTriggerStyle()} text-wrap text-ellipsis overflow-hidden`}
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
                                                className={`${navigationMenuTriggerStyle()} text-sm text-wrap text-ellipsis overflow-hidden`}
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
