import "./Country.css";
export default function Country({ country }) {
  const { name, flags, population, capital, area, cca3 } = country;
  console.log(country);
  return (
    <div className="country">
      <h3>{name.common}</h3>
      <img src={flags.png} height={"50px"} alt="" />
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>
        <small>Capital: {capital}</small>
      </p>
      <p>
        <small>Code: {cca3}</small>
      </p>
    </div>
  );
}
