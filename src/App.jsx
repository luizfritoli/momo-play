import Card from "./components/menu-components/Card";

const App = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <Card text="CEMETERY RUN" game="jokenpo" />
        <Card text="JOGO DA VELHA" game="jokenpo" />
        <Card text="PEDRA, PAPEL E TESOURA" game="jokenpo" />
      </div>
    </section>
  );
};

export default App;
