function SectionHeading({ title, text }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="bg-lime-300 px-2 rounded">{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default SectionHeading;