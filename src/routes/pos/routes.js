import PosDashboard from '../../components/admin/pos/PosDashboard';
import Sale from '../../components/admin/pos/Sale';
import Inventory from '../../components/admin/pos/Inventory';
import History from '../../components/admin/pos/History';
import Promos from '../../components/admin/pos/Promos';
import Premium from '../../components/admin/pos/Premium';

const routes = [
    { path: '/pos', exact: true, name: 'PosDashboard', component: PosDashboard },
    { path: '/pos/sales', exact: true, name: 'Sale', component: Sale },
    { path: '/pos/inventory', exact: true, name: 'Inventory', component: Inventory },
    { path: '/pos/history', exact: true, name: 'History', component: History },
    { path: '/pos/promos', exact: true, name: 'Promos', component: Promos },
    { path: '/pos/premium', exact: true, name: 'Premium', component: Premium },
];

export default routes;