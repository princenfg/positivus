import pic8 from "../assets/pic8.png";
import Button from "./Button";

function Banner() {
    return (
        <section className="flex items-center justify-between h-[300px] px-4 ml-[30px] mr-[30px] bg-[#f3f3f3] rounded-[30px] overflow-hidden">
            <div className="ml-5">
                <h1 className="text-2xl mb-[20px]">Let’s make things happen</h1>
                <h4 className="max-w-[420px] mb-[20px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</h4>
                <Button text="Get your free proposal" variant="dark" />
            </div>
            <div>
                <img src={pic8} alt="Banner" className="m-0-auto h-[300.27px] w-[270px] shrink-0 mr-[100px]"/>
            </div>
        </section>
    )
}

export default Banner