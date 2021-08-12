const Header = () => {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">UFODATA Shop</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            Best UFO Alien accessories
          </p>
        </div>

        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img
              src="hero.jpg"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
