import PropTypes from 'prop-types';
import './style.css'
function Products({ el, onDelete }) {
    
    const handleDelete = () => {
        onDelete(el.name);
      };
    return(
        
        <li key={el}>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p>
            <h3>{el.name}</h3>
          </p>
          <p>
            <span>{el.description}</span>
          </p>
          <p>
            <h3>$ {el.price}</h3>
          </p>
          <p>
            <span>Quantity: {el.quantity}</span>
          </p>
          <p>
            <button className="btn-delete" onClick={handleDelete}>Delete</button>
          </p>
        </div>
      </div>
    </li>
  
  )
}

export default Products




Products.propTypes = {
    el: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired, 
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  