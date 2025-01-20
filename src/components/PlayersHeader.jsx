import Player from "./Player";

function PlayersHeader() {
  return (
    <div className="flex justify-around p-8">
      <Player type={"X"} current={true} />
      <Player type={"O"} />
    </div>
  );
}

export default PlayersHeader;
