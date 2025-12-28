import { useOutletContext, useParams } from "react-router-dom";


export const Product = () => {
    const {products} = useOutletContext()
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id)

    return (
        <>
            <section className="alert container">
                {findProduct ? (
                <>
                <div className="left_alert">
                    <h2 className="alert_title logo_title">{findProduct.title}</h2>
                    <picture className="kugo">
                        <source srcSet="/img/comp.avif" type="image/avif" />
                        <source srcSet="/img/comp.webp" type="image/webp" />
                        <img className="kugo_pic" src={findProduct.img} alt="kugo" />
                    </picture>
                    <p className="alert_text">
                        {findProduct.discription}
                    </p>
                </div>
                <div className="midle_alert">
                    <h2 className="alert_title logo_title">{findProduct.price}</h2>
                    <button className="a_head2 contact_btn">Показать телефон</button>
                </div>
                <div className="right_alert">
                    <h2 className="alert_title logo_title">Сервисы и услуги</h2>
                    <aside className="aside">
                        <div className="info">
                            <picture>
                                <source srcSet="/img/truck.avif" type="image/avif" />
                                <source srcSet="/img/truck.webp" type="image/webp" />
                                <img src="/img/truck.png" alt="truck" />
                            </picture>
                            <h2 className="info_title">Доставка</h2>
                            <p className="info_text">Проверка при получении и возможность бесплатно вернуть товар</p>
                        </div>
                        <div className="info">
                            <picture>
                                <source srcSet="/img/sedan.avif" type="image/avif" />
                                <source srcSet="/img/sedan.webp" type="image/webp" />
                                <img src="/img/sedan.png" alt="sedan" />
                            </picture>
                            <h2 className="info_title">Автотека</h2>
                            <p className="info_text">Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах</p>
                        </div>
                        <div className="info">
                            <picture>
                                <source srcSet="/img/home.avif" type="image/avif" />
                                <source srcSet="/img/home.webp" type="image/webp" />
                                <img src="/img/home.png" alt="home" />
                            </picture>
                            <h2 className="info_title">Онлайн-бронирование жилья</h2>
                            <p className="info_text">Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России</p>
                        </div>
                        <hr />
                        <div className="copyright">
                            <p className="mini">© ООО «Абито», 2011–2021</p>
                            <p className="mini mini_dec">Политика конфиденциальности</p>
                            <p className="mini mini_dec">Обработка данных</p>
                        </div>
                    </aside>
                </div>
                </>
                ) : (
                <h2 className="alert_title logo_title">Товар не найден!</h2>
                )}
                
            </section>
        </>
    );
}