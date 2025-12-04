import "./product.css";

const Product = ({ img, desc, onClick }) => {
  return (
    // <div className="p">
    //   <div className="p-browser">
    //     <div className="p-circle"></div>
    //     <div className="p-circle"></div>
    //     <div className="p-circle"></div>
    //   </div>
    //   <img src={img} alt="" className="p-img" />
    // </div>
    <div onClick={onClick}>
      <img src={img} alt="" className="image" />
      <span>{desc}</span>
    </div>
  );
};

export default Product;
