import { useState } from 'react';
import {
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
	Stack,
	CardActionArea,
} from '@mui/material';

import {
	typoSX,
	userSX,
	cardSetup,
	costSX,
	timeSX,
} from '../assets/themes/sx-styles';
import NFTData from '../data/data';

import image from '../assets/images/image-equilibrium.jpg';
import hoverView from '../assets/images/icon-view.svg';
import avatar from '../assets/images/image-avatar.png';
import ethereum from '../assets/images/icon-ethereum.svg';
import clock from '../assets/images/icon-clock.svg';

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
					<Card sx={cardSetup}>
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
									<Grid>
										<Box
											display="flex"
											justifyContent="center"
											alignItems="center"
											sx={{
												height: 278,
												borderRadius: 2,
												backgroundColor: 'rgba(0, 255, 248, 0.5)',
											}}
										>
											<Box
												component="img"
												sx={{ height: 48, opacity: 1 }}
												src={hoverView}
												alt="eye"
											/>
										</Box>
									</Grid>
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
							<Typography gutterBottom variant="h1" sx={typoSX}>
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
									<Typography sx={costSX}>{cost}</Typography>
								</Box>

								<Box display="flex" alignItems={'center'}>
									<Box component="img" sx={{ height: 16 }} src={clock} alt="clock" />
									<Typography sx={timeSX}>{timeLeft} days left</Typography>
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
									<Box display={'inline'} sx={userSX}>
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
