'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName || email.split('@')[0]
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        setMessage('✅ Account created! You can now log in.');
        setTimeout(() => {
          window.location.href = '/auth/login';
        }, 2000);
      }
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5'}}>
      <div style={{background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 20px rgba(0,0,0,0.1)', width: '400px'}}>
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <img src="https://i.imgur.com/pXcyQv4.png" alt="Aristosys" style={{height: '50px', marginBottom: '10px'}} />
          <h2 style={{margin: 0}}>Sign Up for Aristosys</h2>
        </div>

        {message && <div style={{background: '#d4edda', color: '#155724', padding: '12px', borderRadius: '5px', marginBottom: '20px'}}>{message}</div>}
        {error && <div style={{background: '#f8d7da', color: '#721c24', padding: '12px', borderRadius: '5px', marginBottom: '20px'}}>{error}</div>}

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box'}}
          />
          <input
            type="email"
            placeholder="Company Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box'}}
            required
          />
          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box'}}
            required
            minLength={6}
          />
          <button 
            type="submit" 
            disabled={loading}
            style={{width: '100%', padding: '12px', background: loading ? '#ccc' : '#1e3a5f', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer'}}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p style={{marginTop: '20px', textAlign: 'center'}}>
          Already have an account? <a href="/auth/login" style={{color: '#1e3a5f', fontWeight: 'bold'}}>Log In</a>
        </p>
      </div>
    </div>
  );
}
