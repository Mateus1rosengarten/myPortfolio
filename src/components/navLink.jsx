import { NavLink } from "react-router-dom";

function NavLinkItem({ to, children, itsDark }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` fs-4 font-primary fs-6 text-decoration-none color-brand
        ${isActive && "fw-semibold text-decoration-underline"}
        `
      }
    >
      {children}
    </NavLink>
  );
}

export default NavLinkItem;
