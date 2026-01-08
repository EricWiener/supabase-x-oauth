import { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './supabaseClient'
import './App.css'

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signInWithX = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'x',
      })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('An unknown error occurred')
      }
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <h1>Supabase + X (Twitter) Auth</h1>
      
      {!session ? (
        <div className="card">
          <p>Sign in with your X account to continue</p>
          <button onClick={signInWithX}>
            Sign in with X
          </button>
        </div>
      ) : (
        <div className="card">
          <h2>Welcome!</h2>
          <p>Logged in as: {session.user.email}</p>
          <p>User Name: {session.user.user_metadata.full_name || session.user.user_metadata.user_name}</p>
          <button onClick={signOut}>Sign Out</button>
          
          <div style={{marginTop: '20px'}}>
            <h3>Session Details</h3>
            <pre style={{textAlign: 'left', background: '#333', color: '#fff', padding: '10px', borderRadius: '4px', overflow: 'auto'}}>
              {JSON.stringify(session.user, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
