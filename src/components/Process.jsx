import SectionHeading from "./SectionHeading";
import ProcessItems from "./ProcessItems";

const processes = [
    {id: 1, title:"Consultation"},
    {id: 2, title:"Research and Strategy Development"},
    {id: 3, title:"Implementation"},
    {id: 4, title:"Monitoring and Optimization"},
    {id: 5, title:"Reporting and Communication"},
    {id: 6, title:"Continual Improvement"}
]

function Process() {
    return(
        <section className="px-4 py-12 ml-[30px] mr-[30px]">
        <SectionHeading title="Our Working Process" text="Step-by-Step Guide to Achieving Your Business Goals" />
        <div className="flex flex-col gap-6">
            {processes.map((process) => (
                <ProcessItems key={process.id} id={process.id} title={process.title} />
            ))}
        </div>
        </section>
    )
}

export default Process;