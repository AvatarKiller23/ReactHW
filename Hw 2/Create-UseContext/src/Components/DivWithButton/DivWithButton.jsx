import { useContext } from 'react';
import Button from '../Button/Button';
import { ThemeContext } from '../../App';

function DivWithButton() {
    const {theme, setTheme} = useContext(ThemeContext);

    return(
        <div>
            <Button
                clickHandler={
                    () => setTheme(
                        theme === 'light' ? 'dark' : 'light'
                    )
                }>
                    Click Me
                </Button>
        </div>
    );
}

export default DivWithButton;