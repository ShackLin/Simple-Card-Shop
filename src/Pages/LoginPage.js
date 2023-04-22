import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styles from '../CssModules/Signup.module.css'
import { UserAuth } from '../ContextComponent/MemberContext';

export default function LoginPage() {
      const navigate = useNavigate();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('')
      const [resetEmail, setResetEmail] = useState('')
      const { signIn } = UserAuth();
      const { ResetPasswordEmail } = UserAuth()
      const passwordRef = useRef()
      const passwordConfirmRef = useRef()
      const onLogin = async (e) => {
            e.preventDefault();
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                  return setError("Passwords do not match,please click ,if you forgot your password, plase click Reset Password button")
            }
            try {
                  await signIn(email, password)
                  navigate('/account')
            } catch (e) {
                  setError(e.message)
                  console.log(e.message)
            }
      }
      const ResetPassword = async (e) => {
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                  return setResetEmail("We have sent new password to your email, pleae check it")
            }
            try {
                  await ResetPasswordEmail(email)

            } catch (error) {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode, errorMessage)
            }
      }

      return (
            <div className={styles.Container}>
                  <h2 className={styles.Title}>Log In</h2>
                  {error && <div className={styles.Alert}>{error}</div>}
                  {resetEmail && <div className={styles.Alert}>{resetEmail}</div>}
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

                              <button type='submit' className={styles.Submit} onClick={onLogin}>Log In</button>
                        </form>
                        <span className={styles.Remind2}>
                              Do not have an account?{' '}
                              <Link to="/signup" style={{ textDecoration: "none" }}>
                                    Sign up
                              </Link>
                        </span>
                        <button onClick={ResetPassword} className={styles.Submit}>Reset Password</button>

                  </div>
            </div>
      )
}



