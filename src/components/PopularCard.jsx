const PopularCard = ({card}) => {
    const rate=[];
    for(let i=0; i<card.rate;i++){
        rate.push(
            <img key={i} src="../../public/assets/icons/star.svg" alt="star" />
        )
    }
    return (
        <div className="text-lg cursor-pointer hover:scale-105 transition-all">
            <img src={card.img} alt={card.title} />
            <div className="flex items-center gap-2 mt-7 mb-3">
                {rate}
                <span>( {card.rate} )</span>
            </div>
            <h3>{card.title}</h3>
            <span className="text-red-500 font-semibold">{card.price}</span>
        </div>
    )
}

export default PopularCard