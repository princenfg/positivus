import Logotypes from '../assets/logotypes.png'

function ClientLogos() {
    return (
        <section className="flex flex-row justify-center gap-6 px-4 py-3 ml-[30px] mr-[30px]">
            <div>
                <img src={Logotypes} alt="Client Logos" className="m-0-auto h-[48px] w-[1440px] shrink-0" />
            </div>
        </section>
    )
}

export default ClientLogos