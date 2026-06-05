import { useState, useEffect } from 'react';
import styles from './Login.module.css';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 0) return;

    if (username === 'admin' && password === '1234') {
      alert('Login realizado com sucesso! Crime desvendado.');
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }, [clickCount]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.logo}>Instagram</h1>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Telefone, nome de usuário ou email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}