import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface Props {
  name?: string
  className?: string
  active?: boolean
  style?: React.CSSProperties
}

export const ProductName = ({ name, className, style }: Props) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {name ? name : product.name}
    </span>
  )
}
