import Members from "./Member";
import Login from "./Login";
import Register from "./Register";

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

    //{ path: '/about', component: About },
    //{ path: '/contact', component: Contact },
];

export default routes;