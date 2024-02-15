// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="Header">
    <div className="MainContainer">
      <div className="Mobile-Logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt=" website logo"
        />
        <button type="button" className="Mobile-Logout">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
            alt="nav logout"
          />
        </button>
      </div>

      <div className="LargeContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt=" website logo"
        />
        <ul className="headerElements">
          <li className="home">HOME </li>
          <li className="products">PRODUCTS </li>
          <li className="cart">CART </li>
        </ul>
        <button type="button" className="Mobile-Logout">
          logout
        </button>
      </div>
    </div>
    <div className="MobileContainer">
      <ul className="MobileElements">
        <li className="Home">
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            src=" nav home"
          />
        </li>
        <li className="Home">
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            src=" nav products"
          />
        </li>
        <li className="Home">
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
            src="nav cart"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
