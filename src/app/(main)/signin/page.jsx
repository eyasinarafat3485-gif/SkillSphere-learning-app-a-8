"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaCheck, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
// import toast from 'react-hot-toast';

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/"

    });

    if (error) {
      console.error("Auth Error:", error.message);
      toast.error(error.message);
    } else {
      toast.success("Successfully sign in done:", data);
    }
  };
  
  const handleGoogleSignIn= async()=>{
    await authClient.signIn.social({
      provider: "google",
      
      
    })
  }
  

// const handleGoogleSignIn = async () => {
//   try {
//     const res = await authClient.signIn.social({
//       provider: "google",
//     });

//     
//     if (res) {
//       toast.success("Login done with Google ");
//     }

//   } catch (error) {
//     toast.error("Google login failed try again!");
//     console.error(error);
//   }
// };

  return (
    <Card className="border mx-auto w-[85%] md:w-100 py-10 my-10">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex mx-auto flex-col gap-4" onSubmit={onSubmit}>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <FaCheck />
            Sign In
          </Button>
        </div>
      </Form>
        <p className='my-2 text-center'>Don,t have an account? <Link href={'/signup'} className='text-blue-600 font-medium'>SignUp</Link></p>

      <p className="text-center ">Or</p>
      <Button onClick={handleGoogleSignIn} className='w-full'><FaGoogle />Sign in with google.</Button>

    
    </Card>
  );
}