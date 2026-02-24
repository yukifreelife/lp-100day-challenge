import { lpContent } from '../../data/lpContent';
import { ReviewCard } from '../ui/lp/ReviewCard';
import { SectionHeading } from '../ui/lp/SectionHeading';
import { StatCard } from '../ui/lp/StatCard';

export function ReviewsSection() {
  return (
    <section className="bg-lp-panel py-lp-section">
      <div className="lp-shell">
        <SectionHeading
          label={lpContent.reviews.label}
          title={lpContent.reviews.title}
          description={lpContent.reviews.description}
        />

        <div className="mt-lp-2xl grid gap-lp-lg sm:grid-cols-2 xl:grid-cols-4">
          {lpContent.reviews.stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} tone={stat.tone} />
          ))}
        </div>

        <div className="mt-lp-2xl grid gap-lp-lg xl:grid-cols-3">
          {lpContent.reviews.list.map((review) => (
            <ReviewCard
              key={review.name}
              avatar={review.avatar}
              name={review.name}
              profile={review.profile}
              body={review.body}
              stars={review.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
