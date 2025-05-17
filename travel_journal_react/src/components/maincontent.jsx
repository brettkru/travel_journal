export default function Entry(props) {
  return (
    <article className="entry-overall-container">
      <div className="entry-img">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="entry-text">
        <p className="text-location">
          <img src="src/assets/marker.png" alt="marker" />
          <span> {props.country} </span>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </p>
        <h1 className="text-title">{props.title}</h1>
        <h3 className="text-date"> {props.date}</h3>
        <p className="text-description">{props.text}</p>
      </div>
    </article>
  );
}
