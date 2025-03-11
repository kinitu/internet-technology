import React, { PureComponent } from 'react'
import Button from '../components/Button';
import Text from '../components/Text';
import Input from '../components/Input';

class Home extends PureComponent {
    render() {
        return (
            <div className=' h-[100vh]'>
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
            </div>
            
        )
    }
}

export default Home