import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    render() {
        return (
            <div className='bg-blue-400 fixed bottom-0 inset-x-0 h-[100px]'>
                <div font-lg>Footer</div>
                <div className='flex gap-x-2'>
                    <a href="https://github.com/kinitu/internet-technology.git">GitHub</a>
                    <a href="/about">About</a>
                </div>
            </div>
        )
    }
}

export default Footer