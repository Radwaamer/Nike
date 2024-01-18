const Button = ({text , img}) => {
    return (
        <button className="rounded-full py-2 px-4 bg-red-500 text-white 
        flex justify-center items-center gap-3">
            <p>{text}</p>
            {img&&<img src={img} alt="" />}
        </button>
    )
}

export default Button