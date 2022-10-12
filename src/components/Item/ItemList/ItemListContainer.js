import React, { useEffect, useState } from 'react'
import { gFetch } from '../../../helpers/gFetch';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';


export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {
        if (idCategory) {
            gFetch()
                .then(res => setProducts(res.filter(prod => prod.category === idCategory)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        else {
            gFetch()
                .then(res => setProducts(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    })

    return (
        <div className='text-center'>
            <h1>{greeting}</h1>
            <ItemList loading={loading} products={products} />
        </div>
    )
}
