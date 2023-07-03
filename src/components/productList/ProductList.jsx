import './productlist.css'
import Product from "../product/Product"
import { projects } from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Minima accusamus, aut id quisquam voluptate possimus ipsum 
          eum consectetur repudiandae aliquam necessitatibus unde fuga recusandae 
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