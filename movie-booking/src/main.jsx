import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './assets/css/BaiTapBookingTicket.css';

import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  // Sửa ở đây: bỏ 'React.'
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode> // Sửa ở đây
);