// Logout.js
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './path-to-your-auth-context';

const Logout = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        console.log('useEffect triggered', attempts, username, password);
        if (attempts === 3 && username === 'IvanDarioAngulo' && password === 'Jobs2024$$') {
        // Additional logic after showing the welcome page
                onLogout();

                // Redirect to another page after the timeout
                const timeout = setTimeout(() => {
                    console.log('Navigating to /welcome');
                    navigate('/welcome'); // Use history.push to navigate without a full page reload
                }, 1000);

                // Clear the timeout if the component unmounts
                return () => clearTimeout(timeout);
                }
    }, [attempts, username, password, onLogin, navigate]);

    const handleLogin = () => {
        if (password === 'Jobs2024$$') {
            console.log('Correct password entered!');
            setShowWelcome(true);
            // Redirect to another page after the timeout
            const timeout = setTimeout(() => {
                console.log('Navigating to /welcome');
                navigate('/welcome'); // Use history.push to navigate without a full page reload
            }, 1000);

            // Clear the timeout if the component unmounts
            return () => clearTimeout(timeout);
            
        } else {
        setAttempts(attempts + 1);
        alert(`Invalid password. Attempt ${attempts + 1} of 3. Please try again.`);
        }
    };

    return (
        <div>
        <h1>Logging Out...</h1>
        {/* You can add a loading spinner or other UI elements if needed */}
        </div>
    );
};

export default Logout;
