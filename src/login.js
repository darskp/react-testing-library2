const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (<>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="password" />
                <button>Login</button>
            </form>
        </div>
    </>);
}

export default Login;