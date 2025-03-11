import React from 'react'

function Text(props) {
    const {family, size, title} = props
    const classes = {
        fontFamily:{
            sans: "font-sans",
            serif: "font-serif",
            mono: "font-mono",
        },
        sizes:{
            small: "text-sm",
            medium: "text-base",
            large: "text-lg",
        },
    };
    return (
        <>
            <p className={classes.fontFamily[family]+" "+classes.sizes[size]}>{title}</p>
        </>
    )
}

export default Text
