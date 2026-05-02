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
import { useRouter } from "next/navigation";
import { FaCheck, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, image, email, password);

    const { data, error } = await authClient.signUp.email({
      name, image, email, password
    })
    if (error) {
      console.error("Auth Error:", error.message);
      toast.error(error.message);
    }
    else if (!error) {
      toast.success("Successfully sign up done:", data);
      router.push("/signin")
    }
    console.log({ data, error });


  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    })
  }

  return (
    <Card className="border mx-auto w-[85%] md:w-100 py-10 my-10">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form className="flex mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

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
          <Button type="submit" className='bg-pink-500 hover:bg-pink-400'>
            <FaCheck />
            Sign Up
          </Button>
        </div>
      </Form>
      <p className='my-2 text-center'>Already have an account? <Link href={'/signin'} className='text-blue-600 font-medium'>Sign In</Link></p>

      <p className="text-center ">Or</p>
      <Button onClick={handleGoogleSignIn} className='w-full'><FaGoogle />Sign in with google.</Button>
    </Card>
  );
}