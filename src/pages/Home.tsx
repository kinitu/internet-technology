import React, { PureComponent } from 'react'
import Button from '../components/Button';
import Text from '../components/Text';
import Input from '../components/Input';
import Container from '../components/Container';
import Counter from '../components/Counter';
import Product from '../components/Product';
import InputComponent from '../components/InputComponent';

class Home extends PureComponent {
    render() {
        return (
            <>
                <Container>
                    <div className='bg-green-600 text-lg'>Home</div>
                    <div className='flex gap-x-2'>
                        <Button color="primary" size="large" title="Подвердить" />
                        <Button color="secondary" size="medium" title="Удалить" />
                    </div>
                    <div>
                        <Text family="mono" size="small" title="Hello, World"/>
                    </div>
                    <div>
                        <Input size="medium" color="black"/>
                    </div>
                    <Product/>
                </Container>
            </>
            
            
        )
    }
}

export default Home