import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {

    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {
                    monsters.map((monster) => {
                        const { id, name } = monster;

                        return (
                            <div key={monster.id}>
                                <div className='card-container' key={id}>
                                    <img 
                                        alt={`monster ${name}`} 
                                        src={`https://robohash.org/${id}?set=set1`}
                                        className='card-container_img'
                                    />
                                    <h2 className='card-container_name'>{name}</h2>
                                    <p  className='card-container_email'>{monster.email}</p>
                                </div>                                    

                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default CardList;