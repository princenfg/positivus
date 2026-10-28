import plus from "../assets/plus.png";
import minus from "../assets/minus.png";

const highlights = {
  green: "bg-[#b9ff66] text-[#1b1f27]",
  white: "bg-[#f3f3f3] text-[#1b1f27]",
};

function ProcessItem({ id, icon, title, text, highlight = "white", isOpen = false }) {
    return(
        <section className={`flex flex-row justify-between rounded-3xl border border-b-4 border-[#1b1f27] p-6 ${highlights[highlight]}`}>
            <div className="flex justify-between">
                <div className="flex justify-between items-center gap-4">
                    <span>{id}</span>
                    <span className="text-xl font-medium leading-relaxed">{title}</span>
                </div>
            </div>
            <div>
                <img src={plus}/>
            </div>
        </section>
    )
}

export default ProcessItem;