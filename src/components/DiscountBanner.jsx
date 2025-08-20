import React from "react";

const DiscountBanner = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#362f2a",
      padding: "24px 36px",
      borderRadius: "40px",
      fontFamily: "Poppins",
      boxShadow: "0 0 12px 4px rgba(250, 232, 213, 0.4)",
      maxWidth: "900px",
      margin: "0 auto 90px auto",
      flexWrap: "wrap",
      gap: "20px",
    },
    textContent: {
      color: "#fef6e4",
      flex: 1,
      width: "50%",
    },
    heading: {
      margin: 0,
      fontSize: "28px",
      fontWeight: 500,
      color: "#FFD48E",
      fontFamily: "Poppins",
    },
    paragraph: {
      fontSize: "28px",
      color: "#ffffff",
      fontWeight: 900,
      fontFamily: "'Zurich Extra Black'",
    },
    form: {
      width: "50%",
      display: "flex",
      alignItems: "center",
      borderRadius: "30px",
      overflow: "hidden", // ensures pill look
      backgroundColor: "#fff",
    },
    input: {
      flex: 1,
      border: "none",
      padding: "16px 20px",
      fontSize: "1rem",
      outline: "none",
      borderTopLeftRadius: "30px",
      borderBottomLeftRadius: "30px",
    },
    button: {
      backgroundColor: "#EA6B1E",
      color: "#ffffff",
      border: "none",
      padding: "16px 28px",
      fontSize: "1rem",
      fontWeight: 600,
      fontFamily: "Poppins",
      borderRadius: "40px",
    
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
 buttonHover: {
  background: "linear-gradient(to right, #f26a1b, #8e0038)",
  color: "#ffffff",
},

  };

  return (
    <div style={styles.container}>
      <div style={styles.textContent}>
        <h2 style={styles.heading}>Subscribe to Kutoot</h2>
        <p style={styles.paragraph}>To get exclusive benefits!</p>
      </div>

      <form className="subscribe-form" onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Email Address"
          required
          style={styles.input}
        />
      <button
  type="submit"
  style={styles.button}
  onMouseEnter={(e) => {
    e.target.style.background = styles.buttonHover.background;
    e.target.style.color = styles.buttonHover.color;
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "#EA6B1E";
    e.target.style.color = "#ffffff";
  }}
>
  Subscribe
</button>

      </form>
    </div>
  );
};

export default DiscountBanner;
