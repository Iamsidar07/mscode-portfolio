interface ButtonProps {
    title: string,
    type?: "button" | "submit" | "reset" | undefined
}
const Button = ({title,...otherprops}: ButtonProps)=>{
    return <button  
    {...otherprops}
    className='btn border px-[3.5rem] py-[1.25rem] rounded-full tracking-wider bg-[#fa8000] text-white font-medium  border-[#fa8000] hover:border-cyan-500 hover:bg-transparent hover:text-cyan-500 hover:rounded-full transition-all duration-200 ease-linear'>
    {title}
</button>
}

export default Button;