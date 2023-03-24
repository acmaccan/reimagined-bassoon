import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ image = '' }) => {
  const { product } = useContext(ProductContext)

  let imageToShow: string = image
    ? image
    : product.image
    ? product.image
    : noImage

  return (
    <img className={styles.productImg} src={imageToShow} alt={imageToShow} />
  )
}


