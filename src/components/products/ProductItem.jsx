import styles from './Product.module.scss'

import { Link } from 'react-router-dom'

import { useCartStore } from '../../store/store'


export const ProductItem = ({id, title,price, category: {name}, images}) => {

  const {addToCart} = useCartStore()

  const addProductToCart = () => {
    const product = {id,title, price,images, count:1}
    addToCart(product)
  }

  return (

    <div className={styles.card}>
      <div className={styles.topBlock} ></div>
      <h2 className={styles.title}>{title.length > 13 ? title.slice(0,13) + '...' : title}</h2>
      <div className={styles.body}>
        <Link to={`/product/${id}`}>
          <div className={styles.image}>
            <img src={images[0]} alt="productImage" />
          </div>
        </Link>
        <div className={styles.details}>
          <p>${price}</p>
          <p>{name}</p>
        </div>
      </div>
      <button 
        onClick={addProductToCart} 
        className={styles.button} 
        > ADD TO CART</button>
    </div>
  )
}
