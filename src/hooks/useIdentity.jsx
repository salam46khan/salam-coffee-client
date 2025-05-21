import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useIdentity = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const {refetch, data: identity = [] } = useQuery({
        queryKey: ['identity', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user?email=${user.email}`)
            return res.data
        }
    })
    return [identity, refetch]
};

export default useIdentity;