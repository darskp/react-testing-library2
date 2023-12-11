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
            let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/1`);
            if (data) {
                setData(data)
            }
        }
        catch {
            setError(true);
        }
        setLoading(false)
    }
    return (
        <div className="container">
            <span className="user">{data.name}</span>
            <form>
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Username" value={username} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" value={password} />
                <button onClick={handleSubmit} disabled={!password || !username}>{loading ? "Please wait..." : "Login "} </button>
                <span data-testid="error" style={{ visibility: error ? 'visible' : 'hidden' }}>Something went wrong!</span>
            </form>
        </div>
    );
}

export default Login;