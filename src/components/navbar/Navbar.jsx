import { useState } from "react";
import "./navbar.scss";


function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>Real Estate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          <a href="/">Signin</a>
          <a href="/" className="signup">Signup</a>
          <div className="menuIcon" onClick={()=>setOpen(prev=>!prev)}>
            <img src="/menu.png" alt="" />
          </div>
          <div className={open? "menu active": "menu"}> 
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Signin</a>
          <a href="/">signup</a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
