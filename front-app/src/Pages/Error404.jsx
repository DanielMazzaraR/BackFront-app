import { useNavigate } from "react-router-dom";


function Error404() {
    const navigateHook = useNavigate();

  const onBackButtonHandler = () => {
    navigateHook("/");
  };
  return (
    <div>
      <h1>Error 404 not found</h1>
      <p>Are you sure that the url copied is correct?</p>
      <button onClick={onBackButtonHandler}>Go to main page</button>
    </div>
  );
}
export default Error404;
