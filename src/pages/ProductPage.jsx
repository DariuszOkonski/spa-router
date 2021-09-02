import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../components/Product'

const ProductPage = (props) => {
    console.log(props)
    return (  
        <>
            <div>Strona produktu</div>
            <Product {...props.match.params} />
            <Link to="/products">Powrot do listy produktów</Link>
        </>
    );
}
 
export default ProductPage;