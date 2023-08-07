import styles from './Page.module.scss'

import { useEffect, useState } from 'react'

import { useProdcutsStore } from '../../store/store'


export const Pagination = () => {

    let {productLimit, pages, countPages, getProductsLength, productsLength, curPage, changePage} = useProdcutsStore()

    useEffect(() => {
      getProductsLength()
    }, [])

    let totalPage = Math.ceil(productsLength?.length/productLimit) 
    const pagesNum = []

    for(let i = 0; i < totalPage; i++){
      pagesNum.push(i + 1)
  }

  const prevButton = () => {
    changePage(curPage-1)
    countPages(pages - productLimit) 
  }
  const nextButton = () => {
    countPages(pages + productLimit) 
    changePage(curPage+1)
  }
console.log(curPage);
  return (
    <div className={`container ${styles.buttons}`}>
       <button 
          className={pages <=0 ? styles.disabled : ''} 
          onClick={prevButton}
          >prev
        </button>

        <div className={styles.btnNumber}>
           {pagesNum?.map(number => {
               return  <button 
                         key={number}
                          className={`${curPage === number ? styles.active : ''}`}
                       >
                        {number}
                      </button>
             }
          )}
       </div>

       <p className={styles.numberOf}> {curPage} of {totalPage} </p>
       
       <button 
          className={curPage === totalPage ? styles.disabled : ''} 
          onClick={nextButton}
          >next
       </button>
  </div>
  )
}
