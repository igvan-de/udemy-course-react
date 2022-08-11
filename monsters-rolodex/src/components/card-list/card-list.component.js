import { Component } from "react";
import CardContainer from "./card-container/card-container.component";
import "./card-list.styles.css";

class CardList extends Component {

    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {
                    monsters.map((monster) => {
                        return (
                            <CardContainer 
                                id={monster.id}
                                name={monster.name}
                                email={monster.email}
                                key={monster.id}
                            />
                        );
                    })
                }
            </div>
        )
    }
}

export default CardList;