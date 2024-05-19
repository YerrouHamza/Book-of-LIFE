
type SectionTemplateProps = {
    title: string,
    description?: string,
    variant?: 'champagne' | 'white' | 'alice' | 'pewter',
    children: React.ReactNode
}


const SectionTemplate = (props: SectionTemplateProps) => {

    // Create the bg section based on the variant
    const variant = props.variant === 'champagne' ? 'bg-theme-champagne' :
                    props.variant === 'white' ? '' :
                    props.variant === 'alice' ? 'bg-theme-alice-blue' :
                    props.variant === 'pewter' ? 'bg-theme-pewter-blue' : '';

    return (
        <section className={`flex flex-col items-center bg-withe py-20 max-w-screen-xl m-auto ${variant}`} >
            <div className="text-black text-center mb-20 max-w-screen-md m-auto">
                <h1 className="  text-5xl font-semibold">
                    {props.title}
                </h1>
                {props.description !== null ? 
                    <p className="text-xl mt-5">
                        {props.description}
                    </p>
                : null}
            </div>

            {/* This is where the children will be rendered */}
            {props.children}
        </section>
    )
}


export default SectionTemplate