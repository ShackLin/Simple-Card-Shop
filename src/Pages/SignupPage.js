import styles from '../CssModules/Signup.module.css'
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../ContextComponent/MemberContext';

export default function SignupPage() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState('')
      const { createUser } = UserAuth()
      const navigate = useNavigate()
      const passwordRef = useRef()
      const passwordConfirmRef = useRef()
      const onSubmit = async (e) => {
            e.preventDefault()
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                  return setError("Passwords do not match")
            }
            try {
                  await createUser(email, password);
                  navigate('/login')
            } catch (e) {
                  setError(e.message);
                  console.log(e.message);
            }
      }
      return (
            <div className={styles.Container}>
                  <h2 className={styles.Title}>Sign Up</h2>
                  {error && <div className={styles.Alert}>{error}</div>}
                  <div className={styles.FormContainer}>
                        <form >
                              <label className={styles.label}>Your Email:
                              </label><br />
                              <input type='email' required className={styles.Input} onChange={(e) => setEmail(e.target.value)} /><br />
                              <label className={styles.label}>Set Password:
                              </label><br />
                              <input type='password' className={styles.Input} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} /><br />
                              <label className={styles.label}>Confirm Password:
                              </label><br />
                              <input type='password' className={styles.Input} onChange={(e) => setPassword(e.target.value)} ref={passwordConfirmRef} /><br />

                              <button type='submit' className={styles.Submit} onClick={onSubmit}>Sign Up</button>
                        </form>
                        <span className={styles.Remind1}>
                              Already have an account?{' '}
                              <Link to="/login" style={{ textDecoration: "none" }}>
                                    Login in
                              </Link>
                        </span>
                  </div>
            </div>
      )
}


