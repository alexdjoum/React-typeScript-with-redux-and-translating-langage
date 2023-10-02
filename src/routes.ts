import Members from "./Member";
import Login from "./Login";
import Register from "./Register";
import StoreFront from "./StoreFront";
import StoreFront2 from "./StoreFront2";

const routes = [
    {
        path: '/members',
        component: Members
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/storefront',
        component: StoreFront
    },
    {
        path: '/storefront2',
        component: StoreFront2
    },
];

export default routes;