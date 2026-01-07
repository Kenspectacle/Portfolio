import Image from 'next/image'

export default function ProfileIcon() {
    return (
        <div>
          <Image
              src="/gozali_kenny_a_presentation_alpha.png"
              alt="Profile Picture"
              width={300}
              height={72}
              priority
            />
        </div>
    )
}