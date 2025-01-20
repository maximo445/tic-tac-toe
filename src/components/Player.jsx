function Player({ type, current }) {
  const active = "border-b-4 border-b-green-500";
  return (
    <div
      className={`flex justify-between w-[180px] py-1 px-4 rounded-lg border border-slate-100 ${
        current ? active : ""
      }`}
    >
      <span className="text-lg font-bold">{type}</span>
      <span className="text-lg font-bold">-</span>
    </div>
  );
}

export default Player;
