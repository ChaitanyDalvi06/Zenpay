// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { BarChart, Brain, ShoppingCart, Settings, User, LogOut, ChevronDown, CreditCard } from 'lucide-react';
// import './Navbar.css'; // Import the CSS file

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-brand">Slice</Link>
//         <div className="navbar-links">
//           <Link to="/advisor" className="navbar-link">
//             <Brain className="icon" />
//             AI Advisor
//           </Link>
//           <Link to="/payment" className="navbar-link">
//             <CreditCard className="icon" />
//             Payment
//           </Link>
//           <Link to="/buy-now" className="navbar-link">
//             <ShoppingCart className="icon" />
//             Buy Now
//           </Link>
//           <Link to="/" className="navbar-link">
//             <BarChart className="icon" />
//             Dashboard
//           </Link>
//           <div className="dropdown">
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="dropdown-toggle"
//             >
//               <Settings className="icon" />
//               Settings
//               <ChevronDown className="chevron" />
//             </button>
//             {isDropdownOpen && (
//               <div className="dropdown-menu">
//                 <button
//                   onClick={() => navigate('/profile')}
//                   className="dropdown-item"
//                 >
//                   <User className="icon" />
//                   Profile
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="dropdown-item"
//                 >
//                   <LogOut className="icon" />
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart, Brain, ShoppingCart, Settings, User, LogOut, ChevronDown, CreditCard } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // setShowIframe(true);
    navigate('/');
  };

  const handleNavigation = (path) => {
    setShowIframe(false);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setShowIframe(false);
    navigate('/login');
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-container">
          <span onClick={handleLogoClick} className="navbar-brand" style={{ cursor: 'pointer' }}>
          ZenPay 
          </span>
          <div className="navbar-links">
            <Link to="/advisor" className="navbar-link" onClick={() => handleNavigation('/advisor')}>
              <Brain className="icon" />
              AI Advisor
            </Link>
            <Link to="/payment" className="navbar-link" onClick={() => handleNavigation('/payment')}>
              <CreditCard className="icon" />
              Payment
            </Link>
            {/* <Link to="/buy-now" className="navbar-link" onClick={() => handleNavigation('/buy-now')}>
              <ShoppingCart className="icon" />
              Buy Now
            </Link> */}
            <Link to="/dashboard" className="navbar-link" onClick={() => handleNavigation('/dashboard')}>
              <BarChart className="icon" />
              Dashboard
            </Link>
            <div className="dropdown">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="dropdown-toggle"
              >
                <Settings className="icon" />
                Settings
                <ChevronDown className="chevron" />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <button
                    onClick={() => handleNavigation('/profile')}
                    className="dropdown-item"
                  >
                    <User className="icon" />
                    Profile
                  </button>
                  <button onClick={handleLogout} className="dropdown-item">
                    <LogOut className="icon" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {showIframe && (
        <div className="iframe-container">
          <iframe
            src="http://localhost:5175"
            style={{
              width: '100%',
              height: 'calc(100vh - 64px)', // Adjust height to fit your layout
              border: 'none',
            }}
            title="Slice Content"
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
