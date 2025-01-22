import { useState } from "react";

const initialState = [null, null, null, null, "X", null, null, null, null];

function Board() {
  const [player, setPlayer] = useState("X");
  const [ticBoard, setTicBoard] = useState(() => initialState);

  console.log(ticBoard);

  function turn(index) {
    if (ticBoard[index] === null) {
      setTicBoard((prev) => {
        const temp = [...prev];
        temp[index] = player;
        return temp;
      });
      setPlayer((prev) => {
        return prev === "X" ? "O" : "X";
      });
    }
  }

  return (
    <div className="w-full h-[220px] bg-green-500 flex items-center justify-center">
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        <div
          onClick={() => turn(0)}
          className="w-10 h-10 bg-slate-100 text-slate-900 flex justify-center items-center"
        >
          {ticBoard[0]}
        </div>
        <div className="w-10 h-10 bg-slate-100 text-slate-900 flex justify-center items-center">
          {ticBoard[1]}
        </div>
        <div className="w-10 h-10 bg-slate-100 text-slate-900 flex justify-center items-center">
          {ticBoard[2]}
        </div>
        <div className="w-10 h-10 bg-slate-100 text-slate-900 flex justify-center items-center">
          {ticBoard[3]}
        </div>
        <div className="w-10 h-10 bg-slate-100 text-slate-900 flex justify-center items-center">
          {ticBoard[4]}
        </div>
        <div className="w-10 h-10 bg-slate-100 text-slate-900 flex justify-center items-center">
          {ticBoard[5]}
        </div>
        <div className="w-10 h-10 bg-slate-100 text-slate-900 flex justify-center items-center">
          {ticBoard[6]}
        </div>
        <div className="w-10 h-10 bg-slate-100 text-slate-900 flex justify-center items-center">
          {ticBoard[7]}
        </div>
        <div className="w-10 h-10 bg-slate-100 text-slate-900 flex justify-center items-center">
          {ticBoard[8]}
        </div>
      </div>
    </div>
  );
}

export default Board;
