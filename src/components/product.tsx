import { Link } from 'react-router-dom';

const ProductComponent = () => {
    return (
        <div className="four wide column">
            <Link to={'/1'}>
           
            <div className="ui link cards">
                <div className="card">
                <div className="image">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="test" />
                </div>
                <div className="contents">
                    <div className="headers">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                    <div className="meta price">$ 100 </div>
                    <div className="meta">men's clothing</div>

                </div>

                </div>

               
            </div>
            </Link>
            </div>
    )
}

export default ProductComponent;