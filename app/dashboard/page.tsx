'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        window.location.href = '/auth/login';
        return;
      }

      setUser(session.user);
    } catch (error) {
      console.error('Auth error:', error);
      window.location.href = '/auth/login';
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{minHeight: '100vh', background: '#f5f5f5'}}>
      <header style={{background: '#1e3a5f', color: 'white', padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
          <img src="https://i.imgur.com/pXcyQv4.png" alt="Aristosys" style={{height: '40px'}} />
          <h1 style={{margin: 0, fontSize: '24px'}}>Aristosys Dashboard</h1>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <span>{user?.email}</span>
          <button onClick={handleLogout} style={{background: 'white', color: '#1e3a5f', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'}}>
            Logout
          </button>
        </div>
      </header>
      
      <div style={{padding: '40px', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center'}}>
          <h2 style={{color: '#1e3a5f', marginBottom: '20px'}}>🎉 Welcome to Aristosys!</h2>
          <p style={{fontSize: '18px', color: '#666', marginBottom: '30px'}}>
            You're logged in as <strong>{user?.email}</strong>
          </p>
          <div style={{background: '#e7f3ff', border: '1px solid #2196F3', borderRadius: '8px', padding: '20px', marginTop: '20px'}}>
            <p style={{color: '#1976d2', margin: 0}}>
              ✅ <strong>Signup and Login are working!</strong>
            </p>
            <p style={{color: '#666', marginTop: '10px', fontSize: '14px'}}>
              Candidate screening features will be added next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
