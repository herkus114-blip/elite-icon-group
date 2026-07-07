import { useLocation } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';


export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await base44.auth.me();
                return { user, isAuthenticated: true };
            } catch (error) {
                return { user: null, isAuthenticated: false };
            }
        }
    });
    
    return (
        <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: '#0A1628' }}>
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-7xl font-light" style={{ color: '#C9A96E', fontFamily: 'Playfair Display, Georgia, serif' }}>404</h1>
                        <div className="h-px w-16 mx-auto" style={{ backgroundColor: '#C9A96E33' }}></div>
                    </div>
                    
                    <div className="space-y-3">
                        <h2 className="text-2xl font-medium text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                            Page Not Found
                        </h2>
                        <p className="text-white/50 leading-relaxed text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            The page you are looking for does not exist.
                        </p>
                    </div>
                    
                    {isFetched && authData.isAuthenticated && authData.user?.role === 'admin' && (
                        <div className="mt-8 p-4 rounded border" style={{ backgroundColor: '#0F1F38', borderColor: '#ffffff10' }}>
                            <p className="text-sm text-white/40" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Admin: This page may not be implemented yet.
                            </p>
                        </div>
                    )}
                    
                    <div className="pt-6">
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="inline-flex items-center px-8 py-3 text-xs uppercase tracking-widest font-medium transition-all duration-300"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#C9A96E', color: '#0A1628' }}
                        >
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}