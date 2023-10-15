import { FaSun, FaMoon } from "react-icons/fa6"
import { useThemeContext } from '../hooks/useThemeContext'

function ColorContainer() {
    const { theme, changeTheme } = useThemeContext()

    const setNewTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        changeTheme(newTheme)
        document.documentElement.setAttribute('data-theme', theme)
    };
    return (
        <div className='align-element my-5 flex justify-between items-center'>
            <button onClick={setNewTheme} className='text-2xl cursor-pointer'>
                {theme === 'light' ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    )
}

export default ColorContainer