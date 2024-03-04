"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import loginValidation from "@/schema/login.schema";
import { signIn } from "@/service/auth/signIn";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, message } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const submitHandler = async (data: any) => {
    message.loading("Login.....");
    console.log(data);
    try {
      const res = await signIn({
        email: data.email,
        password: data.password,
      });
      if (res?.ok && !res?.error) {
        message.destroy();
        message.success("Your request to login has been successful");
        setError(false);
      } else {
        setError(true);
        message.destroy();
        message.warning("Failed to Login! try again");
      }
    } catch (err: any) {
      setError(true);
      message.destroy();
      message.warning("Failed to Login! try again");
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/privet");
    }
  }, [session, router]);

  return (
    <div className="mx-auto">
      <div className="py-10">
        <div className="max-w-lg mx-auto">
          <Card>
            <h1 className="text-[2rem] mb-5 text-primary">Login</h1>

            <Form submitHandler={submitHandler} resolver={zodResolver(loginValidation)}>
              <div className="flex flex-col gap-4">
                <div>
                  <FormInput name="email" required label="Email" size="large" />
                </div>
                <div>
                  <FormInput name="password" required type="password" label="Password" size="large" />
                </div>

                {error && (
                  <p className="text-center">
                    <span className="text-red-500 underline ">Email or Password is wrong, please try again</span>
                  </p>
                )}

                <div className="flex justify-end">
                  <Button htmlType="submit" size="large">
                    Login
                  </Button>
                </div>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
