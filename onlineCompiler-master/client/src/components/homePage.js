import React from 'react';
import { useHistory } from 'react-router-dom';
import './homepage.css'; // Optional for extra custom styles

const HomePage = () => {
  const history = useHistory();
  

  const startCoding = () => {
    history.push('/editor');
  };

  return (
    <div className="text-center text-white" style={{ backgroundColor: '#0f172a', minHeight: '100vh', paddingTop: '4rem' }}>
  
  

      {/* Hero Section */}
      <section
        className="hero-section py-5"
        style={{
          background: 'linear-gradient(145deg, #1e293b, #0f172a)',
          padding: '4rem 1rem',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#38bdf8' }}>
          Welcome to CodeMaster
        </h1>
        <p className="lead" style={{ color: '#cbd5e1', fontSize: '1.2rem' }}>
          Your ultimate online code editor and playground.
        </p>
        <div className="mt-4 d-flex justify-content-center gap-4 flex-wrap">
          <button onClick={startCoding} className="btn btn-primary btn-lg">
            Start Coding
          </button>
          <button onClick={() => history.push('/login')} className="btn btn-outline-light btn-lg">
            Login
          </button>
        </div>
      </section>

      {/* Features Section */}
    <section className="features-section py-5 px-3 text-white">
  <h2 className="text-center mb-5 features-title">
    🚀 Features of CodeMaster
  </h2>
  <ul className="features-list w-75 mx-auto">
    <li className="feature-item">
      ✅ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">Live Code Execution</a> – See results instantly
    </li>
    <li className="feature-item">
      ✅ <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">Multi-language Support</a> – HTML, CSS, JS, Python & more
    </li>
    <li className="feature-item">
      ✅ <a href="https://code.visualstudio.com/docs/editor/codebasics" target="_blank" rel="noopener noreferrer">Smart Editor</a> – Syntax highlighting & auto-format
    </li>
    <li className="feature-item">
      ✅ <a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noopener noreferrer">Theme Customization</a> – Light/Dark toggle
    </li>
    <li className="feature-item">
      ✅ <a href="https://codesandbox.io/docs/embedding" target="_blank" rel="noopener noreferrer">Shareable Links</a> – Easily share your code
    </li>
    <li className="feature-item">
      ✅ <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer">Save Your Work</a> – Resume anytime
    </li>
  </ul>
</section>



      {/* About Section */}
      <section
        className="about mt-5 w-75 mx-auto text-center text-white p-4 rounded-4 shadow"
        style={{
          background: 'linear-gradient(135deg, #1e293b, #334155)',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h2
          className="mb-4"
          style={{ color: '#38bdf8', fontWeight: '700', fontFamily: "'Segoe UI', sans-serif" }}
        >
          👨‍💻 About CodeMaster
        </h2>

        <p className="fs-5 mb-4" style={{ color: '#e0e7ff' }}>
          Created by SmartCat passionate about coding and learning.
        </p>

        <div className="contact-info mb-4" style={{ fontFamily: "'Roboto Mono', monospace", color: '#cbd5e1' }}>
          <p><strong>Name:</strong> Vijay Kumar</p>
          <p><strong>Email:</strong> <a href="mailto:vijayrajputjay14@gmail.com" style={{ color: '#60a5fa', textDecoration: 'underline' }}>vijayrajputjay14@gmail.com</a></p>
          <p><strong>Contact:</strong> +91 6283 646 694</p>
        </div>

        <div className="social-links d-flex justify-content-center gap-4 fs-5">
          <a
            href="https://github.com/jaycoding143"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f1f5f9', textDecoration: 'none' }}
          >
            <i className="fab fa-github me-1"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-k-b9a07633a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0ea5e9', textDecoration: 'none' }}
          >
            <i className="fab fa-linkedin me-1"></i> LinkedIn
          </a>
        </div>
      </section>
      
    </div>
   
);
  
};

export default HomePage;


