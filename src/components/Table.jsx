import React, { useEffect, useState } from 'react'
import Button from './Button'
const Table = ({ productsData }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log(productsData)
        setProducts(productsData)
    }, [productsData])

   
    const onDelete = async (id) => {
       try {
        const response = await fetch(`http://localhost:3000/product/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
       } catch (error) {
        console.log(error);
       }
    }
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* todo map products */}
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><Button icon="edit" type="warning" />
                            <Button icon="delete_forever" type="danger" onClick={(e)=>onDelete(product.id)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Table