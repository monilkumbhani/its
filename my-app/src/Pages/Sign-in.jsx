import React from "react";
import "./style.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from "../Redux/UserSlice.js";

// import { useDispatch } from "react-redux";

import {
  Card,
  Input,
  // Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
// import { CpuChipIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function login() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   // dispatch(signInStart());
    //   const res = await fetch("/api/sign-in", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(value),
    //   });
    //   if (res.ok) {
    //     toast.success("Log in successfully");
    //     navigate("/");
    //   } else {
    //     console.error("Error:", res.status, res.statusText);
    //     toast.error("Signup failed: " + res.statusText);
    //   }
    //   localStorage.setItem("sign",JSON.stringify(value.email));
    // } catch (error) {
    //   toast.error("Failed to log in: " + error.message);
    //   // dispatch(signInFailure(error.message));

    // }

   
  };

  return (
    <>
      <div className="container mx-auto lg:w-1/3 md:w-1/2 p-10 justify-center text-center">
        <Card
          shadow={false}
          className="md:px-14 md:py-14 py-8 border border-gray-300 next "
        >
          <CardHeader shadow={false} floated={false} className="text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 !text-3xl lg:text-4xl"
            >
              Login
            </Typography>
          </CardHeader>
          <CardBody>
            <form
              action=""
              className="flex flex-col gap-4 md:mt-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Email And Password
                  </Typography>
                </label>

                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="p-3 mt-4 rounded-lg !w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                  onChange={handleChange}
                  labelProps={{}}
                />

                <Input
                  id="password"
                  color="gray"
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="password"
                  className="p-3 rounded-lg !w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200 mt-2"
                  onChange={handleChange}
                  labelProps={{}}
                />
                <button
                  size="lg"
                  className="btn btn-circle btn-neutral w-full mt-5 p-3 rounded-xl"
                >
                  Submit
                </button>
              </div>
              <label size="lg" color="gray">
                Continue With
              </label>
              {/* <Button
                variant="outlined"
                size="lg"
                className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
              >
                <img
                  src={`https://www.material-tailwind.com/logos/logo-google.png`}
                  alt="google"
                  className="h-6 w-6"
                />{" "}
                sign in with google
              </Button>
              <Button
                variant="outlined"
                size="lg"
                className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
              >
                <CpuChipIcon className="h-6 w-6" />
                Github
              </Button> */}
            </form>
          </CardBody>
          <div className=" flex text-center justify-center mt-4">
            <p>alredy have a account please</p>
            <div className="justify-evenly pl-1 text-blue-400">
              <Link to="/sign-up">Sign Up</Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default login;
