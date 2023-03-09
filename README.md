# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout
- See hover states for interactive elements

### Screenshot

![](../NFT-Preview-Challenge/screenshot/NFT-Preview-Card.png)

### Links

- Solution URL: [GitHub](https://github.com/dawkey95/NFT-Preview-Challenge)
- Live Site URL: [Live Site](https://dakey-nft-card-challenge.netlify.app/)

## My process

### Built with

- HTML5
- CSS
- [React](https://reactjs.org/) - JS library
- [Material UI](https://mui.com/) - React Component Library

### What I learned

This project although easy gave me an impressive challenge when it came to the hovering states especially for the image with the hover state having a cyan opacity and the eye image centered. The feeling of finally figuring that out and having that dopamine rush with the "ooooh I get it now" was the reason I enjoyed the challenge so much. 
I learnt not to let the simplicity of a project make me complacent in my ability to still learn something new. 

One thing I wanted to try in this porject was to not hard code data into the card but instead I decided to create a `data.js`:

```js
const NFTData = {
	title: 'Equilibrium #3429',
	details: 'Our Equilibrium collection promotes balance and calm.',
	cost: '0.041 ETH',
	timeLeft: '3',
	user: 'Jules Wyvern',
	images: {
		image: '/images/image-equilibrium.jpg',
		hoverView: '/images/icon-view.svg',
		avatar: '/images/image-avatar.png',
		ethereum: '/images/icon-ethereum.svg',
		clock: '/images/icon-clock.svg',
	},
};

export default NFTData;
```

I then imported that file into my `Card.jsx`:

```js
import NFTData from '../data/data';
```

This was then destructured:

```js
const {
	title,
	details,
	cost,
	timeLeft,
	user,
	images: { image, hoverView, avatar, ethereum, clock },
} = NFTData;
```

Another thing I focused on was instead of trying to do all my styling using the `sx={}` prop, which can make the code look busy and harder to read, I decided to create an `sx-style.js` file where I created sx styles which I imported and used as props.

```js
export const typoSX = {
	color: 'customColors.white',
	fontSize: 22,
	fontWeight: 600,
	'&:hover': {
		color: 'customColors.cyan',
	},
};
```

Then I imported this into my `Card.js`:

```js
import {
	typoSX,
	userSX,
	cardSetup,
	costSX,
	timeSX,
} from '../assets/themes/sx-styles';
```

This allowed me to pass the sx-style as a prop into my components:

```js
<Typography gutterBottom variant="h1" sx={typoSX}>
	{title}
</Typography>
```

### Continued development

As I develop my skills and continue to work on projects I hope to keep refining my skills and continue to focus on the way I write my code in order to ensure it is readable, clean and functional. I want to keep focusing on learning Material UI and improve my skills in React as I continue to learn and improve my skills in vanialla JS. 

## Author

- GitHub - [@dawkey95](https://github.com/dawkey95)
- Frontend Mentor - [@dawkey95](https://www.frontendmentor.io/profile/dawkey95)
