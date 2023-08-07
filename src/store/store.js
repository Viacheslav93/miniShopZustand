import { create } from "zustand";
import { persist, devtools,  } from "zustand/middleware";
import { productsData } from "../services/productService";


export const useProdcutsStore = create(devtools(set => ({
    products: [],
    product: {},
    productLimit: 10,
    pages: 0,
    filter: 'all',
    productsLength: 0,
    search: '',
    curPage:1,
    loading: false,
    error: null,
    getAllProducts: async (search, limit, page) => {
        set({loading: true})

        try {
            const res = await productsData.getAllProducts( search, limit, page)
            set({products: await res, error: null})
        } catch (error) {
            set({error: error.message})
        } finally {
            set({loading: false})
        }
    },
    getSingleProduct: async (id) => {
        try { 
            const res = await productsData.getSingleProduct(id)
            set({product: await res, error: null})
        } catch (error) {
            set({error: error.message})
        }
    },
    getProductsLength: async () => {
        const res = await productsData.getProducts()
        set({productsLength: await res})
    },
    searchProduct: (value) => (set({search: value})),
    productFilter: (value) => (set({filter: value})),
    countPages: (value) => (set({pages: value})),
    changePage: (value) => (set({curPage: value}))

})))

export const useCartStore = create(persist(set => ({
    cart: [],
    addToCart: (product) =>  (set(state => {

        const findProduct = state.cart.find(item => item.id === product.id)

        if(findProduct) {
          return {...findProduct.count++}
        } else {
          return {cart: [...state.cart, product]}
        }
    })), 
    removeFromCart: (product) => (set(state => {
        
        return  state.cart = state.cart.filter(item => item.id !== product)
    })),
    
}),{name: 'cartStore'}))