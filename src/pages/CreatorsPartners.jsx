import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

function CreatorsPartners() {
  return (
    <div>
      <PageHeader
        eyebrow="Creators & Brands"
        title="Creators deserve platforms, not limits."
        subtitle="The creator management wing connects gaming storytellers with tech and lifestyle brands in ways that feel authentic, not forced."
      />

      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionCard
            eyebrow="For Creators"
            title="Grow with structure, not guesswork."
            imageUrl="https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=800"
            body={[
              "As a creator under Patronum Esports, you get more than a logo. The team works with you on content pillars, posting rhythms, collaborations, and brand positioning, while you stay in control of your voice."
            ]}
            bodyList={[
              "Content strategy aligned with your strengths.",
              "Thumbnail, title, and hook support for key uploads.",
              "Clear and transparent deal structures for brand campaigns."
            ]}
          />

          <SectionCard
            eyebrow="For Brands"
            title="Partnerships with measurable impact."
            imageUrl="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
            body={[
              "Brands are integrated into the gaming space with respect for the community. Instead of random shoutouts, the focus is on longer-term stories that link your product with real gaming moments.",
              "From sponsored segments and tournaments to integrated campaigns across multiple creators, partnerships are designed so that they can be measured, iterated, and scaled."
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default CreatorsPartners