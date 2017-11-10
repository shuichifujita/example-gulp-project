module.exports = $(() => {
	/*/--------------------------------\*\
	|*| VARIABLES
	\*\--------------------------------/*/
	// const
	const fps = 30;
	const frameMsec = 100 / fps >> 0;
	const ballNum = 500;

	// set canvas
	let cvs = $(".amoeba").get(0);
	let ctx = cvs.getContext("2d");

	// canvas scale
	cvs.width = $(".amoeba").width();
	cvs.height = $(".amoeba").height();
	let width = cvs.width;
	let height = cvs.height;

	// set center
	let centerX = width / 2;
	let centerY = height / 2;

	// first points
	let locX = new Array(ballNum);
	let locY = new Array(ballNum);

	// set speed
	let speedX = new Array(ballNum);
	let speedY = new Array(ballNum);

	// set obj and radius
	let ball = new Array(ballNum);

	// color
	let white = "rgba(255,255,255,1)";
	let gray = "rgba(153,153,153,1)";
	let black = "rgba(0,0,0,1)";
	let bgcolor = "#000";

	/*/--------------------------------\*\
	|*| INIT/PLAY
	\*\--------------------------------/*/
	$(() => {
		for (var i = 0; i < ballNum; i++) {
			// speed
			speedX[i] = (Math.random() - 0.5) * 4;
			speedY[i] = (Math.random() - 0.5) * 4;
			// first points
			locX[i] = Math.random() * width;
			locY[i] = Math.random() * height;
			// radius
			ball[i] = Math.random() * 32;
		}
		// set event handler
		setInterval(onDraw, frameMsec);
	});

	/*/--------------------------------\*\
	|*| INTERVAL HANDLER
	\*\--------------------------------/*/
	function onDraw() {
		// reset
		clearDisp();
		// draw
		smallball();
	}

	/*/--------------------------------\*\
	|*| OBJECTS
	\*\--------------------------------/*/
	// clear display
	function clearDisp() {
		ctx.beginPath();
		ctx.clearRect(0, 0, width, height);
	}

	// small balls
	function smallball() {
		// set position
		for (var i = 0; i < ballNum; i++) {
			// overwrite position
			locX[i] += speedX[i];
			locY[i] += speedY[i];

			// conflicted wall
			if (locX[i] < 0 || locX[i] > width) {
				speedX[i] *= -1.0;
			} else if (locY[i] < 0 || locY[i] > height) {
				speedY[i] *= -1.0;
			}

			// blur
			ctx.shadowBlur = ball[i];
			ctx.shadowColor = white;
			// draw ball
			ctx.beginPath();
			ctx.fillStyle = black;
			ctx.arc(locX[i], locY[i], ball[i], 0, Math.PI * 2.0, true);
			ctx.fill();

		}
	}

	// rondom color
	function color() {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		return "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
	}
});



// -------- end -------- //
