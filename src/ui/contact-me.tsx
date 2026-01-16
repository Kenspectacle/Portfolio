import SectionHeading from "./section-heading"

const contactDetails = [
    {
        contactSection: 'Email',
        contactBody: 'Kennyftw2@gmail.com'
    },
    {
        contactSection: 'Availability',
        contactBody: 'Reply within 3 days'

    },
    {
        contactSection: 'Location',
        contactBody: 'Based in Germany 🇩🇪 | Available globally 🌍'
    }
]

export default function Contact() {
    return(
        <section className="flex flex-col p-8 items-center justify-around">
            <SectionHeading>
                Contact Me
            </SectionHeading>
                <ul>
                    {contactDetails.map(({ contactSection: section, contactBody: body }) => {
                        
                        const details = section === "Email" ? <a href={"mailto:" + body}>{body}</a>
                        : body;

                        return(
                            <li
                        key={section}
                        className="flex flex-col"
                        >
                            <span>{section}</span>
                            <span className="mx-3 my-2 text-red-600 font-bold text-xl">
                                {details}
                            </span>
                        </li>
                        )
                    }
                        
                    )}
                </ul>
        </section>    
    )
}

