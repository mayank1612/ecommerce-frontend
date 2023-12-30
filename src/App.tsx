import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/loader";

const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const Search = lazy(() => import("./pages/search"));

// Admin routes
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Products = lazy(() => import("./pages/admin/products"));
const Customers = lazy(() => import("./pages/admin/customers"));
const Transaction = lazy(() => import("./pages/admin/transaction"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/transactionmanagement")
);

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/product",
    element: <Products />,
  },
  {
    path: "/admin/customer",
    element: <Customers />,
  },
  {
    path: "/admin/transaction",
    element: <Transaction />,
  },
  // Charts
  {
    path: "/admin/chart/bar",
    element: <Barcharts />,
  },
  {
    path: "/admin/chart/pie",
    element: <Piecharts />,
  },
  {
    path: "/admin/chart/line",
    element: <Linecharts />,
  },
  // Apps
  {
    path: "/admin/app/coupon",
    element: <Coupon />,
  },
  {
    path: "/admin/app/stopwatch",
    element: <Stopwatch />,
  },
  {
    path: "/admin/app/toss",
    element: <Toss />,
  },
  // Management
  {
    path: "/admin/product/new",
    element: <NewProduct />,
  },
  {
    path: "/admin/product/:id",
    element: <ProductManagement />,
  },
  {
    path: "/admin/transaction/:id",
    element: <TransactionManagement />,
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
