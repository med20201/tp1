import PropTypes from 'prop-types';
import './style.css'


function Sortby({sort,handleSortChange}){
    
    return(
        <select value={sort} onChange={handleSortChange}>
            <option >Sort by ...</option>
            <option value="Croissant">Croissant</option>
            <option value="Décroissant">Décroissant</option>

        </select>
    )
}
export default Sortby



Sortby.propTypes = {
    sort: PropTypes.string.isRequired, 
    handleSortChange: PropTypes.func.isRequired,
  }