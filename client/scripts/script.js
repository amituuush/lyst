// $(document).ready(function() {
//
//     var items = {};
//
// 	$("button.add-itemf").click(function(event) {
// 	var name = $("input.item-input").val();
//
//     var openLi = "<li class='new-item'>";
//     var deleteIcon = "<i class='fa fa-times'></i>";
//     var checkOrUndoIcon = "<i class='fa fa-check-circle fa-lg check-or-undo' data-value='"+ name +"'></i>";
//     var closeLi = "</li>";
//
//     items[name] = false;
//
// 		$("ul").prepend(openLi + name + deleteIcon + checkOrUndoIcon + closeLi);
// 		$(".fa-times, .fa-check-circle").hide();
// 		$("input").val("");
// 	});
//
// 	$("ul").on("mouseover", "li.new-item", function() {
// 		$(this).children().show();
// 	});
//
// 	$("ul").on("mouseleave", "li.new-item", function() {
// 		$(this).children().hide();
// 	});
//
// 	// Check and Uncheck Functions
//
// 	$("ul").on("click", ".check-or-undo", function(event) {
//     var element = $(this);
//     var name = element.data('value');
//
//     element.parent().toggleClass("checked");
//     element.toggleClass("fa-check-circle");
//     element.toggleClass("fa-undo");
//
//     items[name] = !items[name];
// 	});
//
// 	$("ul").on("click", ".fa-times", function() {
// 		$(this).parent().hide();
// 	});
// });
