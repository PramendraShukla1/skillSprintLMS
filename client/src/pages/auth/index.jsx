/* eslint-disable */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommonForm from "@/components/common-form";
import { signInFormControls, signUpFormControls } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthContext } from "@/context/auth-context";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);
  const handleTabChange = (value) => {
    setActiveTab(value);
  };
  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }
  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== "" &&
      signUpFormData.userName !== ""
    );
  }
  return (
    <div className="flex flex-col min-h-screen p-2">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b z-50 ">
        <Link to={"/"} className="flex items-center justify-center">
          <img src={logo} className="w-full h-10" />
        </Link>
      </header>

      <div className="flex items-center justify-center min-h-screen bg-background flex-col gap-20">
        <div className="flex flex-col gap-5 justify-center items-center mt-10 lg:mt-0 md:mt-0">
          <img
            src={logo}
            alt="logo"
            className="lg:w-fit lg:h-fit hidden lg:flex md:flex"
          />
          <h4 className="text-5xl font-bold text-center leading-[70px] ">
            Learning Management <br /> System
          </h4>
        </div>
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Login</TabsTrigger>
            <TabsTrigger value="signup">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4 ">
              <CardHeader className="flex justify-center items-center text-xl">
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                  Register, if you don't have an account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signInFormControls}
                  buttonText={"Login"}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  isButtonDisabled={!checkIfSignInFormIsValid()}
                  handleSubmit={handleLoginUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="p-6 space-y-4 ">
              <CardHeader className="flex justify-center items-center text-xl">
                <CardTitle>Register to new account</CardTitle>
                <CardDescription>
                  Login, if you already have an account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signUpFormControls}
                  buttonText={"Register"}
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  isButtonDisabled={!checkIfSignUpFormIsValid()}
                  handleSubmit={handleRegisterUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
