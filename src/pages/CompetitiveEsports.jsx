import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

function CompetitiveEsports() {
  return (
    <div>
      <PageHeader
        eyebrow="Competitive Esports"
        title="Built for the global stage."
        subtitle="Patronum Esports represents elite talent in PMGC, PGC, and PDC 2025 with systems designed around discipline, review, and resilience."
      />

      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionCard
            eyebrow="Global Tournaments"
            title="From EWC Riyadh to PMGC and beyond."
            imageUrl="https://images.pexels.com/photos/907239/pexels-photo-907239.jpeg?auto=compress&cs=tinysrgb&w=800"
            body={[
              "Every tournament chapter is part of a long-term story. EWC 2025 is a closed chapter. PMGC is the next one: a chance to show what Patronum stands for on the biggest stage.",
              "Rosters are selected not just on mechanics but on mindset, communication, clutch decision-making, and the ability to adapt under pressure."
            ]}
          />

          <SectionCard
            eyebrow="Systems"
            title="Performance, review, and structure."
            imageUrl="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800"
            bodyList={[
              "Structured scrim schedules with clear goals per block.",
              "VOD review with role-based breakdowns and decision trees.",
              "Analytics on rotations, fights, and endgame consistency.",
              "Mental performance and burnout prevention built into season planning."
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default CompetitiveEsports