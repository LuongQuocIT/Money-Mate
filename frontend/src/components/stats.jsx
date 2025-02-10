import React from "react";
import { BsCurrencyDollar, BsCashCoin } from "react-icons/bs";
import {SiCashapp} from "react-icons/si"
import { Card } from "./ui/card";
const ICON_STYLES = [
  "bg-blue-300 text-blue-800",
  "bg-emerald-300 text-emerald-800",
  "bg-rose-300 text-rose-800",
];
const stats = ({ dt }) => {
  const data = [
    {
      label: "Total Balance",
      amount: dt?.balance,
      increase: 10.9,
      icon: <BsCurrencyDollar size={26} />,
    },
    {
        label: "Total Income",
        amount: dt?.income,
        increase: 8.9,
        icon: <BsCashCoin size={26} />, 
    },
    {
        label: "Total Expense",
      amount: dt?.expense,
      increase: 10.9,
      icon: <SiCashapp size={26} />,
    }
  ];
  const ItemCard=({item,index})=>{
    return (
        <Card className="flex items-center justify-between w-full h-48 gap-5 px-4 py-12 shadow-lg 2xl:min-x-96 2xl:px-8">
            
        </Card>
    )
  }
  return <div></div>;
};

export default stats;
