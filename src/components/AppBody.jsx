import PlayerHeader from "./PlayersHeader";
import Board from "./Board";

function AppBody() {
  return (
    <div className="w-[600px] h-96 bg-gray-900 rounded-lg border border-gray-200">
      <PlayerHeader />
      <Board />
    </div>
  );
}

export default AppBody;
