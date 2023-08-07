import debounce from "lodash.debounce"
import { useCallback, useState } from "react"


export const useDebounce = (value, fn, delay=400) => {

    const [debounced, setDebounced] = useState(value)

    const optimisationSearch = useCallback(debounce(value =>  fn(value),delay),[])

    const onChangeSearch = (e) => {
        setDebounced(e.target.value)
        optimisationSearch(e.target.value)
   }

   const clearSearch = () => {
    setDebounced('')
    fn('')
   }

   return {debounced, onChangeSearch, clearSearch}

}