import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import Header from "./Header";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-[10%]">
        <h1 className="font-bold text-3xl">Something went wrong 😢</h1>
        <p className="my-5 text-red-400">{error.message || error.data}</p>
        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    </div>
  );
}

export default Error;
