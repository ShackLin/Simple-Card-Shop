import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../ContextComponent/MemberContext';

export default function ProtectPage({ children }) {
      const { user } = UserAuth();
      if (!user) {
            return <Navigate to='/' />;
      }
      return children;
};

