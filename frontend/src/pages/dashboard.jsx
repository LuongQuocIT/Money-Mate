import React, { useEffect, useState } from "react";
import api from "../libs/apiCall";
import toast from "react-hot-toast";
import Loading from "../components/loading";
import Info from "../components/info";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchDashboardStats = async () => {
    const URL = `/transaction/dashboard`;
    try {
      const { data } = await api.get(URL);
      setData(data);
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          "Something unexpected happened. Try again later."
      );
      if (error?.response?.data?.status === "auth_failed") {
        localStorage.removeItem("user");
        window.location.reload();
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    setIsLoading(true);
    fetchDashboardStats();
  },[])
  if(isLoading){
    return (
      <div className="flex items-center justify-center w-full h-[80vh]">
        <Loading />
      </div>
    )
  }
  return <div className="px-0 md:px-5 2xl:px-20">
    <Info title="Dashboard" subTitle={"Monitor your financial activities"}/>

  </div>
};

export default Dashboard;
