import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCoffee = () => {
    const axiosPublic = useAxiosPublic()
    
    const { refetch, data: coffee = [] } = useQuery({
        queryKey: ['coffee'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/coffee`)
            return res.data
        }
    })
    return [coffee, refetch]
};

export default useCoffee;