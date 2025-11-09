import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

function MediaCoverage() {
  return (
    <div>
      <PageHeader
        eyebrow="Media & Event Coverage"
        title="Turning tournaments into stories."
        subtitle="From EWC Riyadh to PMGC, the media and production team captures every chapter of global esports as cinematic experiences."
      />

      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionCard
            eyebrow="Storytelling"
            title="Cameras on the frontlines."
            imageUrl="https://images.pexels.com/photos/6898850/pexels-photo-6898850.jpeg?auto=compress&cs=tinysrgb&w=800"
            body={[
              "Content is built around story arcs: underdogs, rivalries, comebacks, and the pressure of the big stage.",
              "Highlights, recap reels, player features, and behind-the-scenes vlogs are produced to bring fans closer to each chapter."
            ]}
          />

          <SectionCard
            eyebrow="Coverage Map"
            title="From local to global."
            imageUrl="https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=800"
            bodyList={[
              "Coverage of EWC Riyadh and global events like PMGC.",
              "Plans to expand into PGC, PDC 2025, and other top-tier tournaments.",
              "Partnership-ready media packages for brands who want to show up during peak hype moments."
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default MediaCoverage