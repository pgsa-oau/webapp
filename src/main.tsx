import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

storyblokInit({
    accessToken: "QM4p9Ut8JLy29QMTmvM2jwtt",
    use: [apiPlugin],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <>
            <App />
        </>
    </React.StrictMode>
);
