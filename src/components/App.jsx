import { Routes, Route, Navigate } from 'react-router-dom';
//import { LoginPage, DashboardPage } from 'pages';
import { LayoutLog } from './LayoutLog';

import { LoginPage, DashboardPage } from 'pages';
import { Layout } from './Layout';



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutLog />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
