import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";

const services = [
  { id: 1, title: "Search engine optimization", icon: pic1, theme: "grey",  highlight: "green" },
  { id: 2, title: "Pay-per-click advertising",  icon: pic2, theme: "green", highlight: "white" },
  { id: 3, title: "Social Media Marketing",     icon: pic3, theme: "dark",  highlight: "white" },
  { id: 4, title: "Email Marketing",            icon: pic4,     theme: "grey",  highlight: "green" },
  { id: 5, title: "Content Creation",           icon: pic5,   theme: "green", highlight: "white" },
  { id: 6, title: "Analytics and Tracking",     icon: pic6, theme: "dark",  highlight: "green" },
];

function Services() {
  return (
    <section className="px-4 py-12 ml-7.5 mr-[30px]">
      <SectionHeading title="Services" text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {services.map((s) => (
          <ServiceCard
            key={s.id}
            title={s.title}
            icon={s.icon}
            theme={s.theme}
            highlight={s.highlight}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;