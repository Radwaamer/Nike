import PopularCard from "../../components/PopularCard"
import { PopularCards } from "../../constants"
const Popular = () => {
    return (
        <section id="products" className="mt-16 py-10">
            <div className="container">
                <h2>Our <span className="text-red-500">Popular</span> Products</h2>
                <p className="text-slate-500 pb-20">Experience top-notch quality and style with our sought-after selections.
                    <br />Discover a world of comfort, design, and value</p>
                    <div className="flex gap-5 flex-wrap justify-between">
                        {PopularCards.map(card=>{
                            return <PopularCard key={card.title} card={card} />
                        })}
                    </div>
            </div>
        </section>
    )
}

export default Popular