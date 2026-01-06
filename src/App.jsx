import Card from "./components/menu-components/Card";

const App = () => {
  return (
    <section className="w-full h-full select-none">
      <div className="flex flex-col justify-center items-center gap-4">
        <Card text="CEMETERY RUN" game="cemeteryrun" />
        <Card text="JOGO DA VELHA" game="tictactoe" />
        <Card text="PEDRA, PAPEL E TESOURA" game="jokenpo" />
        <Card text="JOGO DA MEMÓRIA" game="memorygame" />
      </div>
    </section>
  );
};

export default App;
