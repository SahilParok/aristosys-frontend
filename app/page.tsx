export default function Home() {
  return (
    <div style={{fontFamily: 'Arial', margin: 0, padding: 0}}>
      <header style={{background: 'linear-gradient(135deg, #1e3a5f, #2d5a87)', color: 'white', padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
          <img src="https://i.imgur.com/pXcyQv4.png" alt="Aristosys" style={{height: '50px'}} />
          <h1 style={{margin: 0, fontSize: '28px'}}>ARISTOSYS</h1>
        </div>
        <div style={{display: 'flex', gap: '15px'}}>
          <a href="/auth/login" style={{background: 'transparent', border: '2px solid white', color: 'white', padding: '10px 25px', borderRadius: '5px', textDecoration: 'none', cursor: 'pointer'}}>Log In</a>
          <a href="/auth/signup" style={{background: 'white', color: '#1e3a5f', padding: '10px 25px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', cursor: 'pointer'}}>Sign Up</a>
        </div>
      </header>

      <section style={{textAlign: 'center', padding: '80px 20px', background: '#f9f9f9'}}>
        <h2 style={{fontSize: '48px', margin: '0 0 20px 0', color: '#1e3a5f'}}>AI-Powered Recruitment Screening</h2>
        <p style={{fontSize: '20px', color: '#666', maxWidth: '700px', margin: '0 auto 40px'}}>
          Automate resume and interview screening with AI. Screen candidates in minutes, not hours.
        </p>
        <a href="/auth/signup" style={{background: '#1e3a5f', color: 'white', padding: '15px 40px', borderRadius: '5px', fontSize: '18px', textDecoration: 'none', display: 'inline-block'}}>
          Get Started Free
        </a>
      </section>

      <section style={{padding: '60px 20px', maxWidth: '1200px', margin: '0 auto'}}>
        <h3 style={{textAlign: 'center', fontSize: '36px', marginBottom: '50px'}}>Features</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          {[
            {title: '📄 Resume Screening', desc: 'AI analyzes resumes against job descriptions'},
            {title: '🎤 Audio Interview Analysis', desc: 'Upload recorded interviews for detailed scoring'},
            {title: '🏢 Multi-Company Support', desc: 'All recruiters share the same data'},
            {title: '📊 Detailed Reports', desc: 'Comprehensive scoring with recommendations'},
            {title: '👥 Client Management', desc: 'Organize candidates by client'},
            {title: '⚡ Fast & Accurate', desc: 'Process candidates in minutes'}
          ].map((feature, idx) => (
            <div key={idx} style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
              <h4 style={{fontSize: '24px', marginBottom: '15px'}}>{feature.title}</h4>
              <p style={{color: '#666', lineHeight: '1.6'}}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{background: '#1e3a5f', color: 'white', padding: '40px 20px', textAlign: 'center'}}>
        <p>© 2024 Aristosys. All rights reserved.</p>
      </footer>
    </div>
  );
}
