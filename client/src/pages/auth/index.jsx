/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommonForm from "@/components/common-form";
import { signInFormControls, signUpFormControls } from "@/config";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const handleTabChange = (value) => {
    setActiveTab(value);
  };
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
            <CommonForm formControls={signInFormControls} />
          </TabsContent>
          <TabsContent value="signup">
            <CommonForm formControls={signUpFormControls} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
