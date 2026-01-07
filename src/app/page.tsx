import IntroductionText from "@/ui/introduction-text"
import ProfileIcon from "@/ui/profile-icon"

export default function Home() {
  return (
    <main>
        <section className="flex min-h-screen items-center justify-around p-24">  
          <ProfileIcon />
          <IntroductionText />
        </section>
    </main>
  )
}
