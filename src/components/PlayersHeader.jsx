import Player from "./Player";

function PlayersHeader() {
  return (
    <div className="flex justify-around p-8">
      <Player type={"X"} />
      <Player type={"O"} />
    </div>
  );
}

export default PlayersHeader;
