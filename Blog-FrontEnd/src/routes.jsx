import { PostDetail } from "./components/Posts/PostDetail";
import { Posts } from "./components/Posts/Posts";
import { NotFoundPage } from "./pages/NotFoundPage";

export const routes = [
    {
        path: '/',
        element: <Posts />
    },
    {
        path: '/post/:id',
        element: <PostDetail />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]