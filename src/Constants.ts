export const COLLISION_SCENE_URL = new URL("./assets/models/scene_collision.glb", import.meta.url).href;

export const STATIC_SCENE_URL = new URL("./assets/models/scene_desk_obj.glb", import.meta.url).href;

export const BOARD_TEXTURES = [
	new URL("./assets/boards/1.png", import.meta.url).href,
	new URL("./assets/boards/2.png", import.meta.url).href,
	new URL("./assets/boards/3.jpg", import.meta.url).href,
	new URL("./assets/boards/4.jpg", import.meta.url).href,
	new URL("./assets/boards/5.png", import.meta.url).href,
	new URL("./assets/boards/6.png", import.meta.url).href,
	new URL("./assets/boards/7.png", import.meta.url).href,
	new URL("./assets/boards/8.jpg", import.meta.url).href,
	new URL("./assets/boards/9.jpg", import.meta.url).href,
	new URL("./assets/boards/10.png", import.meta.url).href
];

export const AUDIO_URL = new URL("./assets/audio/我记得.m4a", import.meta.url).href;

export const BOARDS_INFO: Record<string, {title: string, author: string, describe: string}> = {
	1: {
		title: "《旅程》",
		author: "Fisher",
		describe: `
		生命是一场奇妙的旅程 <br>
		你，是途中最美的遇见 <br>
		我们都在旅途中寻找自己，认识世界 <br>
		与你相伴，所有的风景都有了新意 
		`
	},
	2: {
		title: "《我爱你》",
		author: "Lolita",
		describe: `
		我爱你 <br>
		不光因为你的样子 <br>
		还因为，和你在一起，我的样子 <br>
		不光因为你为我而做的事 <br>
		还因为，为了你，我能做成的事 
		`
	},
	3: {
		title: "《婚礼》",
		author: "我们",
		describe: `
		Fisher & Lolita<br>
		协同我们的父母，诚挚的要求您参加我们的婚礼仪式<br>
		分享我们的幸福时刻<br><br>
		2023年10月02日 11：18<br>
		农历八月十八 星期一<br>
		<br>
		请在展厅寻找请帖，期待您的到来
		<br>
		`
	},
	4: {
		title: "《联姻》",
		author: "证婚词",
		describe: `
		两姓联姻，一堂缔约<br>
		良缘永结，匹配同称<br>
		看此日桃花灼灼，宜室宜家<br>
		卜他年瓜瓞绵绵，尔昌尔炽
		`
	},
	5: {
		title: "《白头永偕》",
		author: "Fisher",
		describe: `
		喜今日赤绳系定 <br>
		珠联璧合 <br>
		卜他年白头永偕 <br>
		桂馥兰馨 
		`
	},
	6: {
		title: "《吸引力》",
		author: "Lolita",
		describe: `
		两个生活习性截然不同的人 <br>
		面对生活的各种摩擦 <br>
		仍心甘情愿，结伴同行 <br>
		这就是爱情神秘的吸引力 
		`
	},
	7: {
		title: "《三餐四季》",
		author: "Fisher",
		describe: `
		天光乍泻，落入凡尘烟火里 <br>
		我跨越千山万水而来 <br>
		只为与你共赴三餐四季 
		`
	},
	8: {
		title: "《感谢参观我们的婚纱展馆》",
		author: "Lolita",
		describe: `
		长这么大 <br>
		我第一次收到这么多红包 <br>
		感谢来参加参观的所有网友 <br>
		谢谢你们 <br>
		<br>
		祝：<br>
		恭喜发财，大吉大利！<br>
		希望新的一年里，你能有意想不到的收获和成就！
		`
	},
	9: {
		title: "《命中注定》",
		author: "Fisher",
		describe: `
		他们说有些人 有些爱 <br>
		从见到的第一眼开始 <br>
		就注定要羁绊一生 <br>
		我本来是不信的 <br>
		直到遇见你，这种感觉越来越强烈 <br>
		我才终于明白，这就是人们常说的命中注定 
		`
	},
	10: {
		title: "《孤岛》",
		author: "Lolita",
		describe: `
		每个人都是一座孤岛 <br>
		只是有的人 在海啸来临前 <br>
		找到了与之共鸣的那片海域
		`
	}
};

export const IFRAME_SRC = "/ocean/index.html";

export const ON_CHARACTER_JUMP = "on-character-jump";

export const ON_LOAD_PROGRESS = "on-load-progress";

export const ON_LOAD_MODEL_FINISH = "on-load-model-finish";

export const ON_PLAY_AUDIO = "on-play-audio";

export const ON_CLICK_RAY_CAST = "on-click-ray-cast";

export const ON_SHOW_TOOLTIP = "on-show-tooltip";

export const ON_HIDE_TOOLTIP = "on-hide-tooltip";

