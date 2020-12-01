import { useState, useEffect } from 'react'
import Head from 'next/head'
import OwlCarousel from 'react-owl-carousel2'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

function SearchBar ({ onSubmit }) {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if(onSubmit) onSubmit(searchTerm);
    }

    function handleChange(event) {
        let value = event.target.value;
        setSearchTerm(value);
    }

    return (
        <div>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search-input">Busque pelo produto que procura.</label>
                    <div className="input-container">
                        <input type="text" placeholder="Bonés" id="search-input" value={searchTerm} onChange={handleChange}/>
                        <div className="divider"></div>
                        <button type="submit">Buscar</button>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .wrapper {
                    padding: 20px 200px;
                    background-color: var(--color-red);
                    transform: skewX(-25deg);
                }

                .wrapper form {
                    transform: skewX(25deg);
                }

                label {
                    font-family: 'FuturaLT Book';
                    color: var(--color-white);
                    text-align: center;
                    display: block;
                    font-size: 1.5rem;
                    margin-bottom: 15px;
                }

                .input-container {
                    display: flex;
                    align-items: center;
                    height: 40px;
                    background-color: var(--color-white);
                }

                .input-container [type="text"],
                .input-container [type="submit"] {
                    height: 40px;
                    border: none;
                    background-color: var(--color-white);
                    outline-color: transparent;
                    outline-width: 0;
                    outline: none;
                }

                .input-container [type="text"] {
                    font-family: 'FuturaLT Book';
                    display: block;
                    flex: 1;
                    max-width: 100%;
                    padding: 0 20px;
                    font-size: 1.3rem;
                }

                .input-container [type="submit"] {
                    display: inline-block;
                    width: 130px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 1.5rem;
                    color: var(--color-green);
                }

                .input-container .divider {
                    display: inline-block;
                    width: 1px;
                    background-color: var(--color-red);
                    height: 55%;
                }

                @media (max-width: 575.98px) {
                    .wrapper {
                        padding: 10px;
                        transform: skewX(-10deg);
                    }

                    .wrapper form {
                        transform: skewX(10deg);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    label {
                        font-size: 1.1rem;
                        margin-bottom: 10px;
                    }

                    .input-container {
                        max-width: 100%;
                    }

                    .input-container [type="text"] {
                        padding: 0 10px;
                        font-size: 0.9rem;
                        width: 55vw;
                    }

                    .input-container [type="submit"] {
                        width: 70px;
                        font-size: 0.9rem;
                    }

                    .input-container,
                    .input-container [type="text"],
                    .input-container [type="submit"] {
                        height: 35px;
                    }
                }

                @media (min-width: 576px) and (max-width: 767.98px) {
                    .wrapper {
                        padding: 15px 40px;
                    }

                    label {
                        font-size: 1.3rem;
                        margin-bottom: 10px;
                    }

                    .input-container [type="text"] {
                        padding: 0 15px;
                        font-size: 1.1rem;
                    }

                    .input-container [type="submit"] {
                        width: 100px;
                        font-size: 1.3rem;
                    }
                }

                @media (min-width: 768px) and (max-width: 991.98px) {
                    .wrapper {
                        padding: 20px 100px;
                    }
                }

                @media (min-width: 992px) and (max-width: 1199.98px) {
                    .wrapper {
                        padding: 20px 150px;
                    }
                }
            `}</style>
        </div>
    );
}

function Product ({ title, picture, price }) {
    return (
        <div className="product-wrapper">
            <div className="product">
                <p className="title">{title}</p>
                <div className="picture">
                    <img src={picture} alt={title} className="img-fluid"/>
                </div>
                <span className="price">R$&nbsp;<strong>{price.toFixed(2).toString().replace('.', ',')}</strong></span>
            </div>
            <style jsx>{`
                .product {
                    padding: 0 30px;
                }

                .product .title {
                    font-weight: 500;
                    font-size: 1.5rem;
                    color: var(--color-black);
                    margin-bottom: 10px;
                    margin-top: 0;
                }    

                .product .picture {
                    margin-bottom: 10px;
                }

                .product .price {
                    display: block;
                    width: 100%;
                    background-color: var(--color-purple);
                    color: var(--color-white);
                    font-size: 1.8rem;
                    text-align: center;
                    height: 60px;
                    line-height: 60px;
                }
                
                @media (max-width: 575.98px) {
                    .product {
                        padding: 0 30px;
                    }

                    .product .title {
                        font-size: 1.2rem;
                    }

                    .product .price {
                        font-size: 1.6rem;
                        height: 50px;
                        line-height: 50px;
                    }
                }

                @media (min-width: 576px) and (max-width: 767.98px) {
                    .product {
                        padding: 0 50px;
                    }

                    .product .title {
                        font-size: 1.5rem;
                    }
                }

                @media (min-width: 768px) and (max-width: 991.98px) {
                    .product {
                        padding: 0 20px;
                    }

                    .product .title {
                        font-size: 1.3rem;
                    }
                }

                @media (min-width: 992px) and (max-width: 1199.98px) {
                    .product {
                        padding: 0 20px;
                    }

                    .product .title {
                        font-size: 1.3rem;
                    }
                }
            `}</style>
        </div>
    );
}

function getOwlOptions (items) {
    return {
        lazyLoad: true,
        margin: 15,
        dots: false,
        rewind: true,
        autoplay: false,
        loop: false,
        center: false,
        responsive: {
          0: {
            items: 1,
            nav: items > 1,
          },
          // breakpoint from 768 up
          768: {
            items: 2,
            nav: items > 2,
          },
          // breakpoint from 992 up
          992: {
            items: 3,
            nav: items > 3,
          },
        },
      }
}

function Home ({ products }) {

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState(products.categories);
    const [searchTerm, setSearchTerm] = useState('');
    const [productsCount, setProductsCount] = useState(0);

    useEffect(() => {
        searchProducts();
    }, [searchTerm]);

    function handleSubmit(value) {
        setSearchTerm(value);
    }

    async function searchProducts() {
        //setLoading(true);
        const products_res = await fetch('https://atri-digital.herokuapp.com/api/products?q='+searchTerm);
        const products = await products_res.json();

        let products_count = 0;

        products.categories.forEach(category => {
            category.products.forEach(() => {
                products_count++;
            });
        });

        setProductsCount(products_count);
        setCategories(products.categories);
        setLoading(false);
    }

    return (
        <div>
            <Head>
                <title>Atri Digital</title>
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://atri.com.br/apollo14/view/template/atri/includes/ico/apple-touch-icon-144-precomposed.png"></link>
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://atri.com.br/apollo14/view/template/atri/includes/ico/apple-touch-icon-114-precomposed.png"></link>
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://atri.com.br/apollo14/view/template/atri/includes/ico/apple-touch-icon-72-precomposed.png"></link>
                <link rel="apple-touch-icon-precomposed" href="https://atri.com.br/apollo14/view/template/atri/includes/ico/apple-touch-icon-57-precomposed.png"></link>
                <link rel="icon" href="https://atri.com.br/apollo14/view/template/atri/includes/ico/favicon.ico" type="image/x-icon"></link>
                <link rel="shortcut icon" href="https://atri.com.br/apollo14/view/template/atri/includes/ico/favicon.ico"></link>
            </Head>
            <Header />
            { loading && <Loader /> }
            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <SearchBar onSubmit={handleSubmit}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">       
                            <h2 className="text-center">Para conectar você com o nosso lifestyle,&nbsp;<br/>apresentamos a nova <strong>FiatWear.</strong></h2>
                        </div>
                    </div>
                    {
                        searchTerm &&
                        <div className="row">
                            <div className="col-12">
                                <span className="search_info">{
                                    productsCount == 1 
                                    ? "1 produto encontrado para o termo '"+searchTerm+"'" 
                                    : ( productsCount <= 0 
                                        ? "nenhum produto encontrado para o termo '"+searchTerm+"'"  
                                        : productsCount+" produtos encontrados para o termo '"+searchTerm+"'" )
                                }</span>
                            </div>
                        </div>
                    }
                    {
                        categories && categories.length > 0 && categories.map((category, index) => (
                            <div className={`row category${ index === categories.length - 1 ? ' no-margin-bottom' : ''}`} key={category.id}>
                                <div className="col-12">
                                    <h3 className="has-color-green text-uppercase d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={33} height={24} viewBox="0 0 33 24">
                                            <image data-name="FIAT_FLAG_preto" width={33} height={24} xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAYCAQAAADemFyBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkDAEOMyNg30AYAAAB4klEQVQ4y33TMSgnYBjH8U90pFwug+XqFimLQRbKxKK7rpSBRVIGi0nJ4haDUiaZZGJgsLDoyiCLRYZbLEoGA0VKSdJzwz2c99+fd/s+7/N+h9+vl/JMCSH0g+6kWdDoQQjbuXsshIsKg30h3KgFi6loA8NJI6A1aakUtHgWwlrymRD+JG0K4VETmE5Fb6mYyPEP0Jn0CzS4F8Ju7h4J4VJNqdgTwp16MJ+KDvAzaRx8TVqJQvDFkxA2kk+FcJq0LoQnzWXspWI0x0OgPWkBfHIrhN+5eyCEa7WlYkcI9xrAXCq6wEDSZGXsbxWVrZ8I4TxpVQjPWsBkCgdKxcgHrde6EsJhRex1pWIrW/8MZlLRA/qSpkBzxr7OW8XHrS+n4hsYSxosFYM5HgPfkpZBjUshHOXu7tvY/yuqt94HepJmwGePQtj69/BFUedOCHvJh0K4ys+2lIrWKrG/Kqq3vpq350I4SdoWwoPGUrH2XuvoSporYt95SSCy9WshHOT0txBufQILqWgHQ0mjpaL//dZVfraNjP1LqVhJxVcwnvQTdCTNg/qK2FPxYet+paITfE+aKBW9OZ4GTdn6Zm78EcJZ1dhfFdVbHwZtSYsZ+40Q9ikVF0I4rtr6bCq6q8T+qvgLlPF031smHswAAAAASUVORK5CYII=" />
                                        </svg>&nbsp;
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="col-12">
                                    <OwlCarousel options={getOwlOptions(category.products.length)}>
                                    {
                                        category.products.map((product) => (
                                            <Product key={product.id} title={product.title} picture={product.picture} price={product.price} />
                                        ))
                                    }
                                    </OwlCarousel>
                                </div>
                            </div>
                        ))
                    }
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">Consulte nosso vendedor.</h2>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <style jsx>{`
                main {
                    padding: 50px 0;
                }

                .category:not(.no-margin-bottom) {
                    margin-bottom: 50px;
                }

                h2 {
                    margin: 80px 0;
                }

                h3 {
                    margin-bottom: 50px;
                    margin-top: 0;
                }

                .search_info {
                    display: block;
                    font-size: 1.1rem;
                    margin-bottom: 50px;
                }

                @media (max-width: 575.98px) {
                    main {
                        padding: 30px 0 0 0;
                    }

                    h2 {
                        margin: 50px 0;
                    }

                    h2 > br {
                        display: none;
                    }

                    .category:not(.no-margin-bottom) {
                        margin-bottom: 50px;
                    }

                    h3 {
                        margin-bottom: 20px;
                    }

                    h3 > svg {
                        width: 30px;
                        height: auto;
                    }
                }

                @media (min-width: 576px) and (max-width: 767.98px) {
                    main {
                        padding: 40px 0;
                    }

                    h2 {
                        margin: 50px 0;
                    }

                    .category:not(.no-margin-bottom),
                    h3 {
                        margin-bottom: 30px;
                    }
                }

                @media (min-width: 768px) and (max-width: 991.98px) {
                    main {
                        padding: 40px 0;
                    }

                    h2 {
                        margin: 50px 0;
                    }

                    .category:not(.no-margin-bottom),
                    h3 {
                        margin-bottom: 30px;
                    }
                }

                @media (min-width: 992px) and (max-width: 1199.98px) {
                    main {
                        padding: 40px 0;
                    }

                    h2 {
                        margin: 60px 0;
                    }

                    .search_info {
                        margin-bottom: 60px;
                    }

                    .category:not(.no-margin-bottom),
                    h3 {
                        margin-bottom: 40px;
                    }
                }
            `}</style>
        </div>
    );
}

export async function getStaticProps() {
    let products;

    try {
        const products_res = await fetch('https://atri-digital.herokuapp.com/api/products');
        products = await products_res.json();
    } catch(err) {
        products = { categories: [] }
    }
   
    return {
        props: { products }
    }
}

export default Home;