import hero from '../assets/hero.png'
import Button from './Button.jsx'

function Hero() {
    return (
        <section className="flex flex-row justify-around gap-6 px-4 py-3 ml-[30px] mr-[30px]">
            <div className="flex flex-col gap-4">
                <h1 className="max-w-[420px] text-5xl font-medium leading-tight">Navigating the digital landscape for success</h1>
                <p className="max-w-[420px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <Button text="Book a consultation" variant="dark" />
            </div>
            <div>
                <img src={hero} alt="Hero" className="m-0-auto h-[515px] w-[600.46px] shrink-0" />
            </div>
        </section>
    )
}

export default Hero