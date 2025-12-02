import './productlist.css'
import Product from "../product/Product"
import { projects } from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          These are my actual projects I made while studying in Kodego Bootcamp.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList

