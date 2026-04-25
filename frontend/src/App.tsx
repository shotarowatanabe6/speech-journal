import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <p class="text-3xl font-bold underline">Hello world!</p>
          <Button variant={"outline"}>shadcn/uiで作成したボタン</Button>
        </div>
      </section>
    </>
  );
}

export default App;
