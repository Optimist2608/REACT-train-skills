import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { useEffect, useState } from "react"
import { cardArray } from "../constants"

export const Layout = () => {
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    const handleSearchArray = () => {
        if (searchText.trim() === '') {
            setProducts(cardArray)
        } else {
            setProducts(cardArray.filter((item) => {
                return item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.price.toLowerCase().includes(searchText.toLowerCase())
            }))
        }
    }

    useEffect(() => {
        setProducts(cardArray)
    }, [])

    useEffect(() => {
        if (searchText.trim() === '') {
            setProducts(cardArray)
        } else {
            setProducts(cardArray.filter((item) => {
                return item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.price.toLowerCase().includes(searchText.toLowerCase())
            }))
        }
    }, [searchText])

    return (
        <>
            <Header />

            <div className="main container">
                <section className="search container">
                    <div className="search_box">
                        <input
                            type="text"
                            placeholder="Поиск по объявлениям"
                            value={searchText}
                            onChange={handleSearch}
                        />
                        <button className="a_head2 search_btn" onClick={handleSearchArray}>
                            <picture className="search_pic">
                                <source srcSet="/img/search.avif" type="image/avif" />
                                <source srcSet="/img/search.webp" type="image/webp" />
                                <img className="search_img" src="/img/search.png" alt="search" />
                            </picture>
                            <span className="hid_b">Найти</span>
                        </button>
                    </div>
                </section>

                <Outlet context={{ products }} />
            </div>
        </>
    )
}