import react from "react";
import "./card.css";
class Card extends react.Component{
    constructor(){
        super()
        this.state = this.props

    }
    render(){

        return (
          <section className="card_sec">
            <figure>
              <img src={this.props.image} />
              <figcaption>{this.props.name}</figcaption>
            </figure>
            <div>
              <p>price: {this.props.price}</p>
              <p>cetegory: {this.props.category}</p>
            </div>

          </section>
        );

    }

}

export default Card;
