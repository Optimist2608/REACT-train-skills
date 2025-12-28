import './Card.css'


export const Card = ({title, price, address, date, img}) => {
    return (
        <div className="card">
            <picture className="alert_pic">
                <source srcSet="/img/comp.avif" type="image/avif" />
                <source srcSet="/img/comp.webp" type="image/webp" />
                <img className="alert_img" src={img} alt="comp" />
            </picture>
            <div className="block">
                <p className="block_title">{title}</p>
                <p className="price">{price}</p>
                <p className="mini">{address}</p>
                <p className="mini">{date}</p>
            </div>
        </div>
    )
}