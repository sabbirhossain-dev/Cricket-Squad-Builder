import { FaUser } from "react-icons/fa";
import type { PlayerType } from "../../type/PlayerType";
import { IoFlag } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

type PlayerPropsType = PlayerType & {
  dollars: number;
  setDollars: Dispatch<SetStateAction<number>>;
};

const PlayerCard = ({
  image,
  role,
  name,
  age,
  battingStyle,
  bowlingStyle,
  rating,
  price,
  origin,
  dollars,
  setDollars
}: PlayerPropsType) => {

  const [choosePlayer,setChoosePlayer]= useState(false)

  const handleChoosePlayer =()=>{
    if(dollars < price){
      toast.error('Insufficient balance')
    }
    else{
    setChoosePlayer(true)
    setDollars((prevDollar)=>prevDollar - price)
    toast.success(`${name} has joined your squad!`)
    }
  }
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ">
      
      {/* Image */}
      <div className="relative overflow-hidden cursor-grab">
        <img
          src={image}
          alt={name}
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient from-black/50 via-transparent to-transparent" />

        {/* Role */}
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-green-600 shadow-sm backdrop-blur">
          {role}
        </span>

        {/* Player name on image */}
        <div className="absolute bottom-3 left-3 text-blue-800 opacity-90 bg-white py-1 px-3 rounded-md">
          <div className="flex items-center gap-2">
            <FaUser className="text-sm" />
            <h3 className="text-md font-bold">{name}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Origin & Rating */}
        <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <IoFlag className="text-green-500" />
            <span>{origin}</span>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-sm font-semibold text-yellow-600">
            <FaStar />
            <span>{rating}</span>
          </div>
        </div>

        {/* Player Information */}
        <div className="space-y-3">

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Age</span>
            <span className="font-semibold text-gray-900">{age}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Batting Style</span>
            <span className="text-right text-sm font-medium text-gray-500">
              {battingStyle}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Bowling Style</span>
            <span className="text-right text-sm font-medium text-gray-500">
              {bowlingStyle}
            </span>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Player Price
            </p>
            <p className="mt-1 text-xl font-bold text-gray-900">
              ${price}
            </p>
          </div>

          <button type="button"  className={`rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300
            ${
              choosePlayer
                ? "cursor-not-allowed bg-gray-600 text-gray-500 opacity-60"
                : "cursor-pointer bg-green-500 hover:bg-green-600 hover:shadow-md active:scale-95"
            }`} onClick={handleChoosePlayer} disabled={choosePlayer}>
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
