/* This contains page not found code incase of invalide link */
/* Not included in Medieinstitutet assignment 2 */
import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>That page cannot be found!!</p>
            <Link to="/">Back to the home page</Link>
        </div>
     );
}
 
export default NotFound;