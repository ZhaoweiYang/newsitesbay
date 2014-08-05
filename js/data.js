

var siteIco = [];
var siteLogo = [];
var siteSlogan = [];
var searchName = [];
var url =[];
var searchUrl = [];
for (var i = 0; i < data.length; i++) {
	siteIco.push(data[i].siteIco);
	siteLogo.push(data[i].siteLogo);
	siteSlogan.push(data[i].siteSlogan);
	searchName.push(data[i].searchName);
	url.push(data[i].url);
	searchUrl.push(data[i].searchUrl.substr(1,data[i].searchUrl.length));
};

// 这是常用栏目
var commonA = [];
var commonUrl = [
"http://www.gu1234.com/",
"http://www.baidu.com/",
"http://www.zhihu.com/",
"http://music.163.com/",
"http://www.youku.com/",
"http://www.weibo.com/",
"http://huaban.com/"
];

for (var i = 0; i < commonUrl.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==commonUrl[i]) {
			commonA.push(j);
		};
	};
};

// 这是导航栏里面的综合，注意：必须searchUrl要不为空且不存在编码问题
var all = [];
var allUrl = [
"http://movie.douban.com/",
"http://open.163.com",
"http://www.guokr.com/",
"http://www.taobao.com/",
"http://tuan.baidu.com/",
"http://www.yinyuetai.com/"
];

for (var i = 0; i < allUrl.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==allUrl[i]) {
			all.push(j);
		};
	};
};

// 以下是导航栏里面的各种角色

var roleNameA = ["一群大学生","简单的生活","追剧的人类"];
var roleIdA = ["undergraduate","easylife","video"];

// 音乐爱好者
var video = [];
var videoUrl = [
"http://www.iqiyi.com/",
"http://www.tudou.com/",
"http://www.yyets.com/"
];

for (var i = 0; i < videoUrl.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==videoUrl[i]) {
			video.push(j);
		};
	};
};



// 程序员
var easylife = [];
var easylifeUrl = [
"http://www.lofter.com",
"http://www.topit.me/",
"http://book.douban.com/",
"http://jing.fm/"
];

for (var i = 0; i < easylifeUrl.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==easylifeUrl[i]) {
			easylife.push(j);
		};
	};
};

// 文案工作者
var undergraduate = [];
var undergraduateUrl = [
"http://open.163.com",
"http://dict.youdao.com/",
"http://www.ali213.net/",
"http://meituan.com/",
"http://www.bilibili.com/",
"http://www.mafengwo.cn/"
];

for (var i = 0; i < undergraduateUrl.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==undergraduateUrl[i]) {
			undergraduate.push(j);
		};
	};
};









