import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './screens/Search';
import Details from './screens/Details';
import NotFound from './screens/NotFound';
import NormalizeStyles from './shared/NormalizeStyles';

const router = createBrowserRouter([
  {
    path: '/details',
    element: <Details />,
  },
  {
    path: '/',
    element: <Search />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <NormalizeStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
