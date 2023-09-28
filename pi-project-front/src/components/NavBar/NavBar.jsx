import './NavBar.css';
import logo from '../../assets/imgs/logo-univesp.png';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const navBarList = [
    {
      description: 'Cadastro',
      address: '/cadastro',
    },
    {
      description: 'Sobre',
      address: '/sobre',
    },
  ];

  return (
    <nav className="nav-bar">
      <NavLink to="/">
        <img src={logo} to="/" />
      </NavLink>
      <div className="list">
        {navBarList.map((item, i) => (
          <NavLink className="link" key={i} to={item.address}>
            {item.description}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
