'use client'
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// Créer un client pour useQuery
const queryClient = new QueryClient()

export default function Provider({
    children
}: PropsWithChildren) {
    return ( 
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
               {children}
            </QueryClientProvider>
        </SessionProvider>
    )
}