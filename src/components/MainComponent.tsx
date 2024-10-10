import { useEffect, useState } from 'react';
import Loading from './Loading';

interface MainComponentProps {
    children: React.ReactNode;
}

const MainComponent: React.FC<MainComponentProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default MainComponent;
