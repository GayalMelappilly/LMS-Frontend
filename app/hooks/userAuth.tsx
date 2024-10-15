import { useSelector } from "react-redux";

export default function UserAuth() {
  const { user } = useSelector((state: any) => state.auth);
  
  return (
    <div>
      {user ? (
        <p>User is authenticated</p>
      ) : (
        <p>User is not authenticated</p>
      )}
    </div>
  );
}