import styles from './Product.module.scss'

import {shallow} from 'zustand/shallow'
import { useEffect } from 'react'

import { useProdcutsStore } from '../../store/store'
import {ProductItem} from './ProductItem'
import {Pagination } from '../pagination/Pagination'


export const Products = () => {

  const {loading, error, getAllProducts, products,search, limit, page} = useProdcutsStore((state) => ({
    loading: state.loading,
    error: state.error,
    getAllProducts: state.getAllProducts,
    products: state.products,
    search: state.search,
    limit: state.productLimit,
    page: state.pages,
  }), shallow)


  useEffect(() => {
    getAllProducts(search, limit, page)
  }, [search, limit, page])

  return (

    <div className={`container ${styles.products}`}>
       {loading 
        ? 
        <h3>Loading...</h3>
        :
        <>
          <div className='cards'>
          {error && error}
          { products?.map(product => <ProductItem key={product.id} {...product} />)}
          </div>
          <Pagination/>
        </>
      }
    </div>
  )
}
