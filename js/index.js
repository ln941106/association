$(function () {
	//首页导航
	$(".headerpage").load("header.html", function() {
		var links = $(".headerpage .navbar-nav>li>a");
		index = 0; //默认第一个菜单项
		//取当前URL最后一个/后面的文件名，pop方法是删除最后一个元素并返回最后一个元素
		url = location.href.split("?")[0].split("/").pop();
		if (url) { //如果有取到，则进行匹配，否则默认首页（即index所指向的那个）
			for (var i = 0; i < links.length; i++) { //遍历menu中的链接地址
				if (links[i].href.indexOf(url) != -1) {
					index = i;
					break;
				}
			}
		}
		$(".headerpage .navbar-nav>li").eq(index).addClass("active"); //给对应的<li>增加选中样式
		
	});
	
	
	//底部
	$(".footer").load("footer.html", function() {
		//推荐好友
		$('.follow_us').click(function () {
			$('.attention_wm').show()
		})
		$('.attention_wm div').click(function () {
			$('.attention_wm').hide()
		})
	});
	//页面跳转 案例详情文章获取
// 	$('.headerpage .associationBox li a').click(function() {
// 		// window.location.href = "association.html?id=" + $(this).attr('id');
// 		console.log('74857')
// 		// location.href="association.html?id=" + $(this).attr('id');
// 	})
})
//协会之窗
function test(id) {
	window.location.href = "association.html?id=" + id.id;
}
//行业资讯
function industry(id) {
	window.location.href = "industry.html?id=" + id.id;
}
//政策法规
function policy(id) {
	window.location.href = "policy.html?id=" + id.id;
}
//政策法规
function study(id) {
	window.location.href = "study.html?id=" + id.id;
}
//诚信联盟
function alliance(id) {
	window.location.href = "alliance.html?id=" + id.id;
}
//会员申请
function apply_for(id) {
	window.location.href = "apply_for.html?id=" + id.id;
}