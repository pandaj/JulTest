<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Prueba de Julio</title>
	<link rel="stylesheet" type="text/css" href="css/jquery.mobile-1.3.2.css" />
	<script type="text/javascript" src="js/jquery.mobile-1.3.2.js"></script>
	<script type="text/javascript">
		$(document).on("pageinit", function() {
			var nextId = 1;
			
			$("#add").click(function() {
				nextId++;
				var content = "<div data-role='collapsible' id='set" + nextId + "'><h3>Section " + nextId + "</h3><p>I am the collapsible content in a set so this feels like an accordion. I am hidden by default because I have the 'collapsed' state; you need to expand the header to see me.</p></div>";
				$("#set").append( content ).collapsibleset('refresh');
			});
			
			$("#expand").click(function() {
				$("#set").children(":last").trigger( "expand" );
			});
			
			$("#collapse").click(function() {
				$("#set").children(":last").trigger( "collapse" );
			});
		});
	</script>
</head>

<body>
	Hola :D
	<div id="waka1" style="background-color:#090; padding:10px 20px;">
		Soy un boton :D
	</div>
	<div id="waka2" style="background-color:#990; padding:10px 20px;">
		Yo tambien soy un boton :P
	</div>
    <button type="button" data-icon="gear" data-theme="b" data-iconpos="right" data-mini="true" data-inline="true" id="add">Add</button>
	<button type="button" data-icon="plus" data-theme="b" data-iconpos="right" data-mini="true" data-inline="true" id="expand">Expand last</button>
	<button type="button" data-icon="minus" data-theme="b" data-iconpos="right" data-mini="true" data-inline="true" id="collapse">Collapse last</button>
	<div data-role="collapsible-set" data-content-theme="d" id="set">
		<div data-role="collapsible" id="set1" data-collapsed="true">
			<h3>Section 1</h3>
				<p>I'm the collapsible content.</p>
		</div>
	</div>
</body>
</html>