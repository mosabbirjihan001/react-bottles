import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {name , img , price} = bottle ;
    // console.log(bottle);
        return (
        <div className='bottle'>
            <h2>Bottles : {name} </h2>
            <img src={img} alt="" />
            <h2>Price :{price} </h2>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.object.isRequired ,
    handleAddToCart : PropTypes.func.isRequired
}

export default Bottle;