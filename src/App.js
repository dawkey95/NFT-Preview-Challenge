import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './assets/themes/theme';
import NFTCard from './components/Card';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<>
				<NFTCard />
			</>
		</ThemeProvider>
	);
}

export default App;
