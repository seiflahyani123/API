import { Link } from 'react-router-dom'


const NavUsers = ({ aa, setAa }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>

        {aa ? (
          <>
            <li className="nav-item">
              <Link to="/users">Users</Link>
            </li>
            <li className="nav-item action" onClick={() => setAa(false)}>
              Logout
            </li>
          </>
        ) : (
          <li className="nav-item action" onClick={() => setAa(true)}>
            Login
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavUsers
