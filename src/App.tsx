import { FC } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from './pages/Login';
import { ProvideAuth } from './commons/use-auth';
import ChatBoxHeader from './components/chatBox/ChatBoxHeader';
import ChatBoxPage from './pages/ChatBox';



const Layout: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)
  return (
    <>
      {currentPath === '/chat' && <ChatBoxHeader/>}
      {currentPath !== '/chat' && <Header/>}
      <Outlet />
      {currentPath !== '/chat' && <Footer />}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/chat', element: <ChatBoxPage /> }
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