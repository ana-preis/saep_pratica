import './App.css';

function App() {

  const handleClickEmprestimos = () => {
    window.location.href="/emprestimos"
  }

  return (
    <div className="main-container">
      <button onClick={handleClickEmprestimos}>Empréstimos</button>
      <button>Livros</button>
      <button>Estudantes</button>
      <button>Sair do Sistema</button>
    </div>
  );
}

export default App;
