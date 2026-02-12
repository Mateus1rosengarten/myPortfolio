import { Button } from "react-bootstrap";

function AppButton({ children, onClick, href, className }) {
  return (
    <Button
      style={{
        minWidth: "160px",
      }}
      variant="none"
      onClick={onClick}
      as={href ? "a" : "button"}
      href={href}
      className="mt-3 bg-color-brand text-white px-0 py-2 flex-fill font-secondary shadow text-nowrap btn-motion"
    >
      {children}
    </Button>
  );
}

export default AppButton;
