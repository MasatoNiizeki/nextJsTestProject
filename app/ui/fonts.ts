import { Inter, Lusitana } from 'next/font/google';
import exp from "node:constants";

export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana( {
    weight: ['400', '700'],
    subsets: ['latin'],
});