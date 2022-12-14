import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '#/shared/utils/token';
import { LoadingOutlined } from '@ant-design/icons';

interface Props {
  isPrivate?: boolean;
  children: JSX.Element;
}

function GuardRoute({ isPrivate = false, children }: Props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const accessToken = getToken();
      if (!accessToken && isPrivate) {
        navigate('/login', {
          replace: true,
        });
      }
      if (accessToken && !isPrivate) {
        navigate('/', {
          replace: true,
        });
      }
      setLoading(false);
    })();
  }, [navigate, isPrivate]);

  if (loading) return <LoadingOutlined />;
  return children;
}

export default GuardRoute;
