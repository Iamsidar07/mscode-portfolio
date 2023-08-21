interface ButtonProps {
    title: string
}
const Button = ({title,...otherprops}: ButtonProps)=>{
    return <button  
    type='submit' 
    {...otherprops}
    className='border px-[21px] py-[16px] rounded-full tracking-wider bg-[#fa8000] text-white font-medium  border-[#fa8000] hover:bg-[#fff] hover:text-[#fa8000] hover:rounded-full transition-all duration-200 ease-linear text-sm'>
    {title}
</button>
}

export default Button;