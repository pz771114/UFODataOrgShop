import Product from "../product";

import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../actions/productsAction';
import { useEffect } from "react";

const Content = () => {
    
    const {loading, products, productsCount} = useSelector(state=>state.products);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());

    },[dispatch]);
   
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {products.map(product=><Product product={product} key={product._id}/>)}
                   
                    
                </div>
            </div>
        </section>
     );
}
 
export default Content;