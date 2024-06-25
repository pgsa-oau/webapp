import ContactUs from "../components/ContactUs";

const Contact = () => {
    return (
        <div className="md:container pt-20 flex w-full gap-4 z-50">
            <section className="font-medium w-full space-y-4 py-4 px-4 flex flex-col justify-between gap-4 md:gap-12">
                <div>
                    <div>
                        <div className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500">
                            Contact Us
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p>
                            We are always available to attend to your enquiries.
                            Please feel free to reach out to us.
                        </p>
                        <p>
                            You can contact us via the following options:
                        </p>
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Phone Contact:</strong>{" "}
                                    +2347050721579
                                </li>
                                <li>
                                    <strong>
                                        Speak with a postgraduate student:
                                    </strong>{" "}
                                    +2347050721579
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
