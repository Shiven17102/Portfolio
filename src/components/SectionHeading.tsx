export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="text-teal text-[13px] font-semibold mb-2.5">{eyebrow}</div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-[20ch]">
        {title}
      </h2>
    </div>
  );
}
