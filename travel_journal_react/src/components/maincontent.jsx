export default function Entry() {
  return (
    <article className="entry-overall-container">
      <div className="entry-img">
        <img
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="image of mount fuji"
        />
      </div>
      <div className="entry-text">
        <p className="text-location">
          <img src="src/assets/marker.png" alt="marker" />
          <span> JAPAN </span>
          <a href="#">View on Google Maps</a>
        </p>
        <h1 className="text-title">Mount Fuji</h1>
        <h3 className="text-date"> 12 Jan, 2021 - 24 Jan, 2024</h3>
        <p className="text-description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
