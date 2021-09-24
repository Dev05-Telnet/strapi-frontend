const Image = ({ src, alt }) => {
  return <img src={process.env.REACT_APP_URL + src} alt={alt} />;
};

export default Image;
