import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

function TechAntiCheat() {
  return (
    <div>
      <PageHeader
        eyebrow="Gaming Technology & Anti-Cheat"
        title="Behind the scenes, a deep tech division."
        subtitle="Patronum Esports integrates anti-cheat systems, AI-driven analytics, and fair-play monitoring to protect both players and tournaments."
      />

      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionCard
            eyebrow="Integrity"
            title="Protecting the game."
            imageUrl="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800"
            body={[
              "Fair play is non-negotiable. The tech division focuses on collaborating on anti-cheat pipelines, suspicious pattern detection, and tools that help tournaments keep matches clean.",
              "From data ingestion to dashboards, the aim is to make it easy for organizers and teams to see where risk appears and act fast."
            ]}
          />

          <SectionCard
            eyebrow="Performance Analytics"
            title="Turning data into decisions."
            imageUrl="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
            bodyList={[
              "AI-assisted breakdowns of player and team performance.",
              "Heatmaps for rotations, fights, and mistakes.",
              "Focus on helping coaches and in-game leaders make better calls based on real data."
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default TechAntiCheat