import React from "react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TextGenerateEffect } from "./ui/text-generate-effect";

interface HeroSectionProps {
    title: string;
    description: string;
    buttonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    buttonText,
}) => {
    return (
        <Card className="shadow-lg bg-none bg-transparent md:w-1/2 text-pretty md:text-base md:font-medium md:leading-normal md:hover:scale-105">
            <CardHeader>
                <CardTitle className="font-extrabold text-xl gradient-text">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <TextGenerateEffect words={description} />
            </CardContent>
            {buttonText && <Button>{buttonText}</Button>}
        </Card>
    );
};

export default HeroSection;
