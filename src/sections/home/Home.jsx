import { useState } from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { statistics, HomeShoe } from "../../constants";

const Home = () => {
    const [shoes,setShoes]=useState(HomeShoe[0]);
    return (
        <section id="home" className="container min-h-screen grid items-center lg:grid-cols-2">
            <div className="py-8 lg:py-0">
                <p className="text-xl text-red-500">Our Summer Collection</p>
                <div>
                    <h1 className="text-7xl font-semibold mb-5 mt-8 relative z-10"><span className="whitespace-nowrap bg-white">The New Arrival</span> <br /> <span className=" whitespace-nowrap bg-white"><span className="text-red-500">Nike</span> Shoes</span></h1>
                </div>
                <p className="text-slate-500 mb-10">Discover stylish Nike arrivals quality comfort, <br />
                and innovation for your active life</p>
                <Button text={"Shop now"} img={"../../../public/assets/icons/arrow-right.svg"}/>
                <div className="flex gap-11 mt-12">
                    {statistics.map(stat=>{
                        return (
                            <div key={stat.title}>
                                <p className="font-semibold text-xl">{stat.value}</p>
                                <span className="text-slate-500 text-sm font-medium">{stat.title}</span>
                            </div>)
                    })}
                </div>
            </div>
            <div className="bg-home h-full w-full  flex justify-center items-center bg-cover relative">
                {HomeShoe.map(shoe=>{
                    if(shoe.title==shoes.title){
                        return(
                            <img key={shoe.title} src={shoe.src} alt={shoe.title} />
                        )
                    }
                })}
                <Slider setShoes={setShoes} shoes={shoes}/>
            </div>
        </section>
    )
}

export default Home