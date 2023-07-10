const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <img src="logo512.png" alt="" width={50} height={50} />
        <p>Copyright &copy; {footerYear} all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
