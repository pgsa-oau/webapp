import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card";

import emailjs from "@emailjs/browser";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10),
});

const ContactUs = () => {
    const [feedback, setFeedback] = useState("");
    const [feedbackType, setFeedbackType] = useState("success");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        emailjs
            .send("service_4aav2wz", "template_v3r9w5d", values, {
                publicKey: "NF3T84lHdWPXpR3zP",
            })
            .then(
                () => {
                    setFeedback("Message sent successfully!");
                    form.reset();
                },
                (error) => {
                    setFeedbackType("error");
                    setFeedback("Message failed to send! Please try again.");
                    console.error(error);
                }
            );
    }

    return (
        <Card className="bg-transparent">
            <CardHeader>
                <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                    Reach out to us today!
                </CardTitle>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-3"
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="first name last name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="youremail@email.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Type your message here."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {feedback &&
                            (feedbackType === "success" ? (
                                <div className="text-green-500">{feedback}</div>
                            ) : (
                                <div className="text-red-500">{feedback}</div>
                            ))}

                        <Button variant='outline' size='lg' type="submit" className="text-white font-semibold">Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default ContactUs;
