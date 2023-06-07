import { useNavigate } from "react-router-dom";

const [authenticated, setauthenticated] = useState(null);
const navigate = useNavigate();

useEffect(() => {
  const loggedInUser = localStorage.getItem("profile");
  if (loggedInUser) {
    setauthenticated(loggedInUser);
  }
  console.log(loggedInUser);
}, []);

if (!authenticated) {
  navigate("/");
} else {
  navigate("/main");
}
