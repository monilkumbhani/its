import React, { useState } from "react";
import "./style.css";
// import { CpuChipIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Card,
  Input,
  // Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function signup() {

  const handleChange = async (e) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();


    // const response = await fetch("/api/sign-up", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // if (response.ok) {
    //   const datas = await response.json();
    //   console.log("Data:", datas);
    //   toast.success("Signup successful!");
    //   navigate("/sign-in");
    // } else {
    //   console.error("Error:", response.status, response.statusText);
    //   toast.error("Signup failed: " + response.statusText);
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
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:mt-4"
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
                  id="name"
                  color="gray"
                  size="lg"
                  type="text"
                  placeholder="Name"
                  className="p-3 mt-2 rounded-lg !w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                  labelProps={{}}
                  onChange={handleChange}
                />

                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  type="email"
                  placeholder="E-mail"
                  className="p-3 mt-2 rounded-lg !w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                  labelProps={{}}
                  onChange={handleChange}
                />
              

                <Input
                  id="password"
                  color="gray"
                  size="lg"
                  type="password"
                  placeholder="password"
                  className="p-3 rounded-lg !w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200 mt-2"
                  labelProps={{}}
                  onChange={handleChange}
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
            <p>Don't have a account please</p>
            <div className="justify-evenly pl-1 text-blue-400">
              <Link to="/sign-in">Sign in</Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default signup;
