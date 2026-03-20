import './ArtistStatement.css';

export default function ArtistStatement() {
  return (
    <section className="artist-statement-section">
      <div className="artist-statement-container">
        {/* Framed Statement Box */}
        <div className="statement-frame">
          <div className="frame-header">
            <span className="frame-line"></span>
            <span className="frame-label">COMMISSIONS</span>
            <span className="frame-line"></span>
          </div>

          <div className="frame-content">
            <p className="statement-text">
              Each portrait is a study in presence—an attempt to capture not only likeness, but something of the individual behind it.
            </p>
            <p className="artist-signature">Mark O'Keeffe</p>
            <a href="/commissions" className="commission-button">
              ENQUIRE ABOUT A COMMISSION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}