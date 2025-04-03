import React from 'react'

function Button(props) {
    const { size, color, title, onClick } = props;
    const defaultClass = "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";
    const classes = {
        colors:{
            primary:{
                button: "bg-amber-700",
                text: "text-red",
            },
            secondary:{
                button: "bg-red-500",
                text: "text-white",
            },
        },
        sizes:{
            small: "rounded-[10px] font-sm",
            medium: "rounded-[14px] font-base",
            large: "rounded-[16px] font base min-h-[56px]",
        },
    };

    return (
        <>
            <button className={defaultClass+" "+classes.sizes[size]+" "+classes.colors[color].button+" "+classes.colors[color].text} onClick={onClick}>
                {title}
            </button>
        </>
    )
}

export default Button