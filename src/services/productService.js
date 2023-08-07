import {BASE_URL} from '../const'

export const productsData = {

    async getAllProducts (search, limit, page) {

        const res = await fetch(`${BASE_URL}products/?title=${search}&offset=${page}&limit=${limit}`)

        if(!res.ok) throw new Error('Failed to fetch! Please try again')

       return  await res.json()
   },
   async getProducts () {

    const res = await fetch(`${BASE_URL}products`)
    
    return await res.json()
   },
   async getSingleProduct (id) {

    const res = await fetch(`${BASE_URL}products/${id}`)

    if(!res.ok) throw new Error('Failed to fetch! Please try again')

   return  await res.json()
},
}