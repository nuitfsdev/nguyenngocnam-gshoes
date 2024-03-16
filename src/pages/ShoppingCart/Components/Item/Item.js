
import './Item.css';

function Item(props){
    const styles = {
        backgroundColor: props.data.color
      };
    return(
        <div className="item">
            <div className="item-image" style={styles}>
                <img src={props.data.image} alt={props.data.name} />
            </div>
            <div className="item-name">
               {props.data.name}
            </div>
            <div className="item-description">{props.data.description}</div>
            <div className="item-bottom">
                <div className="item-price">${props.data.price}</div>
                <div className="item-button">
                    <p>ADD TO CART</p>
                </div>

            </div>
           
        </div>
    )   
}

export default Item;