import React from 'react'
import { useAuthStore } from '../store/useAuthStore';

export const NavBar = () => {
    const { authUser } = useAuthStore;
  return (
    <div>NavBar</div>
  )
}
