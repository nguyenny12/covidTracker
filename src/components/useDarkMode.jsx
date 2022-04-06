import  {useState, useEffect} from 'react'

const useDarkMode = () => {
    const [isDark, setisDark] = useState(()=> localStorage.theme=== 'dark')
    const toggleDarkMode = ()=>{
      setisDark(!isDark)
    }
    useEffect(() => {
      const html = document.documentElement;
      const prev = isDark ? 'light': 'dark';
      html.classList.remove(prev);

      const next = isDark ? 'dark' : 'light';
      html.classList.add(next);


      localStorage.setItem('theme', next)
    }, [isDark])
    
  return [isDark, toggleDarkMode]
}

export default useDarkMode