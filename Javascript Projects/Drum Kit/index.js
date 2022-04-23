// // JavaScript Drum Kit App

// {
//     const playingClass = 'playing',
//         crashRide = document.getElementById('crash-ride'),
//         hiHatTop = document.getElementById('hihat-top');

//     const animateCrashOrRide = () => {
//         crashRide.style.transform = 'rotate(0deg) scale(1.5)';
//     };

//     const animateHiHatClosed = () => {
//         hiHatTop.style.top = '171px';
//     };

//     const playSound = e => {
//         const keyCode = e.keyCode,
//             keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

//         if (!keyElement) return;

//         const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
//         audioElement.currentTime = 0;
//         audioElement.play();

//         switch (keyCode) {
//             case 69:
//             case 82:
//                 animateCrashOrRide();
//                 break;
//             case 75:
//                 animateHiHatClosed();
//                 break;
//         }

//         keyElement.classList.add(playingClass);
//     };

//     const removeCrashRideTransition = e => {
//         if (e.propertyName !== 'transform') return;

//         e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
//     };

//     const removeHiHatTopTransition = e => {
//         if (e.propertyName !== 'top') return;

//         e.target.style.top = '166px';
//     };

//     const removeKeyTransition = e => {
//         if (e.propertyName !== 'transform') return;

//         e.target.classList.remove(playingClass)
//     };

//     const drumKeys = Array.from(document.querySelectorAll('.key'));

//     drumKeys.forEach(key => {
//         key.addEventListener('transitionend', removeKeyTransition);
//     });

//     crashRide.addEventListener('transitionend', removeCrashRideTransition);
//       hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

//     window.addEventListener('keydown', playSound);
// }








{


	const anime = document.getElementById("crash-ride")
	const anime2 = document.getElementById("hihat-top")


	const transform = () => {
		anime.style.transform = "rotate(0deg) scale(1.5)"
	}

	const transform2 = () => {
		anime2.style.top = "171px"
	}


	const play = (e) => {

		const key = e.keyCode

		btn = document.querySelector(`div[data-key="${key}"]`)
		audio = document.querySelector(`audio[data-key="${key}"]`)

		if (!btn) return

		audio.currentTime = 0
		audio.play()


		switch (key) {
			case 69:
			case 82: transform(); break;
			case 75: transform2(); break
		}

		btn.classList.add("playing")

	}


	const remove1 = () => {
		anime.style.transform = "rotate(-7deg) scale(1.5)"
	}

	const remove2 = () => {
		anime2.style.top = "161px"
	}




	const drumKeys = document.querySelectorAll(".key")

	drumKeys.forEach(function (key) {
		key.addEventListener("transitionend", function (e) {
			btn.classList.remove("playing")
		})
	})



	anime.addEventListener("transitionend", remove1)

	anime2.addEventListener("transitionend", remove2)

	window.addEventListener("keydown", play)

}