// import { useFormik } from "formik"
import { useState } from "react"

export default function Contact(){
    // const formik = useFormik({
    //     initialValues:{
    //         userName: "",
    //         userAge: "",
    //         userEmail: "",
    //         userPassword: "",
    //     },
    //     onSubmit: handle
    // })
    // function handle(e){
    //     e.preventDefault()
    // }
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return<>
    <div className="container p-4">
    <h2 className="text-center font-bold text-back text-4xl">CONATCT SECTION</h2>
        <div className="line flex items-center justify-center w-full">
            <div className="w-[100px] h-[2px] bg-black"></div>
            <i className="fa-solid fa-star text-black mx-4"></i>
            <div className="w-[100px] h-[2px] bg-black"></div>
        </div>
        <div className="form  w-[100%] p-3 mx-auto mt-5 flex flex-col justify-center items-center">
            <form 
            // onSubmit={formik.handleSubmit} 
            action="" className=" w-[80%] flex flex-col justify-center items-center gap-10">
                <div className=" w-[80%] relative">
                {name ?<label 
                    // className=" username text-blue-500 px-3 pb-11 absolute bottom-[-31px]"
                    className=" absolute text-blue-500 text-[20px] origin-[0] py-3 px-3 duration-300 transform -translate-4 scale-75 top-[-25px]" >userName :
                    </label> : ""}
                    <input 
                    // value={formik.values.userName}
                    // onChange={formik.handleChange} 
                    name="userName"
                    className="name w-[100%] border-b-[1px] py-3 px-3 outline-none" type="text" 
                    placeholder="userName"
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    />
                    
                </div>
                <div className="age relative w-[80%]">
                {age ?<label 
                    className=" absolute text-blue-500 text-[20px] origin-[0] py-3 px-3 duration-300 transform -translate-4 scale-75 top-[-25px]" >userAge :
                    </label> : ""}
                    <input 
                    // value={formik.values.userAge} onChange={formik.handleChange} 
                    name="userAge" 
                    className="w-[100%] border-b-[1px] py-3 px-3 outline-none" type="text" 
                    placeholder="userAge"
                    onChange={(e)=>{
                        setAge(e.target.value)
                    }} />
                </div>


                <div className="email relative w-[80%]">
                {email ?<label 
                    className=" absolute text-blue-500 text-[20px] origin-[0] py-3 px-3 duration-300 transform -translate-4 scale-75 top-[-25px]" >userEmail :
                    </label> : ""}
                    <input
                    //  value={formik.values.userEmail} onChange={formik.handleChange} 
                    name="userEmail" 
                    className="w-[100%] border-b-[1px] py-3 px-3 outline-none" type="text" 
                    placeholder="userEmail"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />   
                </div>


                <div className="password relative w-[80%]">
                {password ?<label 
                    className=" absolute text-blue-500 text-[20px] origin-[0] py-3 px-3 duration-300 transform -translate-4 scale-75 top-[-25px]" >userPassword :
                    </label> : ""}
                    <input
                    //  value={formik.values.userPassword} onChange={formik.handleChange} 
                    name="userPassword" 
                    className="w-[100%] border-b-[1px] py-3 px-3 outline-none" type="text" 
                    placeholder="userPassword"
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    />
                </div>
            <button className="bg-[#1abc9c] py-2 ms-24 px-3 self-start rounded-[5px] m-[2px]"
            type="submit">send Message</button>
            </form>
        </div>
    </div>
        </>}

