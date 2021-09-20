const Image = ({ src, alt }) => {
  return <img src={`http://localhost:1337${src}`} alt={alt} />;
};

export default Image;
