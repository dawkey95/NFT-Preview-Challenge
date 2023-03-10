import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		customColors: {
			background: '#0D192C',
			cardBackground: '#15263F',
			white: '#FFFFFF',
			softBlue: '#8BACD9',
			cyan: '#00FFF8',
			darkBlue: '#2E405A',
		},
	},
	typography: {
		fontFamily: ['Outfit', 'sans-serif'].join(','),
	},
});

export default theme;
