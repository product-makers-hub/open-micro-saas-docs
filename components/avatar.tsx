export const Avatar = ({ src }) => {
  const avatarStyle = {
    display: "inline-block",
    marginTop: "20px",
    width: "100px", // Adjust size as needed
    height: "100px", // Adjust size as needed
    borderRadius: "50%",
    backgroundColor: "#f2f2f2", // Neutral background color
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "2px solid #ccc", // Neutral border color
  };

  return <div style={avatarStyle} />;
};
