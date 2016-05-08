;(function () {
	$('.reorder').each(function () {
		var container = $(this), store = container.find('input'),
			selected, saveorder;

		(saveorder = function () {
			var o = [];
			container.children('.item').each(function () { o.push($(this).data('id')); });
			store.val(o.join(','));
		})();

		container.on('mousedown', '.item', function (e) {
			e.preventDefault();
			selected = $(this).addClass('selected');
		});

		container.on('mouseenter', '.item', function (e) {
			e.preventDefault();
			var t = $(this);
			if (selected === undefined) return;
			if (this === selected[0]) return;

			if (t.index() < selected.index())
				selected.insertBefore($(this));
			else
				selected.insertAfter($(this));

			saveorder();
		});

		$('body').on('mouseup', function (e) {
			e.preventDefault();
			if (selected === undefined) return;

			selected.removeClass('selected');
			selected = undefined;
		});
	});
}());
