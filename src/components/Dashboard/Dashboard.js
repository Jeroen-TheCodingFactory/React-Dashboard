import React from "react";
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import Popup from "../Popup/Popup";
import flowerImage from "../../img/pexels-irina-iriser-673857.jpg";
import pineappleImage from "../../img/pexels-karolina-grabowska-4195527.jpg";
import colaImage from "../../img/pexels-olena-bohovyk-3819969.jpg";
import skyImage from "../../img/pexels-soubhagya-maharana-5245865.jpg";
import "./Dashboard.css";
class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {productCards: [], open: true};
    }

 
    componentDidMount(){
        let productCards = [
            {
                name: "Placeholder"
            },
            {
                name:"Bloemen",
                img: flowerImage
            }, 
            {
                name: "Annanas",
                img: pineappleImage
            }
        ];
        this.setState({productCards: productCards})

    }

    onButtonClicked = () => {
        this.setState({open: !this.state.open})
    }

    addButtonClicked = (inputFromPopup) => {
        let toBeAddedImage;
        switch(inputFromPopup){
            case("Annanas"):
                toBeAddedImage = pineappleImage;
                break;
            case("Bloemen"):
                toBeAddedImage = flowerImage;
                break;
            case("Cola"):
                toBeAddedImage = colaImage;
                break;
            default:
                toBeAddedImage = skyImage;
                break;
        }
        let toBeAdded = [
            {
                name: inputFromPopup,
                img: toBeAddedImage
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }
   
    render(){
        let navigationListItems = 
        [
            {
                name: "Home",
                message: 0,
            },
            {
                name: "Facturen",
                message: 3,
            },
            {
                name: "Bestellingen",
                message: 0,
            },
            {
                name: "Retour",
                message: 1,
            },
            {
                name: "Contact",
                message: 2,
            },
            
        ];
        if(this.state.open === true){
            return (
                <article className="dashboard">
                    <LeftPane navigationListItems={navigationListItems} buttonText="Go Premium"></LeftPane>
                    <RightPane onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="Mijn Producten" buttonSymbol="+" buttonText="Voeg een product toe"></RightPane>
                </article>
            );
        }
        return(
            <Popup addButtonClicked={this.addButtonClicked} />
        )
       
    }
}

export default Dashboard;