import { Card } from './Card';
import { LpIcon } from './LpIcon';

type ReviewCardProps = {
  avatar: string;
  name: string;
  profile: string;
  body: string;
  stars: number;
};

export function ReviewCard({ avatar, name, profile, body, stars }: ReviewCardProps) {
  return (
    <Card variant="lifted" className="relative flex flex-col gap-lp-md">
      <div className="flex items-start justify-between gap-lp-lg">
        <div className="flex items-center gap-lp-md">
          <img
            src={avatar}
            alt={`${name}のプロフィール写真`}
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
            className="h-lp-icon w-lp-icon rounded-full"
          />
          <div>
            <p className="text-lp-h3 font-lp-bold text-lp-text">{name}</p>
            <p className="text-lp-small text-lp-muted">{profile}</p>
          </div>
        </div>
        <LpIcon name="quote" className="text-lp-pink" />
      </div>
      <p className="text-lp-lead text-lp-pink">{'★'.repeat(stars)}</p>
      <p className="text-lp-lead text-lp-text">{body}</p>
    </Card>
  );
}
