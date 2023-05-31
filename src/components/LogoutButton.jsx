import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {

  const { logout } = useAuth0();
  return (
    <button onClick={() => logout({logoutParam: {returnTo: window.location.origin}})} style={{ width: "10%" }}>
      Logout
    </button>
  );
};

export default LogoutButton
