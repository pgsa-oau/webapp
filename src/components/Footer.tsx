'use client';
import React from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Card className="md:container flex flex-col gap-4 md:flex-row items-center align-middle justify-between py-4 md:py-10 text-primary z-[1000] border-0 shadow-none">
            <div className="flex flex-col md:flex-row justify-between items-center align-middle gap-4">
                <NavigationMenu className="neon-border">
                    <Link href="/#aboutUs" passHref>
                        About Us
                    </Link>
                </NavigationMenu>
                <NavigationMenu className="neon-border">
                    <Link href="/#aimsAndObjectives" passHref>
                        Aims and Objectives
                    </Link>
                </NavigationMenu>
                <NavigationMenu className="neon-border">
                    <Link href="/contact_us" passHref>
                        Contact Us
                    </Link>
                </NavigationMenu>
                <NavigationMenu className="neon-border">
                    <Link
                        href="/devs"
                        passHref
                        className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500"
                    >
                        Meet the Devs
                    </Link>
                </NavigationMenu>
            </div>
            <div>&copy; {year} OAU PGSA</div>
        </Card>
    );
};

export default Footer;
