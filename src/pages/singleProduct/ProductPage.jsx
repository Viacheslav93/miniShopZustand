import styles from './ProductPge.module.scss'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useCartStore, useProdcutsStore } from '../../store/store'
import { Carousel } from '../../components/carousel/Carousel'


export const ProductPage = () => {

    const params = useParams()

    const {product, error, getSingleProduct} = useProdcutsStore()
    const {addToCart} = useCartStore()

    useEffect(() => {
        getSingleProduct(params.id)
    }, [])

    const {images, title, price, description, category} = product

    const addProductToCart = () => {
        addToCart({...product, count:1})
    }
console.log(product.images);
  return (

    <div className={`container ${styles.product}`}>
        {error && error}
         <Carousel className={styles.image}>
           {images}
        </Carousel>
        <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.price}>${price}</p>
            <p>{description}</p>
            <p className={styles.category}>category: <span>{category?.name}</span> </p>
            <button onClick={addProductToCart} className={styles.button}>Add to Cart</button>
        </div>
    </div>
  )
}
