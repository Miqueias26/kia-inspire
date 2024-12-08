import Header from "../components/header/Header";
import Central from "../components/central/Central";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div className="main-content">
        <Central />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
