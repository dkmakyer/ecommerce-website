import {useState, useEffect, createContext, useMemo} from 'react'
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                console.log(response.data);
            }catch(err){
                console.log("Error encountered during fetch, ", err.message);
                setError(err.message);
            }
        }
        fetchProducts();
    }, [])

    const value = useMemo(() => ({products, error}), [products, error]);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );

}

export default ProductProvider;
