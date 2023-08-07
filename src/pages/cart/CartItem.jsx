import styles from './Cart.module.scss'

import { useCartStore } from '../../store/store'


export const CartItem = ({id, images, price, count}) => {

    const {removeFromCart} = useCartStore()

    const deleteProduct = () => {
        removeFromCart(id)
    }

  return (

    <div className={styles.card}>
      <div className={styles.image}>
        <img  src={images} alt="" />
      </div>
      <div className={styles.content}>
        <p className={styles.price}>price: ${price * count}</p>
        <p className={styles.count}>count: {count}</p>
        <button className={styles.button} onClick={deleteProduct}>delete</button>
      </div>
    </div>
  )
}
