import { Header } from "../components/Header/Header";
import { Card } from "../components/Card/Card";
import { cardArray } from "../constants";

export const Home = () => {
    return (
        <>
            <Header /> 

            <div className="main container"></div>

            <section className="search container">
                <div className="search_box">
                    <input type="text" placeholder="Поиск по объявлениям" />
                    <button className="a_head2 search_btn">
                        <picture className="search_pic">
                            <source srcSet="./img/search.avif" type="image/avif" />
                            <source srcSet="./img/search.webp" type="image/webp" />
                            <img className="search_img" src="./img/search.png" alt="search" />
                        </picture>
                        <span className="hid_b">Найти</span>
                    </button>
                </div>
            </section>

            <section className="alert container">
                <div className="left_alert">
                    <h2 className="alert_title logo_title">Рекомендации для вас</h2>
                    <div className="cards">
                        {
                            cardArray.map(card => (
                                <Card
                                key={card.id}
                                title={card.title}
                                price={card.price}
                                address={card.address}
                                date={card.date}
                                img={card.img}
                                /> 
                            ))
                        }
                    </div>
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
                            <p className="info_text">
                                Проверка при получении и возможность бесплатно вернуть товар
                            </p>
                        </div>

                        <div className="info">
                            <picture>
                                <source srcSet="/img/sedan.avif" type="image/avif" />
                                <source srcSet="/img/sedan.webp" type="image/webp" />
                                <img src="/img/sedan.png" alt="sedan" />
                            </picture>
                            <h2 className="info_title">Автотека</h2>
                            <p className="info_text">
                                Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                            </p>
                        </div>

                        <div className="info">
                            <picture>
                                <source srcSet="/img/home.avif" type="image/avif" />
                                <source srcSet="/img/home.webp" type="image/webp" />
                                <img src="/img/home.png" alt="home" />
                            </picture>
                            <h2 className="info_title">Онлайн-бронирование жилья</h2>
                            <p className="info_text">
                                Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                            </p>
                        </div>
                        <hr />
                        <div className="copyright">
                            <p className="mini">© ООО «Абито», 2011–2021</p>
                            <p className="mini mini_dec">Политика конфиденциальности</p>
                            <p className="mini mini_dec">Обработка данных</p>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
};