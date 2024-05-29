import ContactUs from "../components/ContactUs";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card";

const Contact = () => {
    return (
        <div className="md:container pt-20 flex w-full gap-4 z-50">
            <section className="font-medium w-full space-y-4 py-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500">
                            Contact Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <CardDescription>
                            We are always available to attend to your enquiries.
                            Please feel free to reach out to us.
                        </CardDescription>
                        <CardDescription>
                            You can contact us via the following options:
                        </CardDescription>
                        <CardDescription>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Phone Contact:</strong>{" "}
                                    +2348164031725
                                </li>
                                <li>
                                    <strong>Administrators:</strong>{" "}
                                    +2347038675918
                                </li>
                                <li>
                                    <strong>
                                        Speak with a postgraduate student:
                                    </strong>{" "}
                                    +2347038675918
                                </li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                </Card>
                <ContactUs />
            </section>

            <section className="hidden md:flex justify-center items-center w-full py-4">
                <img
                    src="/images/contact_us.svg"
                    alt="Side Image"
                    className="h-full w-full rounded-xl object-contain"
                />
            </section>
        </div>
    );
};

export default Contact;
