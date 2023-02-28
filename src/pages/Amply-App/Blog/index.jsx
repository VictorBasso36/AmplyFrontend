import Head from 'next/head'

import styles from '@/styles/Pages/Amply/funcionalidades/Blog/Blog.module.css'

import Amply_App from '../../Amply-App'

export default function Blog() {
  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(true);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
  const storedPermissions = JSON.parse(localStorage.getItem('permissions'));
    console.log(storedPermissions)
  if(localStorage.getItem('auth_token')){
    if(storedPermissions.Blog === true){ 
      console.log('permitido, lets go:')

    }else{
      
      router.push('/Amply-App/Home');
    }
    
  }else{
    
    router.push('/Amply-App/Home');
  }
  
  })

  return (
    <>
          <div className={styles.fullItem}>
              <h1>Blog</h1>
          </div>

    </>
  )
}
