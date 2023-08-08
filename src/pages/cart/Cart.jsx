import styles from './Cart.module.scss'

import React from 'react'

import { useCartStore } from '../../store/store'
import { CartItem } from './CartItem'


export const Cart = () => {

  const {cart} = useCartStore()

  const totalPrice = cart?.reduce((res, product) => res + (product.price * product.count), 0)

  return (
    
    <div className={`container ${styles.cart}`}>
      {cart?.length === 0 
      ?
      <h2 className={styles.title}>No added any products</h2>
      :
      <>
      <div className={`${styles.cards}`}>
         {cart?.map(item => <CartItem key={item.id} {...item} />)}
      </div>
      <p className={styles.totalPrice}>total price: ${totalPrice}</p>
      </>
      }
    </div>
  )
}
