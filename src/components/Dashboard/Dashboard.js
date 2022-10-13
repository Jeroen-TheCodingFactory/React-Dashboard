import React from "react";
/* Own Components */
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import Popup from "../Popup/Popup";
/* helpers */
import chooseImage from "../../helpers/chooseImage";
/* import data from data source */
import productsObject from "../../data/products";
import navigationItemsObject from "../../data/navigationItems";
/* Styling / CSS */
import "./Dashboard.css";
class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {productCards: [], open: true};
    }

    componentDidMount(){
        this.setState({productCards: productsObject.products});
    }

    onButtonClicked = () => {
        this.setState({open: !this.state.open})
    }

    addButtonClicked = (inputFromPopup) => {
       let imageFromHelper = chooseImage(inputFromPopup);
        let toBeAdded = [
            {
                id: this.state.productCards.length + 1,
                name: inputFromPopup,
                img: imageFromHelper
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }

    onCardClicked = () =>{
        this.setState({open: !this.state.open});
    }
   
    render(){
        if(this.state.open === true){
            return (
                <article className="dashboard">
                    <LeftPane navigationListItems={navigationItemsObject.navigationItems} buttonText="Go Premium"></LeftPane>
                    <RightPane onCardClicked={this.onCardClicked} onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="Mijn Producten" buttonSymbol="+" buttonText="Voeg een product toe"></RightPane>
                </article>
            );
        }
        return(
            <Popup addButtonClicked={this.addButtonClicked} />
        )
    }
}

export default Dashboard;