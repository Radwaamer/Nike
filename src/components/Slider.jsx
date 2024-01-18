import { sliderContent } from "../constants"
const Slider = ({setShoes,shoes}) => {
    return (
        <div className="flex justify-center items-center gap-4 absolute -bottom-9 left-1/2 -translate-x-1/2">
            {sliderContent.map((slide,index)=>{
                return(
                    <div className="cursor-pointer" key={index} onClick={()=>{setShoes(slide);}}>
                        <img className={`bg-[url('/assets/images/thumbnail-background.svg')] bg-cover rounded-xl 
                        ${slide.title==shoes.title?'border border-red-500 shadow-md shadow-slate-800':''}`} src={slide.src} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default Slider