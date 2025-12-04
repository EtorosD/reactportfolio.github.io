import "./productlist.css";
import Product from "../product/Product";
import { projects } from "../../data";
import { useState } from "react";

const ProductList = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Sample Modules</h1>
        <p className="pl-desc">
          These are some of my work in my previous company
        </p>
      </div>

      <div className="container">
        {projects.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            desc={item.desc}
            onClick={() => setSelectedImg(item.img)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default ProductList;
