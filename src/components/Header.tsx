"use client";

import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "./ui/toggle-theme";
import { LuMenu } from "react-icons/lu";

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
                href: "https://docs.google.com/forms/d/e/1FAIpQLSe1_rMRH4gPIi-JonVGVC7mlXf_1dnv6Vwy0Dn6LMoa2OubCQ/viewform?usp=sf_link",
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
        <nav className="bg-background p-2 md:py-3 font-san sticky top-0 z-[1000]">
            <div className="md:container flex items-center justify-between">
                <NavigationMenu>
                    <Link href="/" passHref>
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
                    </Link>
                </NavigationMenu>

                <NavigationMenu>
                    <ModeToggle />
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
                                            <NavigationMenuContent className="flex flex-col w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                                                {item.links.map((link) => (
                                                    <Link
                                                        href={link.href}
                                                        passHref
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
                                                    </Link>
                                                ))}
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={`${navigationMenuTriggerStyle()} bg-transparent neon-border text-wrap`}
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="lg:hidden" onClick={toggleMenu}>
                    <LuMenu className="h-6 w-6" />
                </div>
            </div>

            {isOpen && (
                <div>
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col items-start align-middle">
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
                                                    <AccordionContent className="flex flex-col gap-2 p-0">
                                                        {item.links.map(
                                                            (link) => (
                                                                <Link
                                                                    href={
                                                                        link.href
                                                                    }
                                                                    passHref
                                                                    key={
                                                                        link.text
                                                                    }
                                                                >
                                                                    <NavigationMenuLink
                                                                        className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-violet-300 text-wrap`}
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        {
                                                                            link.text
                                                                        }
                                                                    </NavigationMenuLink>
                                                                </Link>
                                                            )
                                                        )}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-violet-300 text-sm text-wrap`}
                                                onClick={toggleMenu}
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
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
