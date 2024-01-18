const ServiceCard = ({service}) => {
    return (
        <div className="px-8 py-12 shadow-2xl rounded-xl cursor-pointer hover:scale-105 transition-all">
            <img className="bg-red-500 rounded-full p-3" src={service.icon} alt={service.title} />
            <h3 className="font-bold pt-6 text-2xl">{service.title}</h3>
            <p className="text-slate-500">{service.text}</p>
        </div>
    )
}

export default ServiceCard;