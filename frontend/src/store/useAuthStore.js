import axios from 'axios'
import {create} from 'zustand'
import { axioisInstance } from '../lib/axios.js'


export const useAuthStore = create((set) =>({
    authUser:null,
    isSigningUp: false,
    isLoginngIn: false,
    isUpdatingProfile: false,
    isCheckingAuth:true,
    checkAuth:  async() =>{
        try {
            const res = await axioisInstance.get('/auth/check')

            set({authUser:res.data})
        } catch (error) {
            console.error("Error in checkAuth",error)
            set({authUser:null})
        }finally{
            set({isCheckingAuth:null})
        }
    },
    signup: async (data) => {

    }

}))