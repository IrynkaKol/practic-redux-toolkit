import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

export const LayoutLog = () => {
  return (
    <div>
      <AppBar />

      
      <Outlet />
    </div>
  );
};
