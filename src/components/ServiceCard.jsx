import arrowDark from "../assets/icon.png"; 
import arrowLight from "../assets/icon2.png"; 

const themes = {
  grey:  { card: "bg-[#F3F3F3] text-[#1b1f27]", arrow: arrowDark },
  green: { card: "bg-[#b9ff66] text-[#1b1f27]", arrow: arrowDark },
  dark:  { card: "bg-[#191A23] text-white",     arrow: arrowLight },
};

const highlights = {
  green: "bg-[#b9ff66] text-[#1b1f27]",
  white: "bg-white text-[#1b1f27]",
};

function ServiceCard({ title, icon, theme = "grey", highlight = "green" }) {
  const t = themes[theme];

  return (
    <div className={`flex justify-between rounded-3xl border border-b-4 border-[#1b1f27] p-6 ${t.card}`}>

      <div className="flex flex-col justify-between">
        <h3 className="text-xl font-medium leading-relaxed max-w-[160px]">
          <span className={`px-1 rounded box-decoration-clone ${highlights[highlight]}`}>
            {title}
          </span>
        </h3>

        <a href="#" className="flex items-center gap-3 text-sm">
          <img src={t.arrow} alt="" className="h-8 w-8" />
          Learn more
        </a>
      </div>

      <img src={icon} alt={title} className="w-[210px] h-[170px] object-contain" />
    </div>
  );
}

export default ServiceCard;