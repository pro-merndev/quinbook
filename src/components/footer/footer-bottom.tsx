const FooterBottom = () => {
  return (
    <div className="bg-primary text-white text-sm py-6">
      <div className="container">
        <div className="sm:flex justify-between items-center">
          <p>© 2024 — Copyright</p>
          <div className="flex items-center gap-6 max-sm:mt-3">
            <a href="">Datenschutzerklärung</a>
            <a href="">Impressum</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
