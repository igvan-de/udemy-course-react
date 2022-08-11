import { Component } from "react";
import "./card-container.styles.css";

class CardContainer extends Component {

    render() {
        const { id, name, email } = this.props;

        return(
            <div className='card-container' key={id}>
                <img
                    alt={`monster ${name}`} 
                    src={`https://robohash.org/${id}?set=set1`}
                    className='card-container_img'
                />
                <h2 className='card-container_name'>{name}</h2>
                <p  className='card-container_email'>{email}</p>
            </div>
        )
    }
}

export default CardContainer;
