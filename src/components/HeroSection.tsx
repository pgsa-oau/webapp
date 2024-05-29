import React from "react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
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
        <Card className="text-pretty md:text-base md:font-medium md:leading-normal md:w-3/5 border-none shadow-none">
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
