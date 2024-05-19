import './sectionTemplate.scss'

type SectionTemplateProps = {
    title: string,
    titleShape?: 'v1' | 'v2' | 'v3' | 'v4',
    sectionShape?: 'dark' | 'chamagne',
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

    // Create the section shape based on the sectionShape
    const sectionShape = props.sectionShape !== null ? `section-shape section-shape-${props.sectionShape}` : '';
    
    // Create the title shape based on the titleShape
    const titleShape =  props.titleShape !== null ? `title-shape title-shape-${props.titleShape}` : '';

    return (
        <section className={`flex flex-col items-center bg-withe py-20 ${variant} ${sectionShape}`}>
            <div className="max-w-screen-xl m-auto">
                <div className="text-black text-center mb-20 lg:w-fit max-w-screen-md m-auto">
                    <h1 className={`text-5xl font-semibold ${titleShape}`}>
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
            </div>
        </section>
    )
}


export default SectionTemplate