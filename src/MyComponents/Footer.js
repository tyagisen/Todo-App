export const Footer = () => {
  let footerStyle = {
    backgroundColor: "#3a679d",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "17px",
  }
  return (
    <div className="footer" style={footerStyle}>
    <div className="footer-detail">
      <p>Tyagi Sen © All Rights Reserved</p>
    </div>
    <div className="my-address">
      <address>
        <i className="far fa-map-marker-check"></i> Inaruwa 7, Sunsari Nepal
      </address>
    </div>
  </div>
  );
};


