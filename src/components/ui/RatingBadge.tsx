import { Star } from "lucide-react";

export default function RatingBadge({
  rating = 4.9,
  totalLabel = "12,000+ orders",
}: {
  rating?: number;
  totalLabel?: string;
}) {
  const filledStars = Math.round(rating);

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-200 dark:border-zinc-800 bg-blue-50 dark:bg-zinc-900">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < filledStars
                ? "fill-amber-500 text-amber-500"
                : "fill-transparent text-zinc-300 dark:text-zinc-700"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        {rating.toFixed(1)}
      </span>
      <span className="text-xs text-zinc-500">· {totalLabel}</span>
    </div>
  );
}