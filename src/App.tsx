import { ConnectButton } from '@rainbow-me/rainbowkit';
import './App.css'

function App() {

  return (
    <>
     <div style={{ padding: '20px' }}>
      <h1>MetaMask simple demo</h1>
      <ConnectButton /> {/* Botón para conectar la billetera */}
    </div>
    </>
  )
}

export default App
