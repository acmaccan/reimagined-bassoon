import { useProduct } from '../hooks/useProduct'
import { createContext, ReactElement } from 'react'
import { Product, ProductContextProps } from '../interfaces/products.interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: React.CSSProperties
}

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage product={product} />
            <ProductName name={product.name} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  )
}
