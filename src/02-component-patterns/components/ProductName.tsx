import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export const ProductName = ({ name }: { name?: string }) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={styles.productDescription}>
      {name ? name : product.name}
    </span>
  )
}