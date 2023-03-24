import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductContextProps, ProductCardProps } from '../interfaces/products.interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage product={product} />
            <ProductName name={product.name} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  )
}

