import ServiceCard from "../../components/ServiceCard";
import { ServiceCards } from "../../constants";

const Services = () => {
    return (
        <section className="container flex justify-between gap-8 py-10">
            {ServiceCards.map(service=><ServiceCard key={service.title} service={service}/>)}
        </section>
    )
}

export default Services;