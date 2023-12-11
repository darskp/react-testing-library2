import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/1`);
            let data = response.data;
            setData(data)
            console.log(response);
        }
        catch (e) {
            setError(true);
            console.log(e);
        }
        setLoading(false)
    }
    return (<>
        <div className="container">
            <span className="user">{data.name ?? ""}</span>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Username" value={username} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" value={password} />
                <button disabled={!password || !username}>{loading ? "Please wait..." : "Login "} </button>
                <span data-testid="error" style={{ visibility: error ? 'visible' : 'hidden' }}>Something went wrong!</span>
            </form>
        </div>
    </>);
}

export default Login;