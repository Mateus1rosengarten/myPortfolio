function NavLinkItem({ to, children }) {
  const handleScroll = () => {
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <span
      onClick={handleScroll}
      className="fs-5 font-primary text-decoration-none text-brand cursor-pointer"
    >
      {children}
    </span>
  );
}

export default NavLinkItem;
