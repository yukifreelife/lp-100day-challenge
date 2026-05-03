import Card from "./Card.jsx";
import IconImg from "./IconImg.jsx";

function ServiceCard({ service, className = "" }) {
  return (
    <Card className={`service-card ${className}`.trim()}>
      <div className="service-card__icon">
        <IconImg src={service.icon} alt="" className="service-card__icon-img" decorative />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__text">{service.text}</p>
    </Card>
  );
}

export default ServiceCard;
