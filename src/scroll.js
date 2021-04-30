<script>
	// init controller
	var controller = new ScrollMagic.Controller();
</script>
 
<div class="spacer s2"></div>
<div id="trigger2" class="spacer s0"></div>
<div id="pin2" class="box2 blue">
	<p>Take me with you!</p>
	<a href="#" class="viewsource">view source</a>
</div>
<div class="spacer s2"></div>
<script>
	$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#pin2"})
						.setPin("#pin2")
						.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
	});
</script>