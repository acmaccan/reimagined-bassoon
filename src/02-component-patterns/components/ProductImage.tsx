import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export interface Props {
  image?: string
  className?: string
  style?: React.CSSProperties
}

export const ProductImage = ({ image = '', className, style }: Props) => {
  const { product } = useContext(ProductContext)

  let imageToShow: string = image
    ? image
    : product.image
    ? product.image
    : noImage

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imageToShow}
      alt={imageToShow}
    />
  )
}
