/* eslint-disable @typescript-eslint/no-explicit-any */
import { TriangleAlert } from "lucide-react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as any;
    console.error(error);

    const navigate = useNavigate();

    return (
        <div
            id="error-page"
            className="flex flex-col items-center justify-center h-screen relative z-50 gap-8"
        >
            <TriangleAlert size={48} />
            <h1 className="text-4xl font-bold mb-4">Oops!</h1>
            <p className="text-lg mb-2">
                Sorry, an unexpected error has occurred.
            </p>
            <p className="text-sm">
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={() => navigate('/')} className="bg-background hover:bg-white hover:text-purple-400 text-white font-bold py-2 px-4 rounded">
                Go to Homepage
            </button>
        </div>
    );
}
