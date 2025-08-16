import './styles.css'

const App = () => {

  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}

  const textoDoRotulo = 'Nome:'

  const aoClicar = () => {
    alert('oi')
  }
  
  return <div style={{ /*contexto javascript*/
    margin: 'auto',
    width: 768, //entende-se que é px
    backgroundColor: '#EEE',
    padding: 12,
    borderRadius: 8
    }}>

    <label 
      className="rotulo"
      htmlFor="nome"
      style={{display: 'block', marginBottom: 4}}>
        {textoDoRotulo}
    </label>

    <input
      type="text"
      id="nome"
      style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}  
    />

    <button
      style={estilosBotao}
      onClick={aoClicar}>
      Enviar
    </button>

  </div>
}

export default App