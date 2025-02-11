import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 cursor-pointer" 
    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;