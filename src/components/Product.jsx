import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

function Product() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const addProduct = () =>{
        setProducts([...products, {
            Title: title,
            Descript: description,
            Price: price
        }]);
    };

    return(
        <div>
            <div>
                <div className='flex gap-2'>
                    <div>
                        <p>Название:</p> 
                        {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-solid border-gray-500 border-2 px-1 bg-white'/> */}
                        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} size="small" color="gray"/>
                    </div>
                    <div>
                        <p>Описание:</p>
                        {/* <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='border-solid border-gray-500 border-2 px-1 bg-white'/> */}
                        <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} size="small" color="gray"/>
                    </div>
                    <div>
                        <p>Цена:</p>
                        {/* <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className='border-solid border-gray-500 border-2 px-1 bg-white'/> */}
                        <Input type="text" value={price} onChange={(e) => setPrice(e.target.value)} size="small" color="gray"/>
                    </div>
                </div>
                <Button size='small' color='secondary' title='Добавить' onClick={addProduct}/>
            </div>

            <table class='table-auto w-2/5'>
                <thead>
                    <tr>
                        <th className='bg-blue-500'>Название</th>
                        <th className='bg-blue-400'>Описание</th>
                        <th className='bg-blue-500'>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <tr>
                            <th className='bg-blue-300'>{item.Title}</th>
                            <th className='bg-blue-200'>{item.Descript}</th>
                            <th className='bg-blue-300'>{item.Price}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Product;