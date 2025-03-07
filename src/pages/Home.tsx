import React, { PureComponent } from 'react'
import Button from '../components/Button';

class Home extends PureComponent {
    render() {
        return (
            <>
                <div className='bg-green-600 text-lg'>Home</div>
                <div className='flex gap-x-2'>
                    <Button color="primary" size="large" title="Подвердить" />
                    <Button color="secondary" size="medium" title="Удалить" />
                </div>
            </>
            
        )
    }
}

export default Home