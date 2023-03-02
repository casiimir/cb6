import "./index.css";

const ImageProduct = ({ product, setSingleProductModal }) => {
  return (
    <div className="ImageProduct">
      <div
        className="ImageProduct__overlay"
        onClick={() => setSingleProductModal(null)}
      ></div>
      <img src={product.images[0]} alt={product.title} />
    </div>
  );
};

export default ImageProduct;
