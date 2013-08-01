<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Prueba de Julio</title>
	<link rel="stylesheet" type="text/css" href="css/jquery.mobile-1.3.2.css" />
	<script type="text/javascript" src="js/jquery.mobile-1.3.2.js"></script>
	<script type="text/javascript" src="js/jquery-1.9.1.js"></script>
	<script type="text/javascript">
		jQuery(document).on("pageinit", function() {
			var nextId = 1;
			
			jQuery("#add").click(function() {
				nextId++;
				var content = "<div data-role='collapsible' id='set" + nextId + "'><h3>Section " + nextId + "</h3><p>I am the collapsible content in a set so this feels like an accordion. I am hidden by default because I have the 'collapsed' state; you need to expand the header to see me.</p></div>";
				jQuery("#set").append( content ).collapsibleset('refresh');
			});
			
			jQuery("#expand").click(function() {
				jQuery("#set").children(":last").trigger( "expand" );
			});
			
			jQuery("#collapse").click(function() {
				jQuery("#set").children(":last").trigger( "collapse" );
			});
		});
	</script>
</head>

<body>
	Hola :D
	<?php include 'pagina1.php'; ?>
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