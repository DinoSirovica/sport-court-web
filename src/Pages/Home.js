export const Home = () => {
    return (
        <div className="hero-container">
            <img src={require('../Images/hero.jpg')} alt="Hero" className="hero-image" />
            <div className="hero-content">
                <h1>Welcome to My Website</h1>
                <p>Here you can find information about our services and products.</p>
                <button className="hero-button">Learn More</button>
            </div>
        </div>
    );
}
