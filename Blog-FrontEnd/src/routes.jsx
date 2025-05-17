import { Posts } from "./components/Posts/Posts";
import { AuthPage } from "./pages/Auth/AuthPage";
import { FeedPage } from "./pages/Feed/FeedPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";

export const routes = [
    {
        path: '/',
        element: <AuthPage />
    },
    {
        path: '/feed',
        element: <FeedPage />,
        children: [
            {
                index: true,
                element: <p>Bienvenido al feed, selecciona una opción</p>
            },
            {
                path: 'posts',
                element: <Posts />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]