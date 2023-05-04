import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Tests = () => {
  const [isDeactivated, setIsDeactivated] = useState(true);
  const { user } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    if (user?.result?.status === "pending") {
      document.body.style.opacity = isDeactivated ? 0.5 : 1;
      document.body.style.pointerEvents = isDeactivated ? "none" : "auto";
    }else{
        document.body.style.opacity = isDeactivated ? 1 : 0;
        document.body.style.pointerEvents = isDeactivated ? "auto" : "none";   
    }
  }, [isDeactivated]);

  function handleActivate() {
    setIsDeactivated(false);
  }

  return (
    <div>
      {isDeactivated && <></>}

      {!isDeactivated && (
        <div>
          <h2>Welcome to the page!</h2>
          <p>You can interact with all the content now.</p>
        </div>
      )}
    </div>
  );
};

export default Tests;
