import React, { PureComponent } from 'react'

class Header extends PureComponent {
    render() {
        return (
            <>
            <div className='bg-red-700 text-lg'>Header</div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
            </>
        )
    }
}

export default Header