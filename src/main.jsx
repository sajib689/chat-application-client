
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router';
import { store } from './store/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
)
