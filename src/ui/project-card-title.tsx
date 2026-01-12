export default function CardTitle ({ children }: {children: React.ReactNode})  {
    return (
        <h5 className="font-extrabold italic text-xl">{children}</h5>
    )
}