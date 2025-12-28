import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({id, title, price, address, date, img}) => {
    return (
        <Link to={`/product/${id}`}>
            <div className="card">
                <picture className="alert_pic">
                    <source srcSet={img.replace('.png', '.avif')} type="image/avif" />
                    <source srcSet={img.replace('.png', '.webp')} type="image/webp" />
                    <img className="alert_img" src={img} alt={title} />
                </picture>
                <div className="block">
                    <p className="block_title">{title}</p>
                    <p className="price">{price}</p>
                    <p className="mini">{address}</p>
                    <p className="mini">{date}</p>
                </div>
            </div>
        </Link>
    )
}