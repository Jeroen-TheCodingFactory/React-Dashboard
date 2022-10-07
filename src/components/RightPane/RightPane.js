import "./RightPane.css";

const RightPane = ({headerText, buttonSymbol, buttonText, productCards, onButtonClicked}) => {
    let addProduct = () => {
        onButtonClicked();
    }
    
    let productCardsToBeRendered = productCards.map(product => {
        if(product.name === "Placeholder"){
            return(<li className="productsList__item">
            <button onClick={addProduct} className="productsList__button">{buttonSymbol || "*"}</button>
            <p className="productsList__text">{buttonText || "Lorem Ipsum"}</p>
        </li>);
        }
        return (
            <li className="productsList__item">
                <img class="productsLits__img" src={product.img} alt={product.name} />
                <div className="productsList__fade">
                    <p className="productsList__imageText">{product.name}</p>
                </div>
            </li>)
      
    });
    return (
        <section className="productsWrapper">
            <header className="header">
                <h1 class="header__h1">{headerText || "Placeholder"}</h1>
            </header>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </section>
    );
}

export default RightPane;