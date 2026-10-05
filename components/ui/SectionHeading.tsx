type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
  };
  
  export default function SectionHeading({
    eyebrow,
    title,
    description,
  }: SectionHeadingProps) {
    return (
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#1474ff]" />
  
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b8cff]">
            {eyebrow}
          </span>
        </div>
  
        <h2 className="text-[40px] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-[50px] lg:text-[60px]">
          {title}
        </h2>
  
        {description && (
          <p className="mt-6 max-w-[520px] text-[13px] leading-7 text-white/45">
            {description}
          </p>
        )}
      </div>
    );
  }