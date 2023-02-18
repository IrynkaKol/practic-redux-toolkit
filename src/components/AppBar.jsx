import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';



export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '1px solid black',
        marginBottom: 15,
      }}
    >
      <nav>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        
      </nav>
      {isLoggedIn && <UserMenu/>}
      
    </header>
  );
};
