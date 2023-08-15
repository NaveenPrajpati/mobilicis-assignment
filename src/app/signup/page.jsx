"use client"
import { Context } from "@/context/Mycontext";
import { signup } from "@/services/authEndpoint";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");


    const {setUserData,setIsLogin}=useContext(Context)

    const router=useRouter()

  
    // form function
    const handleSubmit =  (e) => {
      e.preventDefault();
      signup({
        name,
        email,
        password,
        phone,
        address,
        answer,
      })
      .then(res=>{
        console.log(res.data.message)
             router.push('login')
      })
      .catch(res=>{
        console.log(res)
      })
    };

    return (
        <div>
              <div className=" bg-slate-300 mx-10">
        
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md  ring-2 ring-teal-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-teal-700 underline uppercase decoration-wavy">
          Registration 
        </h1>
        <form className="mt-6 mx-auto" onSubmit={handleSubmit}>
          
          <div className="mb-2">
            <label>
              <span className="text-gray-700">name</span>
              <input
                name="name"
                type="text"
                value={name}
              onChange={(e) => setName(e.target.value)}
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-teal-300
            focus:ring
            focus:ring-teal-200
            focus:ring-opacity-50
          "
                placeholder="abc"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                value={email}
              onChange={(e) => setEmail(e.target.value)}
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-teal-300
            focus:ring
            focus:ring-teal-200
            focus:ring-opacity-50
          "
                placeholder="abc@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your phone</span>
              <input
                type="password"
                name="text"
                value={phone}
              onChange={(e) => setPhone(e.target.value)}
                className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                placeholder="123"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your address</span>
              <input
                type="text"
                name="address"
                value={address}
              onChange={(e) => setAddress(e.target.value)}
                className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                placeholder="city, state , street"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Secret Answer</span>
              <input
                type="text"
                name="answer"
                value={answer}
              onChange={(e) => setAnswer(e.target.value)}
                className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                placeholder="*********"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your password</span>
              <input
                type="password"
                name="name"
                value={password}
              onChange={(e) => setPassword(e.target.value)}
                className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                placeholder="********"
              />
            </label>
          </div>
         
          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-teal-100
            bg-teal-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-teal-800
          "
            >
              Register
            </button>
          </div>
         
        </form>
      </div>
      </div>
      </div>
        </div>
    );
}