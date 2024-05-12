import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { pageData } from "./pageData";
import { BackgroundGradient } from "./ui/background-gradient";

const AimsAndObjectives = () => {
    return (
        <BackgroundGradient>
            <Card className="shadow-lg md:font-medium bg-none">
            <CardHeader>
                <CardTitle className="font-extrabold text-xl gradient-text">
                    Vision
                </CardTitle>
            </CardHeader>

            <CardContent>
                <CardDescription>
                    {pageData.aimsAndObjectives.title}
                </CardDescription>
                <Accordion type="single" collapsible className="w-full pb-4">
                    {pageData.aimsAndObjectives.aims.map((aim) => (
                        <AccordionItem
                            className="py-1"
                            key={aim.id}
                            value={`${aim.id}`}
                        >
                            <AccordionTrigger className="text-left hover:no-underline text-sm font-medium">
                                {aim.description}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm">
                                {aim.text}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <CardDescription>
                    {pageData.aimsAndObjectives.extraText}
                </CardDescription>
            </CardContent>
        </Card>
        </BackgroundGradient>

    );
};

export default AimsAndObjectives;
