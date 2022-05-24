import "./styles.css";

export default function Maincard() {
  return (
    <div className="details">
      <ul className="list">
        <li>
          Feels like : <span id="feels-like">10</span>°
        </li>
        <li>
          Humidity : <span id="humidity">3</span>%
        </li>
        <li>
          Wind : <span id="wind-speed">50</span> m/s
        </li>
      </ul>
      <div className="row">
        <div className="col city">
          <span id="current-city">Bruxelles</span>

          <div id="current-temp">20°C</div>

          <span id="description">Cloudy</span>
          <span>
            <img
              id="current-emoji"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="emoji"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
