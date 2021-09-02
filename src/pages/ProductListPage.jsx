import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    products_h2: {        
            marginBottom: '20px',
    },
    products_ul: {
        listStyle: 'square',
        paddingLeft: '30px',
    },
    products_li: {
        marginBottom: '20px'
    },
    products_a: {
        textDecoration: 'none',
        color: '#333',
        '&:hover': {
            textDecoration: 'underline',
            color: 'black'
        }
    }
});


const products = ["car", "bike", "motocycle"]



const ProductListPage = () => {
    const classes = useStyles();
    
    const list = products.map(product => (
        <li key={product} className={classes.products_li}>
            <Link className={classes.products_a} to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    
    return (
        <div>
            <h2 className={classes.products_h2}>Lista produktów</h2>
            <div>
                <ul className={classes.products_ul}>
                    {list}
                </ul>
            </div>
        </div>  
    );
}
 
export default ProductListPage;