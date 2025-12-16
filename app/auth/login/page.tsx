'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) throw error;

      if (data.session) {
        window.location.href = '/dashboard';
      }
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5'}}>
      <div style={{background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 20px rgba(0,0,0,0.1)', width: '400px'}}>
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <img src="https://i.imgur.com/pXcyQv4.png" alt="Aristosys" style={{height: '50px', marginBottom: '10px'}} />
          <h2 style={{margin: 0}}>Log In to Aristosys</h2>
        </div>

        {error && <div style={{background: '#f8d7da', color: '#721c24', padding: '12px', borderRadius: '5px', marginBottom: '20px'}}>{error}</div>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box'}}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box'}}
            required
          />
          <button 
            type="submit"
            disabled={loading}
            style={{width: '100%', padding: '12px', background: loading ? '#ccc' : '#1e3a5f', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer'}}
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </form>

        <p style={{marginTop: '20px', textAlign: 'center'}}>
          Don't have an account? <a href="/auth/signup" style={{color: '#1e3a5f', fontWeight: 'bold'}}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}
