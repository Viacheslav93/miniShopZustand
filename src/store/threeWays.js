import { create } from "zustand";
import {persist} from 'zustand/middleware'


export const useProdcutsStore = create( (set, get) => ({
    products: [],
    loading: false,
    error: null,
    addProduct1: (title) => (set(state => {
        const newProduct = {id: 1, title, count: 0}

        return {products: [state.products, newProduct]}
    })),
    addProduct2: (title) => (set(state => ({
        products: [...state.products, {id:1, title, count: 1}]
    }))),
    addProduct3: (title) => {
        const newProduct = {id: 1, title, count: 0}

        set({products: [...get().products, newProduct]})
    }
}))

//persist для кештрование на стороне браузера //localStorage or another storage