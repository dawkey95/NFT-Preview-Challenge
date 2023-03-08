import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
	Stack,
	CardActionArea,
} from '@mui/material';
import NFTData from '../data/data';
import image from '../assets/images/image-equilibrium.jpg';
import hoverView from '../assets/images/icon-view.svg';
import avatar from '../assets/images/image-avatar.png';
import ethereum from '../assets/images/icon-ethereum.svg';
import clock from '../assets/images/icon-clock.svg';
import { useState } from 'react';

const NFTCard = () => {
	const { title, details, cost, timeLeft, user } = NFTData;
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};

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
						<CardActionArea
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<Box
								sx={{
									height: 278,
									borderRadius: 2,
									backgroundImage: `url(${image})`,
									backgroundSize: 'contain',
								}}
							>
								{isHover && (
									<>
										<CardMedia
											className="card-image"
											sx={{
												height: 278,
												borderRadius: 2,
												backgroundColor: 'customColors.cyan',
												opacity: 0.5,
											}}
										>
											<Box component="img" sx={{ height: 48 }} src={hoverView} alt="eye" />
										</CardMedia>
									</>
								)}
							</Box>
						</CardActionArea>

						<CardContent
							sx={{
								borderBottom: 'solid #2E405A 2px',
								justifyContent: 'start',
								py: 2,
								px: 0,
							}}
						>
							<Typography
								gutterBottom
								variant="h1"
								component="div"
								color={'customColors.white'}
								sx={{ fontSize: 22 }}
								fontWeight={600}
							>
								{title}
							</Typography>
							<Typography
								gutterBottom
								color="customColors.softBlue"
								sx={{ display: 'flex', alignItems: 'center', fontSize: 18 }}
								fontWeight={300}
							>
								{details}
							</Typography>

							<Box display={'flex'} justifyContent="space-between" paddingTop={1}>
								<Box display="flex" alignItems={'center'}>
									<Box
										component="img"
										sx={{ height: 18 }}
										src={ethereum}
										alt="ethereum"
									/>
									<Typography
										color="customColors.cyan"
										fontWeight={600}
										fontSize={14}
										marginLeft={1}
									>
										{cost}
									</Typography>
								</Box>

								<Box display="flex" alignItems={'center'}>
									<Box component="img" sx={{ height: 16 }} src={clock} alt="clock" />
									<Typography
										color="customColors.softBlue"
										fontWeight={400}
										fontSize={14}
										marginLeft={1}
									>
										{timeLeft} days left
									</Typography>
								</Box>
							</Box>
						</CardContent>

						<Box marginTop={2}>
							<Stack
								direction={'row'}
								spacing={2}
								justifyContent="flex-start"
								alignItems="center"
							>
								<img
									src={avatar}
									alt="guy staring into sunlight"
									width={33}
									style={{ border: 'solid #fff 1.5px', borderRadius: 100 }}
								/>
								<Typography color={'customColors.softBlue'} fontWeight={400}>
									Creation of{' '}
									<Box display={'inline'} color={'customColors.white'} fontWeight={400}>
										{user}
									</Box>
								</Typography>
							</Stack>
						</Box>
					</Card>
				</Grid>
			</Container>
		</>
	);
};

export default NFTCard;
