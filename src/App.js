import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<a
					className="App-link"
					href="https://react-hook-form.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React hooks Form
				</a>
			</header>
			<section>
				<RegisterForm />
			</section>
		</div>
	);
}

export default App;
