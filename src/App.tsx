
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page.tsx";
import Root from "./routes/root.tsx";
import HomePage from "./routes/home-page.tsx";
import NoticeBoard from "./routes/notice-board.tsx";
import NewsDetailsPage from "./routes/news-details.tsx";
import Contact from "./routes/contact-us.tsx";
import DevsPage from "./routes/devs.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
              path: "/board",
              element: <NoticeBoard />,
            },
            {
              path: "/board/:postId",
              element: <NewsDetailsPage />,
            },
            {
              path: "/contact_us",
              element: <Contact />,
            },
            {
              path: "devs",
              element: <DevsPage />,
            }

        ],
    },
]);


function App() {
    return <RouterProvider router={router} />;
}

export default App;
