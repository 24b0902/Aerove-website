import React, { useState, useEffect } from 'react'

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'projects', 'achievements']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <style>{`
        /* Reset and base styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .app.loaded {
          opacity: 1;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(30, 58, 138, 0.2);
        }

        .nav-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .logo-icon {
          font-size: 2rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #60a5fa, #22d3ee);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-links {
          display: none;
          gap: 3rem;
        }

        .nav-links.desktop {
          display: flex;
        }

        .nav-link {
          background: none;
          border: none;
          color: #cbd5e1;
          font-size: 1.125rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #60a5fa;
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .mobile-menu {
          display: block;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(30, 58, 138, 0.2);
        }

        .mobile-menu .nav-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.5rem 0;
          font-size: 1.125rem;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #3b82f6;
          border-radius: 50%;
          opacity: 0.6;
          animation: float 4s ease-in-out infinite;
        }

        .drone-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.4;
          animation: droneFloat 6s ease-in-out infinite;
        }

        .drone {
          position: relative;
          width: 300px;
          height: 300px;
        }

        .drone-body {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: linear-gradient(145deg, #2d3748, #1a202c);
          border-radius: 12px;
          border: 2px solid #4a5568;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .drone-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, #3b82f6, #1e40af);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .drone-arm {
          position: absolute;
          width: 120px;
          height: 8px;
          background: linear-gradient(90deg, #4a5568, #2d3748);
          border-radius: 4px;
          transform-origin: center;
        }

        .arm-1 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg); }
        .arm-2 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); }
        .arm-3 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(135deg); }
        .arm-4 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-135deg); }

        .drone-motor {
          position: absolute;
          width: 30px;
          height: 30px;
          background: linear-gradient(145deg, #374151, #1f2937);
          border-radius: 50%;
          border: 2px solid #4b5563;
        }

        .motor-1 { top: 20px; right: 20px; }
        .motor-2 { top: 20px; left: 20px; }
        .motor-3 { bottom: 20px; right: 20px; }
        .motor-4 { bottom: 20px; left: 20px; }

        .propeller {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          border-radius: 2px;
          opacity: 0.8;
        }

        .propeller::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(90deg);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #06b6d4, transparent);
          border-radius: 2px;
        }

        .propeller-1 { animation: spin 0.1s linear infinite; }
        .propeller-2 { animation: spin 0.1s linear infinite reverse; }
        .propeller-3 { animation: spin 0.1s linear infinite; }
        .propeller-4 { animation: spin 0.1s linear infinite reverse; }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 64rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
          line-height: 1;
        }

        .hero-title-line1 {
          display: block;
          background: linear-gradient(to right, #ffffff, #dbeafe, #ffffff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-title-line2 {
          display: block;
          background: linear-gradient(to right, #60a5fa, #22d3ee, #2563eb);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-subtitle {
          margin-bottom: 4rem;
        }

        .hero-subtitle h2 {
          font-size: 1.875rem;
          color: #cbd5e1;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle p {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 48rem;
          margin: 0 auto;
          line-height: 1.625;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          justify-content: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.5rem;
          border-radius: 9999px;
          font-size: 1.125rem;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .btn-primary {
          background: #2563eb;
          color: white;
        }

        .btn-primary:hover {
          background: #1d4ed8;
        }

        .btn-outline {
          border: 2px solid #94a3b8;
          color: #cbd5e1;
          background: transparent;
        }

        .btn-outline:hover {
          background: #94a3b8;
          color: #0f172a;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 1s infinite;
          font-size: 2rem;
          color: #94a3b8;
        }

        /* Section styles */
        .section {
          padding: 6rem 1.5rem;
        }

        .section-alt {
          background: rgba(15, 23, 42, 0.3);
        }

        .container {
          max-width: 72rem;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #60a5fa, #22d3ee);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .section-description {
          font-size: 1.125rem;
          color: #94a3b8;
          max-width: 48rem;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          gap: 2rem;
        }

        .grid-3 {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .grid-2 {
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }

        .grid-4 {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .card {
          background: rgba(30, 41, 59, 0.3);
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .card:hover {
          background: rgba(30, 41, 59, 0.5);
        }

        .feature-icon {
          background: linear-gradient(to right, #2563eb, #0891b2);
          padding: 1rem;
          border-radius: 1rem;
          width: 4rem;
          height: 4rem;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
          text-align: center;
        }

        .feature-description {
          color: #94a3b8;
          font-size: 1rem;
          line-height: 1.5;
          text-align: center;
        }

        /* Team section - simplified */
        .team-member {
          text-align: center;
        }

        .member-image {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          margin: 0 auto 1rem;
          border: 3px solid #60a5fa;
        }

        .member-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .member-role {
          color: #60a5fa;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .member-links {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .member-link {
          color: #94a3b8;
          font-size: 1rem;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .member-link:hover {
          color: #60a5fa;
        }

        /* Project card */
        .project-card {
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 12rem;
          object-fit: cover;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.75rem;
        }

        .project-description {
          color: #94a3b8;
          margin-bottom: 1rem;
          line-height: 1.5;
          font-size: 0.875rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(71, 85, 105, 0.5);
          color: #cbd5e1;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
        }

        /* Contact section */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
          align-items: center;
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #cbd5e1;
          font-size: 1rem;
        }

        .contact-icon {
          color: #60a5fa;
          font-size: 1.25rem;
        }

        /* Footer */
        .footer {
          padding: 2rem 1.5rem;
          border-top: 1px solid #1e293b;
        }

        .footer-content {
          max-width: 72rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-text {
          color: #94a3b8;
          font-size: 1rem;
        }

        /* Animations */
        @keyframes droneFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          25% { transform: translate(-50%, -50%) translateY(-10px) rotate(1deg); }
          50% { transform: translate(-50%, -50%) translateY(-5px) rotate(0deg); }
          75% { transform: translate(-50%, -50%) translateY(-15px) rotate(-1deg); }
        }

        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(-25%); }
          50% { transform: translateX(-50%) translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }

        /* Responsive */
        @media (min-width: 640px) {
          .hero-buttons { flex-direction: row; }
          .contact-info { flex-direction: row; }
          .footer-content { flex-direction: row; }
        }

        @media (min-width: 768px) {
          .mobile-menu-btn { display: none; }
          .nav-links.desktop { display: flex; }
          .mobile-menu { display: none; }
          .hero-title { font-size: 6rem; }
          .section-title { font-size: 3.5rem; }
        }

        @media (max-width: 767px) {
          .nav-links.desktop { display: none; }
          .drone { width: 200px; height: 200px; }
          .drone-body { width: 60px; height: 60px; }
          .drone-center { width: 30px; height: 30px; }
          .drone-arm { width: 80px; height: 6px; }
          .drone-motor { width: 20px; height: 20px; }
          .propeller { width: 40px; height: 3px; }
          .propeller::after { width: 40px; height: 3px; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo" onClick={() => scrollToSection('home')}>
              <span className="logo-icon">✈</span>
              <span className="logo-text">Aerove Tech</span>
            </div>
            
            <div className="nav-links desktop">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'team', label: 'Team' },
                { id: 'projects', label: 'Projects' },
                { id: 'achievements', label: 'Achievements' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'team', label: 'Team' },
                { id: 'projects', label: 'Projects' },
                { id: 'achievements', label: 'Achievements' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="particles">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          <div className="drone-container">
            <div className="drone">
              <div className="drone-body">
                <div className="drone-center"></div>
              </div>
              <div className="drone-arm arm-1"></div>
              <div className="drone-arm arm-2"></div>
              <div className="drone-arm arm-3"></div>
              <div className="drone-arm arm-4"></div>
              <div className="drone-motor motor-1">
                <div className="propeller propeller-1"></div>
              </div>
              <div className="drone-motor motor-2">
                <div className="propeller propeller-2"></div>
              </div>
              <div className="drone-motor motor-3">
                <div className="propeller propeller-3"></div>
              </div>
              <div className="drone-motor motor-4">
                <div className="propeller propeller-4"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line1">Aerove</span>
            <span className="hero-title-line2">Tech</span>
          </h1>
          
          <div className="hero-subtitle">
            <h2>Autonomous Flight Systems</h2>
            <p>
              IIT Bombay's premier drone research team pioneering the future of autonomous aerial vehicles through cutting-edge AI and robotics
            </p>
          </div>
          
          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="btn btn-outline"
            >
              Meet the Team →
            </button>
          </div>
        </div>

        <div className="scroll-indicator">⌄</div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Aerove Tech</h2>
            <p className="section-description">
              We are a passionate team of engineers and researchers at IIT Bombay, dedicated to pushing the boundaries of autonomous flight technology.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Our Mission</h3>
              <p className="feature-description">
                To develop intelligent, autonomous flight systems that revolutionize industries from surveillance to emergency response.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Innovation Focus</h3>
              <p className="feature-description">
                Combining AI, computer vision, and advanced control systems to create next-generation autonomous drones.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Collaborative Approach</h3>
              <p className="feature-description">
                Working with industry partners and research institutions to bring innovations to real-world applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Simplified */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-description">
              Meet the talented individuals driving innovation in autonomous flight technology.
            </p>
          </div>

          {/* Leadership */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#60a5fa', marginBottom: '2rem' }}>Leadership</h3>
            <div className="grid grid-4">
              {[
                { name: "Jainam Shah", role: "Overall Coordinator", image: "https://via.placeholder.com/150x150/3b82f6/ffffff?text=JS" },
                { name: "Arjun Sharma", role: "Technical Manager", image: "https://via.placeholder.com/150x150/3b82f6/ffffff?text=AS" },
                { name: "Priya Patel", role: "Operations Manager", image: "https://via.placeholder.com/150x150/3b82f6/ffffff?text=PP" },
                { name: "Rohit Kumar", role: "Research Manager", image: "https://via.placeholder.com/150x150/3b82f6/ffffff?text=RK" }
              ].map((member, index) => (
                <div key={index} className="card team-member">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <div className="member-links">
                    <a href="#" className="member-link">💼</a>
                    <a href="#" className="member-link">⚡</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Teams */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#22d3ee', marginBottom: '2rem' }}>Technical Teams</h3>
            <div className="grid grid-4">
              {[
                { name: "Vikram Singh", role: "Mechatronics Lead", image: "https://via.placeholder.com/150x150/ea580c/ffffff?text=VS" },
                { name: "Deepak Nair", role: "Aerodynamics Lead", image: "https://via.placeholder.com/150x150/0891b2/ffffff?text=DN" },
                { name: "Rajesh Khanna", role: "MPC Lead", image: "https://via.placeholder.com/150x150/7c3aed/ffffff?text=RK" },
                { name: "Ishita Bansal", role: "Perception Lead", image: "https://via.placeholder.com/150x150/059669/ffffff?text=IB" },
                { name: "Ananya Gupta", role: "Senior Engineer", image: "https://via.placeholder.com/150x150/dc2626/ffffff?text=AG" },
                { name: "Kavya Iyer", role: "Senior Engineer", image: "https://via.placeholder.com/150x150/0891b2/ffffff?text=KI" },
                { name: "Meera Sharma", role: "Senior Engineer", image: "https://via.placeholder.com/150x150/7c3aed/ffffff?text=MS" },
                { name: "Aryan Malhotra", role: "Senior Engineer", image: "https://via.placeholder.com/150x150/059669/ffffff?text=AM" }
              ].map((member, index) => (
                <div key={index} className="card team-member">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <div className="member-links">
                    <a href="#" className="member-link">💼</a>
                    <a href="#" className="member-link">⚡</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Teams */}
          <div>
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#10b981', marginBottom: '2rem' }}>Support Teams</h3>
            <div className="grid grid-4">
              {[
                { name: "Sakshi Rao", role: "Media & PR", image: "https://via.placeholder.com/150x150/ec4899/ffffff?text=SR" },
                { name: "Rahul Agrawal", role: "Finance Manager", image: "https://via.placeholder.com/150x150/f59e0b/ffffff?text=RA" },
                { name: "Akash Bhatt", role: "Web Developer", image: "https://via.placeholder.com/150x150/6366f1/ffffff?text=AB" },
                { name: "Nisha Patel", role: "Web Designer", image: "https://via.placeholder.com/150x150/6366f1/ffffff?text=NP" }
              ].map((member, index) => (
                <div key={index} className="card team-member">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <div className="member-links">
                    <a href="#" className="member-link">💼</a>
                    <a href="#" className="member-link">⚡</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-description">
              Cutting-edge projects showcasing our expertise in autonomous flight systems and drone technology.
            </p>
          </div>

          <div className="grid grid-2">
            {[
              {
                title: "Autonomous Surveillance Drone",
                description: "AI-powered surveillance system with real-time object detection, tracking, and threat assessment capabilities for security applications.",
                image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=Surveillance+Drone",
                tech: ["Computer Vision", "Deep Learning", "ROS2", "Python"]
              },
              {
                title: "Swarm Intelligence Platform",
                description: "Multi-drone coordination system enabling collaborative missions, formation flying, and distributed task execution.",
                image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Drone+Swarm",
                tech: ["Swarm Robotics", "C++", "MATLAB", "Communication"]
              },
              {
                title: "Emergency Response UAV",
                description: "Rapid deployment drone system for disaster management, search & rescue operations, and emergency medical supply delivery.",
                image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Rescue+Drone",
                tech: ["Emergency Systems", "GPS", "Thermal Imaging", "IoT"]
              },
              {
                title: "Precision Agriculture Drone",
                description: "Smart farming solution with crop monitoring, pest detection, and precision spraying capabilities using advanced sensors.",
                image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Agri+Drone",
                tech: ["Multispectral Imaging", "ML", "Agriculture", "IoT"]
              }
            ].map((project, index) => (
              <div key={index} className="card project-card">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Achievements</h2>
            <p className="section-description">
              Recognition and milestones marking our journey in autonomous flight technology.
            </p>
          </div>

          <div className="grid grid-2">
            {[
              {
                title: "National Drone Competition 2023",
                description: "1st Place in Autonomous Navigation Challenge with our advanced SLAM implementation",
                date: "December 2023",
                icon: "🏆"
              },
              {
                title: "IIT Bombay Tech Fest",
                description: "Best Innovation Award for Swarm Robotics demonstrating coordinated multi-drone operations",
                date: "October 2023",
                icon: "🏅"
              },
              {
                title: "IEEE Robotics Conference",
                description: "Published research paper on 'Distributed Control Systems for Autonomous UAV Swarms'",
                date: "September 2023",
                icon: "💻"
              },
              {
                title: "Startup Incubation Program",
                description: "Selected for IIT Bombay's prestigious incubation program with seed funding",
                date: "August 2023",
                icon: "🚀"
              }
            ].map((achievement, index) => (
              <div key={index} className="card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="feature-icon" style={{ margin: 0, flexShrink: 0 }}>
                    {achievement.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="project-title">{achievement.title}</h3>
                    <p className="project-description">{achievement.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#60a5fa', marginTop: '0.75rem', fontSize: '0.875rem' }}>
                      <span style={{ marginRight: '0.5rem' }}>📅</span>
                      {achievement.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              Interested in collaborating or learning more about our research? We'd love to hear from you.
            </p>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>IIT Bombay, Powai, Mumbai, India</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <span>aerove@iitb.ac.in</span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-primary">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span style={{ fontSize: '1.5rem' }}>✈</span>
            <span className="logo-text">Aerove Tech</span>
          </div>
          <div className="footer-text">
            © 2024 Aerove Tech, IIT Bombay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
