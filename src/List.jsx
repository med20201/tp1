import Products from './Products'
import PropTypes from 'prop-types';



function List({List , onDelete}){
    return(
      
       <ul> {List.map((el) => ( <Products el={el} key={el}  onDelete={onDelete}/>))}
       </ul>
       )
}
export default List


List.propTypes = {
    List: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
  };