
// props type for the button component
type buttonsPropsType = {
    text: string,
    variant: 'light' | 'dark',
    size: 'sm' | 'md' | 'lg',
    customClass?: string,
}

const Button = (props: buttonsPropsType) => {
    // create a variable to store the variant of the button
    const variant = props.variant === 'light' ? 'text-black' : 'bg-black text-white button-shadow';

    // create a variable to store the size of the button
    const size = props.size === 'sm' ? 'px-3 py-1' : props.size === 'lg' ? 'px-10 py-4' : 'px-5 py-2';

    return <button className={`border-2 border-black rounded-lg ${size} ${variant} ${props.customClass}`}>
        {props.text}
    </button>
}


export default Button;