import { Button } from "@/components/ui/button";
import ArrowIcon from "@/components/icon-arrow";

function App() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-linear-to-r from-gray-900 to-gray-950 font-jetbrains-mono">
            <h1 className="text-gray-600 text-sm">Password Generator</h1>
            <Button className="bg-green-200 text-gray-800 rounded-none px-26 py-4 text-sm uppercase flex items-center justify-center">
                <div className="flex items-center gap-4">
                    <p>Generate</p>
                    <ArrowIcon />
                </div>
            </Button>
        </div>
    );
}

export default App;
