import { Link } from 'react-router-dom'; 

const NotFound = () => {
    return (
        <div>
        <div style={{ 
            textAlign: 'center', 
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh'
        }}>
            <h1 style={{ fontSize: '48px', color: '#dc3545' }}>404 - Page Not Found</h1>
            <p style={{ fontSize: '20px', color: '#6c757d' }}>
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '18px',
                color: '#ffffff',
                backgroundColor: '#007bff',
                borderRadius: '5px',
                textDecoration: 'none'
            }}>Go to Home</Link>
        </div>
        </div>
    );
};

export default NotFound;
