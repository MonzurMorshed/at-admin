import About from '../app/frontend/About';
import Contact from '../app/frontend/Contact';
import Page403 from '../app/components/errors/Page403';
import Page404 from '../app/components/errors/Page404';
import Register from '../app/frontend/auth/Register';
import Login from '../app/frontend/auth/Login';
import ViewCategory from '../app/frontend/collections/ViewCategory';
import ViewProduct from '../app/frontend/collections/ViewProduct';
import ProductDetail from '../app/frontend/collections/ProductDetail';
import Cart from '../app/frontend/Cart';
import Checkout from '../app/frontend/Checkout';
import Thankyou from '../app/frontend/Thankyou';

const publicRoutesList = [
    { path: '/', exact: true, name: 'Login', component: Login },
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/contact', exact: true, name: 'Contact', component: Contact },
    { path: '/403', exact: true, name: 'Page403', component: Page403 },
    { path: '/404', exact: true, name: 'Page404', component: Page404 },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/register', exact: true, name: 'Register', component: Register },
    { path: '/collections', exact: true, name: 'ViewCategory', component: ViewCategory },
    { path: '/collections/:slug', exact: true, name: 'ViewProduct', component: ViewProduct },
    { path: '/collections/:category/:product', exact: true, name: 'ProductDetail', component: ProductDetail },
    { path: '/cart', exact: true, name: 'Cart', component: Cart },
    { path: '/checkout', exact: true, name: 'Checkout', component: Checkout },
    { path: '/thank-you', exact: true, name: 'Thankyou', component: Thankyou },
];

export default publicRoutesList;