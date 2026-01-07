import IntroductionText from "@/ui/introduction-text"
import ProfileIcon from "@/ui/profile-icon"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around p-24">
        <ProfileIcon />
        <IntroductionText />
    </main>
  )
}
