import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss'

const LoginBox = () => {
    return (
        <div className={styles.loginBoxWrapper}>
            <strong> Entre e compartilhe sua mensagem </strong>
            <a href="#" className={styles.signInWithGithub}>
                <VscGithubInverted size="24"/>
                Entrar com o github
            </a>
            
        </div>
    )
}

export default LoginBox
