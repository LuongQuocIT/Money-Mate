import React, { useEffect, useState } from "react";
import * as z from "zod";
import useStore from "../../store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import SocialAuth from "../../components/social-auth";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Seperator from "../../components/separator";
import Input from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { BiLoader } from "react-icons/bi";
import { toast } from "react-hot-toast";
import api from "../../libs/apiCall";

const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required"),
});
const SignIn = () => {
  const { user } = useStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  useEffect(() => {
    user && navigate("/");
  }, [user]);
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { data: res } = await api.post("/auth/sign-in", data);
      if (res?.user) {
        toast.success("Đăng nhập thành công");
        setTimeout(() => {
          navigate("/overview");
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen py-10">
      <Card className=" w-[400px] bg-white dark:bg-black/20 shadow-md overflow-hidden ">
        <div className="p-6 md:-8">
          <CardHeader className="py-0">
            <CardTitle className="mb-8 text-center dark:text-center">
              Đăng nhập
            </CardTitle>
          </CardHeader>
          <CardContent className="P-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="mb-8 space-y-6">
                <SocialAuth isLoading={loading} setLoading={setLoading} />
                <Seperator />
                <Input
                  disabled={loading}
                  id="email"
                  label="Email"
                  name="email"
                  register={register}
                  type="text"
                  placeholder="Nhập email"
                  error={errors?.email?.message}
                  {...register("email")}
                  className="text-sm border dark:border-gray-800 dark:bg-transparent dark:placeholder:text-gray-700 dark:text-gray-400 dark:outline-none"
                />
                <Input
                  disabled={loading}
                  id="password"
                  label="Mật khẩu"
                  name="password"
                  register={register}
                  type="password"
                  placeholder="Nhập mật khẩu"
                  error={errors?.password?.message}
                  {...register("password")}
                  className="text-sm border dark:border-gray-800 dark:bg-transparent dark:placeholder:text-gray-700 dark:text-gray-400 dark:outline-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-violet-800"
                disabled={loading}
              >
                {loading ? (
                  <BiLoader className="text-2xl text-white animate-spin" />
                ) : (
                  "Đăng nhập"
                )}
              </Button>
            </form>
          </CardContent>
        </div>
        <CardFooter className="justify-center gap-2">
          <p className="text-sm text-gray-600">Bạn chưa đã có tài khoản?</p>
          <Link
            to="/sign-up"
            className="text-sm font-semibold text-violet-600 hover:underline"
          >
            Đăng ký
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
