import { BrowserRouter } from 'react-router-dom'
import Button from './components/ui/Button'
import { HiCheck } from 'react-icons/hi2'

import Layout from './layouts'

function App() {
    return (
        <BrowserRouter>
            <Layout />
            {/* <Button icon={<HiCheck />}>Button</Button>
            <Button
                variant="plain"
                onClick={() => console.log('1')}
                icon={<HiCheck />}
            >
                Button
            </Button> */}
        </BrowserRouter>
    )
}

export default App
