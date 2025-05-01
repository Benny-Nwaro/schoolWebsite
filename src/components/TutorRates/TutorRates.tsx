import "./tutorRate.styles.scss";
const TutorRates = ({ hourlyRate }: { hourlyRate: number }) => {
  return (
    <div className="about_tutor tutor_info_container tutor_rates">
      <h1>Rates</h1>
      <div className="tutor_rates_container">
        <div className="rate_row">
          <span>Hourly rate</span>
          <span className="price">$ {(hourlyRate / 100).toFixed(1)}</span>
        </div>
        <div className="rate_row">
          <span>Combo rates</span>
          <span className="price">5h: $120</span>
          <span className="price">10h: $320</span>
        </div>
        <div className="rate_row">
          <span>Student's Location</span>
          <span className="price">Negotiable</span>
        </div>
        <div className="rate_row">
          <span>My Location</span>
          <span className="price">1h: $ 12</span>
        </div>
      </div>
    </div>
  );
};

export default TutorRates;
