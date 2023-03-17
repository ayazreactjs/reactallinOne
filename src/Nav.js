import navData from './navData'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
const Nav = () => {
  return (
    <nav>
      <div className="navCenter">
        <div className="navHeader">
          <Link to="/" className="logo">
            LOGO
          </Link>
          <div className="navToggle">
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="navLinkContainer">
          <div className="navLinks">
            {navData.map(({ id, link, text }) => {
              return (
                <li key={id}>
                  <Link to={link} className="myLink">
                    {text}
                  </Link>
                </li>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav
