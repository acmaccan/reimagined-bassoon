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
      if (count === 0) {
        const { [product.id]: _, ...rest } = previousShoppingCart
        // console.log(_)
        return rest
      }
      return {
        ...previousShoppingCart,
        [product.id]: { ...product, count },
      }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
