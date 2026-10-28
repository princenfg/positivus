import SectionHeading from "./SectionHeading";

function CaseStudies() {
    return(
        <section className="px-4 py-12 ml-[30px] mr-[30px]">
            <SectionHeading title="Case Studies" text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />
            <div className="mt-[30px] grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-gray-500 bg-[#1b1f27] text-white rounded-[40px] px-12 py-14" >

        <div className="px-8 first:pl-0 last:pr-0">
          <p className="mb-6 text-sm leading-relaxed">
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
          </p>
          <a href="#" className="text-[#b9ff66]">Learn more ↗</a>
        </div>

        <div className="px-8 first:pl-0 last:pr-0">
          <p className="mb-6 text-sm leading-relaxed">
            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <a href="#" className="text-[#b9ff66]">Learn more ↗</a>
        </div>

        <div className="px-8 first:pl-0 last:pr-0">
          <p className="mb-6 text-sm leading-relaxed">
            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
          </p>
          <a href="#" className="text-[#b9ff66]">Learn more ↗</a>
        </div>

      </div>
            </section>
    )
}

export default CaseStudies;