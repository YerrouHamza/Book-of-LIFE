
// props type for the button component
type buttonsPropsType = {
    text: string,
    variant: 'light' | 'dark',
    customClass?: string
}

const Button = (props: buttonsPropsType) => {
    // create a variable to store the variant of the button
    const variant = props.variant === 'light' ? 'text-black' : 'bg-black text-white button-shadow';

    // create a variable to store the class of the button
    const buttonClass = `border-2 border-black px-5 py-2 rounded-lg ${variant} ${props.customClass}`;

    return <button className={buttonClass}>
        {props.text}
    </button>
}


export default Button;