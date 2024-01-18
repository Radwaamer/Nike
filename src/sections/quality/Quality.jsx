import Button from '../../components/Button';

const Quality = () => {
    return (
        <section id='about' className="quality py-16">
            <div className="container flex justify-center gap-8 lg:justify-between flex-col lg:flex-row items-center">
                <div className='flex-1'>
                    <h2>We Provide You <span className='text-red-500'>Super Quality</span> Shoes</h2>
                    <p className='text-slate-500'>Ensuring premium comfort and style, our meticulously 
                        crafted footwear is designed to elevate your experience, 
                        providing you with unmatched quality, innovation, and a 
                        touch of elegance.</p>
                    <p className='text-slate-500 my-7'>Our dedication to detail and excellence ensures your satisfaction</p>
                    <Button text={"View details"}/>
                </div>
                <div className='flex-1 flex justify-center lg:justify-end'>
                    <img src="../../../public/assets/images/shoe8.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Quality;