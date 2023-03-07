import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import image from '../assets/images/image-equilibrium.jpg';
import ethereum from '../assets/images/icon-ethereum.svg';
import { Box, height } from '@mui/system';

const NFTCard = () => {
	return (
		<>
			<Container
				maxWidth={false}
				sx={{ height: '100vh', backgroundColor: 'customColors.background' }}
			>
				<Grid
					conatiner
					display="flex"
					alignItems="center"
					justifyContent="center"
					style={{ minHeight: '100vh' }}
				>
					<Card
						sx={{
							maxWidth: 327,
							height: 543,
							padding: 3,
							backgroundColor: 'customColors.cardBackground',
							borderRadius: 3,
						}}
					>
						<CardMedia sx={{ height: 278, borderRadius: 2 }} image={image} />
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								color={'customColors.white'}
								sx={{ fontSize: 22 }}
							>
								Equilibrium #3429
							</Typography>
							<Typography
								gutterBottom
								variant="body"
								color="customColors.softBlue"
								sx={{ display: 'flex', alignItems: 'center', fontSize: 18 }}
							>
								Our Equilibrium collection promotes balance and calm.
							</Typography>

							<Box width={88} height={19} display="flex" alignItems={'center'}>
								<img src={ethereum} alt="ethereum icon" />{' '}
								<Typography color="customColors.cyan" fontSize={14} marginLeft={1}>
									0.041 ETH
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Container>
		</>
	);
};

export default NFTCard;
