import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/products.interfaces'

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({
    // '1': { ...product1, count: 10 },
    // '2': { ...product2, count: 5 },
  })

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number
    product: Product
  }) => {
    setShoppingCart((previousShoppingCart) => {
      const productInCart: ProductInCart = previousShoppingCart[product.id] || {
        ...product,
        count: 0,
      }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...previousShoppingCart,
          [product.id]: productInCart,
        }
      }
      const { [product.id]: _, ...rest } = previousShoppingCart
      return rest

      // if (count === 0) {
      //   const { [product.id]: _, ...rest } = prevShoppingCart
      //   // console.log(_)
      //   return rest
      // }
      // return {
      //   ...prevShoppingCart,
      //   [product.id]: { ...product, count },
      // }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
