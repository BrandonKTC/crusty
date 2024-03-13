import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <>
      <div className="bg-video">
        <video className="bg-video-content" autoPlay muted loop>
          <source src="crusty.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="my-32 text-center sm:my-44 px-4">
        <h1 className="md:text-3xl text-xl font-semibold mb-8">
          The best pizza.
          <br />
          <span className="text-red-400">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        {username !== "" ? (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        ) : (
          <CreateUser />
        )}
      </div>
    </>
  );
}

export default Home;
