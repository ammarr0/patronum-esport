import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About Patronum Esports"
        title="More than a lineup. A movement."
        subtitle="Born from passion and precision, Patronum Esports sits inside the PatronumX ecosystem, connecting esports, creators, and technology into one unified story."
      />

      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionCard
            eyebrow="Foundation"
            title="Forged at the intersection of competition, innovation, and community."
            imageUrl="https://images.pexels.com/photos/907239/pexels-photo-907239.jpeg?auto=compress&cs=tinysrgb&w=800"
            body={[
              "Patronum Esports started with a simple belief: that a team from Pakistan can stand shoulder-to-shoulder with the world's best, not just in raw skill but in how it thinks about talent, content, and technology.",
              "Under the PatronumX ecosystem, we bridge pro rosters, creators, engineers, and storytellers. Every scrim, LAN, edit, and line of code feeds into one idea: we announce ourselves to the world by the way we play, build, and represent."
            ]}
          />

          <SectionCard
            eyebrow="Ecosystem"
            title="A unified platform for players, creators, and brands."
            imageUrl="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800"
            body={[
              "Esports, content, and operations are treated as one cycle. Competitive results drive storylines. Storylines fuel community. Community unlocks opportunities for creators and brands. Tech supports everything in the background.",
              "Patronum Esports offers structured support: performance coaching, media training, content playbooks, analytics, and brand-aligned collaborations, so that anyone under our banner can grow faster and more sustainably."
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default About