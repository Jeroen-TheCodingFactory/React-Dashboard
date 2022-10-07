import "./LeftPane.css";

const LeftPane = ({navigationListItems, buttonText}) => {
    let toBeRenderedNavigationListemItems = navigationListItems.map(object => {
        let message = null;
        if(object.message > 0){
            message = <div className="dashboard__message">{object.message}</div>
        }
        return(
            <li key={object.name} className="dashboard__li">
                <a href="" className="dashboard__link">{object.name}
                    {message}
                </a>
            </li>
        );
    });

    return (
        <section className="dashboard__wrapper">
            <nav className="dashboard__nav">
                <ul className="dashboard__ul">
                   {toBeRenderedNavigationListemItems}
                </ul>
            </nav>
            <button className="dashboard__button">{buttonText || "Click here!"}</button>
        </section>
    );
}

export default LeftPane;