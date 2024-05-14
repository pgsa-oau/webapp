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
        <section className="font-medium space-y-4 relative z-50 text-white md:min-h-[87vh] py-4">
            <Card className="bg-transparent">
                <CardHeader>
                    <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
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
                                <strong>Phone Contact:</strong> +2348164031725
                            </li>
                            <li>
                                <strong>Administrators:</strong> +2347038675918
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
    );
};

export default Contact;
