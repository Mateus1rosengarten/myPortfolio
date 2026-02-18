import { NavLink } from "react-router-dom";

function NavLinkItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` fs-5 font-primary fs-6 text-decoration-none text-brand 
        ${isActive && "fw-semibold text-decoration-underline"}
        `
      }
    >
      {children}
    </NavLink>
  );
}

export default NavLinkItem;
