"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Description,
} from "@heroui/react";
import Link from "next/link";
import { FaCheck, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSearchParams, useRouter } from "next/navigation";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login successful");

      router.push(callbackUrl);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: callbackUrl, 
    });
  };

  return (
    <Card className="border mx-auto w-[85%] md:w-100 py-10 my-10">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-[90%] mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField isRequired minLength={8} name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters
          </Description>
          <FieldError />
        </TextField>

        <Button type="submit" className='bg-green-500 hover:bg-green-400'>
          <FaCheck />
          Sign In
        </Button>
      </Form>

      <p className="my-2 text-center">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-blue-600 font-medium">
          SignUp
        </Link>
      </p>

      <p className="text-center">Or</p>

      <Button onClick={handleGoogleSignIn} className="w-full">
        <FaGoogle /> Sign in with Google
      </Button>
    </Card>
  );
}