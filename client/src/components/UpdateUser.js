import { useEffect, useState } from "react";
import axios from "axios";
import { useParams ,useNavigate} from "react-router-dom";

const UpdateUser = () => {
    let navigate = useNavigate();
    const {id}=useParams()
    const [inpVal, setInpVal] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
      });
       
    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/user/${id}`).then((response) => {
            setInpVal(response.data);
        });
      }, []);


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInpVal({ ...inpVal, [name]: value });
  };
  const addUser = async(e) => {
    const { name, email, phone, role } = inpVal;
    e.preventDefault();
    try {
    const result= await axios.patch(`http://localhost:4000/api/v1/user/${id}`, {
        name,
        email,
        phone,
        role,
      })
      window.alert(result.data.message)
      navigate('/')
    } catch (error) {
      window.alert(error.response.data.message)
    }
  };

  return (
    <div className="py-5 container px-5 mx-auto flex justify-center ">
    <div>
    <h2 className="text-3xl text-purple-600 py-4 text-center border-b-4 border-indigo-600 mb-3 ">Update User Info</h2>
    <form class="w-full max-w-sm" onSubmit={addUser}>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              name="name"
              value={inpVal.name}
              onChange={handleInput}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="email"
              name="email"
              placeholder="Enter email"
              value={inpVal.email}
              onChange={handleInput}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Phone Number
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={inpVal.phone}
              onChange={handleInput}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
          <div class="inline-block relative w-64">
            <select
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={inpVal.role}
              name="role"
              onChange={handleInput}
            >
              <option>Student</option>
              <option>Teacher</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update User
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateUser;
