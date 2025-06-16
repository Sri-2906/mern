export default function Home() {
  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(to right, #fceabb, #f8b500)",
    padding: "2rem",
    minHeight: "100vh",
    color: "#333",
  };

  const heroSection = {
    textAlign: "center",
    marginBottom: "2.5rem",
  };

  const subtitleStyle = {
    fontSize: "1.1rem",
    color: "#555",
  };

  const featuresSection = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "2rem",
  };

  const featureCard = {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "250px",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  const ctaSection = {
    textAlign: "center",
    marginTop: "3rem",
  };

  const buttonStyle = {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#ff6f61",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={heroSection}>
        <h1>🎉 Welcome to Your Dashboard</h1>
        <p style={subtitleStyle}>
          Explore features, manage your account, and more.
        </p>
      </div>

      <div style={featuresSection}>
        <div style={featureCard}>
          <h3>🔒 Secure Access</h3>
          <p>Your data is protected with industry-standard encryption.</p>
        </div>
        <div style={featureCard}>
          <h3>⚡ Fast Performance</h3>
          <p>Enjoy a smooth and responsive experience across all devices.</p>
        </div>
        <div style={featureCard}>
          <h3>🌐 Global Reach</h3>
          <p>Access your account from anywhere in the world.</p>
        </div>
      </div>

      <div style={ctaSection}>
        <p>Ready to get started?</p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e85c50")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6f61")}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}
