export function TwitterTendenceCard({
  tendence,
  publications,
  sectionTendence,
}) {
  return (
    <article className="tw-tendenceCard">
      <div className="tw-tendenceCard-info">
        <span className="tw-tendence-span">{sectionTendence}</span>
        <strong>{tendence}</strong>
        <span>{publications} mil publicaciones</span>
      </div>
    </article>
  );
}
