import { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { isDark } = false;

  return (
    <footer className={`py-4 mt-auto ${isDark ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="container text-center">
        <p className="small mb-0">E-Commerce @2025</p>
      </div>
    </footer>
  );
};

export default Footer;