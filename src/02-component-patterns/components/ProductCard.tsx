import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import {
  InitialValues,
  onChangeArgs,
  ProductCardHandlers,
  Product,
  ProductContextProps,
} from '../interfaces/products.interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  product: Product
  // children?: ReactElement | ReactElement[]
  children?: (args: ProductCardHandlers) => JSX.Element
  className?: string
  style?: React.CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  })

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset,
          })}
      </div>
    </Provider>
  )
}
