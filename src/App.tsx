import { ButtonTest } from './components/Button/button-test'

function App() {
  return (
    <div className="app">
      <ButtonTest />
      <div
        style={{ width: 500, height: 200, backgroundColor: 'pink' }}
        contentEditable
      ></div>
    </div>
  )
}

export default App
