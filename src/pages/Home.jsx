import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>🎉 Welcome to Your Dashboard</h1>
        <p className="subtitle">Explore features, manage your account, and more.</p>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>🔒 Secure Access</h3>
          <p>Your data is protected with industry-standard encryption.</p>
        </div>
        <div className="feature-card">
          <h3⚡ Fast Performance</h3>
          <p>Enjoy a smooth and responsive experience across all devices.</p>
        </div>
        <div className="feature-card">
          <h3>🌐 Global Reach</h3>
          <p>Access your account from anywhere in the world.</p>
        </div>
      </div>

      <div className="cta-section">
        <p>Ready to get started?</p>
        <button>Explore Now</button>
      </div>
    </div>
  );
}
