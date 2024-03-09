import { FC } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Register from './pages/Register';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from './pages/Login';
import { ProvideAuth } from './commons/use-auth';


const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> }
    ],
  },
]);

const App: FC = () => {
  return (
    <>
      <ProvideAuth>
        <RouterProvider router={router} />
      </ProvideAuth>
    </>
  );
};

export default App;