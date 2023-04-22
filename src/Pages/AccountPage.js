import React from 'react'
import styles from '../CssModules/Logout.module.css'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../ContextComponent/MemberContext';

export default function AccountPage() {
      const { user, logout } = UserAuth();
      const navigate = useNavigate();
      const handleLogout = async () => {
            try {
                  await logout();
                  navigate('/');
                  console.log('You are logged out')
            } catch (e) {
                  console.log(e.message);
            }
      }

      return (
            <div className={styles.Container}>
                  <h2 className={styles.Title}>You have successfully become a member</h2>
                  <div className={styles.Content}>
                        <span>Account</span><br />
                        <p>User Email: {user && user.email}</p>
                        <button onClick={handleLogout} className={styles.homeBtn}>
                              Back HomePage
                        </button>
                  </div>
            </div>
      )
}
