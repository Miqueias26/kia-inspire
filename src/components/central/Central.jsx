import "./Central.css";
import Card from "../../utils/Card/Card";
import PropTypes from "prop-types";
import KiaEV09 from "../../assets/img/kia-ev09.png";
import KiaXceed from "../../assets/img/Kiaxceed.png";

const ModelsMarketing = ({ img, title }) => {
  return (
    <>
      <img src={img} alt={title} />
    </>
  );
};
ModelsMarketing.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Central = () => {
  return (
    <>
      <div className="MainCentral">
        <span>
          &nbsp;KIA MOVEMENT THAT ISPIRES.&nbsp;KIA MOVEMENT THAT ISPIRES.
          &nbsp;KIA MOVEMENT THAT ISPIRES.&nbsp;KIA MOVEMENT THAT ISPIRES.&nbsp;
        </span>
      </div>

      <div className="card-central">
        <Card />
      </div>

      <div className="marketing">
        <div className="marketing-content1">
          <p className="text-fix"> ELECTRIC FUTURE.</p>
          <ModelsMarketing img={KiaEV09} title="Kia EV-09 Img" />
          <p className="ev9">NEW KIA EV-09</p>
          <p className="price">* Prices start in 45.00,00$.</p>
          <a href="#" className="explore">
            Explore
          </a>
        </div>
      </div>

      <div className="marketing2">
        <div className="marketing-content2">
          <p className="text-fix"> ADVENTURE DESIGN.</p>
          <ModelsMarketing img={KiaXceed} title="Kia Xceed" />
          <p className="xceed">NEW KIA XCEED</p>
          <p className="price2">* Prices start in 29.00,00$.</p>
          <a href="#" className="explore2">
            Explore
          </a>
        </div>
      </div>
    </>
  );
};

export default Central;
