//'atuo-textarea/1.0.0/atuo-textarea.cmd.min',
;define(['jquery/1.11.1/jquery.cmd.min'],function(require, exports, module){
  var $ = require('jquery/1.11.1/jquery.cmd.min');
	$.fn.autoTextarea = function(options) {
			var defaults={
					maxHeight:null,
					minHeight:$(this).height()
			};
			var opts = $.extend({}, defaults,options);
			
			return $(this).each(function() {
					$(this).bind("paste cut keydown keyup focus blur",function(){
							var height,style=this.style;
							this.style.height =  opts.minHeight + 'px';
							if (this.scrollHeight > opts.minHeight) {
									if (opts.maxHeight && this.scrollHeight > opts.maxHeight) {
											height = opts.maxHeight;
											style.overflowY = 'scroll';
									} else {
											height = this.scrollHeight;
											style.overflowY = 'hidden';
									}
									style.height = height  + 'px';
							}
					});
					$(this).bind('keydown', function(e){
					  
					  if (e.which == 8) {
						  var temp = /<span[^>]*>回复老总:<\/span>(<br>)*("")*\s*$/i; 
						  if ( temp.test($(this).html())) {
								  $(this).html('');
								
							 
							}
							
						
						} 
					});
			});
			
			

		
				
	};
});