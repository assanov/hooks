import useLocalStorage from './hooks/useLocalStorage';
import useUpdateLogger from './hooks/useUpdateLogger';

function App() {
    const [text, setText] = useLocalStorage<string>('input1', () => '');
    useUpdateLogger<string>(text);

    return (
        <div>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

export default App;
