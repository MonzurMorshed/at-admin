import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin//profile/Profile';
import UpdateProfile from '../components/admin/profile/UpdateProfile';
import Category from '../components/admin/category/Category';
import ViewCategory from '../components/admin/category/ViewCategory';
import EditCategory from '../components/admin/category/EditCategory';
import AddProduct from '../components/admin/product/AddProduct';
import ViewProduct from '../components/admin/product/ViewProduct';
import EditProduct from '../components/admin/product/EditProduct';
import Order from '../components/admin/order/Order';
import Vendor from '../components/admin/vendor/Vendor';
import ViewVendor from '../components/admin/vendor/ViewVendor';
import EditVendor from '../components/admin/vendor/EditVendor';


const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/add-vendor', exact: true, name: 'vendor', component: Vendor },
    { path: '/admin/view-vendor', exact: true, name: 'ViewVendor', component: ViewVendor },
    { path: '/admin/edit-vendor/:id', exact: true, name: 'EditVendor', component: EditVendor },
    { path: '/admin/add-category', exact: true, name: 'Category', component: Category },
    { path: '/admin/view-category', exact: true, name: 'ViewCategory', component: ViewCategory },
    { path: '/admin/edit-category/:id', exact: true, name: 'EditCategory', component: EditCategory },
    { path: '/admin/add-product', exact: true, name: 'AddProduct', component: AddProduct },
    { path: '/admin/view-product', exact: true, name: 'ViewProduct', component: ViewProduct },
    { path: '/admin/edit-product/:id', exact: true, name: 'EditProduct', component: EditProduct },
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
    { path: '/admin/update-profile', exact: true, name: 'UpdateProfile', component: UpdateProfile },
    { path: '/admin/orders', exact: true, name: 'Order', component: Order },
];

export default routes;