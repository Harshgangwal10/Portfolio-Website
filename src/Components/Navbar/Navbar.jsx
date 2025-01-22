import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuVisible, setMenuVisible] = useState(false);
  const menuref = useRef();

  const openmenu = () => {
    setMenuVisible(true);
    menuref.current.style.top = "0";
  };
  const closemenu = () => {
    setMenuVisible(false);
    menuref.current.style.top = "-850px";
  };
//   return (
//     <div className="navbar">
//       <h1>
//         <span>
//           Harsh
//           <br /> Gangwal
//         </span>
//       </h1>

//       <img src={menu_open} onClick={openmenu} alt="" className="nav-open" />

//       <ul ref={menuref} className="nav-menu">
//         <img
//           src={menu_close}
//           onClick={closemenu}
//           alt=""
//           className="nav-close"
//         />
//         <li>
//           {" "}
//           <AnchorLink className="anchor-link" href="#home">
//             {" "}
//             <p onClick={() => 
//               {
//                 setMenu("home");
//                 closemenu(); 
              
//               }}
                
//                 >Home </p>{" "}
//           </AnchorLink>{" "}
//           {menu === "home" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           {" "}
//           <AnchorLink className="anchor-link" offset={50} href="#about">
//             {" "}
//             <p onClick={() => {
//              setMenu("about");
//              closemenu();

//             }}
            
//             >About</p>{" "}
//           </AnchorLink>{" "}
//           {menu === "about" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           {" "}
//           <AnchorLink className="anchor-link" offset={50} href="#skills">
//             {" "}
//             <p onClick={() =>{
//                setMenu("skills");
//                closemenu();
              
//               }} 
              
//              > Skills</p>{" "}
//           </AnchorLink>{" "}
//           {menu === "skills" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           {" "}
//           <AnchorLink className="anchor-link" offset={50} href="#project">
//             {" "}
//             <p onClick={() => {
//               setMenu("project");
//               closemenu();
            
//             }} 
//             >Project</p>{" "}
//           </AnchorLink>{" "}
//           {menu === "project" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           {" "}
//           <AnchorLink className="anchor-link" offset={50} href="#contact">
//             {" "}
//             <p onClick={() =>{
//              setMenu("contact");
//              closemenu();
//             }} 
//             >Contact</p>{" "}
//           </AnchorLink>{" "}
//           {menu === "contact" ? <img src={underline} alt="" /> : <></>}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

return (
  <div className="navbar">
    <h1>
      <span>
        Harsh
        <br /> Gangwal
      </span>
    </h1>

    {/* Menu open button */}
    {!menuVisible && (
      <img src={menu_open} onClick={openmenu} alt="Open Menu" className="nav-open" />
    )}

    {/* Navigation Menu */}
    <ul ref={menuref} className="nav-menu">
      {/* Menu close button */}
      <img
        src={menu_close}
        onClick={closemenu}
        alt="Close Menu"
        className="nav-close"
      />
      {/* Menu items */}
      <li>
        <AnchorLink className="anchor-link" href="#home">
          <p
            onClick={() => {
              setMenu("home");
              closemenu();
            }}
          >
            Home
          </p>
        </AnchorLink>
        {menu === "home" && <img src={underline} alt="" />}
      </li>
      <li>
        <AnchorLink className="anchor-link" offset={50} href="#about">
          <p
            onClick={() => {
              setMenu("about");
              closemenu();
            }}
          >
            About
          </p>
        </AnchorLink>
        {menu === "about" && <img src={underline} alt="" />}
      </li>
      <li>
        <AnchorLink className="anchor-link" offset={50} href="#skills">
          <p
            onClick={() => {
              setMenu("skills");
              closemenu();
            }}
          >
            Skills
          </p>
        </AnchorLink>
        {menu === "skills" && <img src={underline} alt="" />}
      </li>
      <li>
        <AnchorLink className="anchor-link" offset={50} href="#project">
          <p
            onClick={() => {
              setMenu("project");
              closemenu();
            }}
          >
            Project
          </p>
        </AnchorLink>
        {menu === "project" && <img src={underline} alt="" />}
      </li>
      <li>
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p
            onClick={() => {
              setMenu("contact");
              closemenu();
            }}
          >
            Contact
          </p>
        </AnchorLink>
        {menu === "contact" && <img src={underline} alt="" />}
      </li>
    </ul>
  </div>
);
};

export default Navbar;
