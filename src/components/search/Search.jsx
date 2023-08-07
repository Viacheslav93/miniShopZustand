import styles from './Search.module.scss'

import {Field} from '../UI/input/Field'
import { useProdcutsStore } from '../../store/store'
import { useDebounce } from '../../hooks/debounce'


export const Search = () => {

    const {search, searchProduct} = useProdcutsStore()

    const {debounced, onChangeSearch, clearSearch} = useDebounce(search, searchProduct)

  return (

    <div className={styles.wrapper}>
        <Field 
            value={debounced}
            onChange={onChangeSearch}     
            placeholder = 'Search...'  
            name='search'
        />
        {search.length > 0 &&
          <button onClick={clearSearch}  className={styles.close}> x </button>
        }
    </div>
  )
}
