$(function () {
	let title      = document.title,
		animSeq    = ["/", "$", "\\", "|", "$"],
		animIndex  = 0,
		titleIndex = 0;

	function doInverseSpinZeroPitch() {
		let loadTitle = title.substring(0, titleIndex);
		if ( titleIndex > title.length ) {
			animIndex = 0;
			titleIndex = 0;
		}
		if ( animIndex > 3 ) {
			titleIndex++;
			animIndex = 0;
		}
		document.title = loadTitle + animSeq[animIndex];
		animIndex++;
	}

	window.setInterval(doInverseSpinZeroPitch, 250);
	let tKillNames = ["BRENOsx"];
	let ctKillNames = ["GETZE.US", "INIURIA.US", "MUTINY.PW", "AIMWARE.NET", "SKEET.CC", "1TAP.CC"];
	let weapons = ["deagle", "ssg", "ak47", "g3sg1", "negev"];
	let $killFeedContainer = $(".kill-feed");
	let $killFeedElement = $(".kill-feed > div").hide();

	function handleKillFeed() {
		const $newFeedElement = $killFeedElement.clone();
		$newFeedElement.find(".weapons img:first-child").attr("src", "src/images/" + weapons[Math.floor(Math.random() * weapons.length)] + ".png");
		$newFeedElement.find(".t").text(tKillNames[Math.floor(Math.random() * tKillNames.length)]);
		$newFeedElement.find(".ct").text(ctKillNames[Math.floor(Math.random() * ctKillNames.length)]);
		$killFeedContainer.append($newFeedElement.show().delay(2000).fadeOut(1000, function () {
			$(this).remove();
		}));
	}

	window.setInterval(handleKillFeed, 250);
});
