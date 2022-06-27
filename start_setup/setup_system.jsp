<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="css/css.css">
<script src="js/js.js"></script>
<meta>
<title>Start</title>
</head>
<body>
	<h1>Start a project</h1>

	<ol>	<li>Dynamic Web Project erstellen</li>
		<li>XML Validation bei exclude(xml) einfügen</li>
		<li>Ordnerstruktur erstellen mit WebContent/css/c_css.css und
			WebContent/js/c_js.js und WebContent/img/img.png</li>
		<li>Libs wie gson, logback, quartz, taglibs(4) in  WEB-INF/lib </li>
		<li>In web.xml
		<pre><code>
			&lt;servlet&gt;
			    &lt;servlet-name&gt;LoadOnStartAppConfiguration&lt;/servlet-name&gt;
			    &lt;servlet-class&gt;utility.LoadOnStartAppConfiguration&lt;/servlet-class&gt;
			    &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
		    &lt;/servlet&gt;</code></pre>
		    
		 </li>
		<li>logback.xml in src auf gleicher Ebene wie alle packages</li>
		<li>In WebContent index.jsp erstellen und mit nachfolgendem Inhalt ersetzen 
		<pre>
	<code>
&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;	pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;%@ taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot; %&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;

&lt;script	src=&quot;https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script	src=&quot;http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js&quot;&gt;&lt;/script&gt;

&lt;link rel=&quot;stylesheet&quot; href=&quot;css/jquery.toast.min.css&quot;&gt;
&lt;script src=&quot;js/jquery.toast.min.js&quot;&gt;&lt;/script&gt;	

	&lt;!-- Latest compiled and minified CSS for bootstrap-SELECT--&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css&quot;&gt;
	&lt;!-- Latest compiled and minified JavaScript for bootstrap-SELECT--&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.1/js/bootstrap-select.min.js&quot;&gt;&lt;/script&gt;

 &lt;script src=&quot;js/c_js.js&quot;&gt;&lt;/script&gt;   
 &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/css.css&quot;&gt;
 &lt;link rel=&quot;stylesheet&quot; href=&quot;css/c_css.css&quot;&gt;
 &lt;!-- bootstrap.css muss als letztes aufgelistet werden, ansonsten spackt irgendwas rum --&gt;
 &lt;link rel=&quot;stylesheet&quot; href=&quot;http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css&quot;&gt;
 
 &lt;link rel=&quot;icon&quot; href=&quot;favicon.ico?v=2&quot; type=&quot;image/vnd.microsoft.icon&quot;&gt;
 &lt;link rel=&quot;icon&quot; href=&quot;favicon.ico&quot; type=&quot;image/vnd.microsoft.icon&quot;&gt;
 
 
&lt;title&gt;Test&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
		test
&lt;/body&gt;
&lt;/html&gt;
	
				</code>
</pre>
		</li>
		<li>favicon.ico 32x32 in /img/favicon.ico erstellen. Das 32x32 Bild online in .ico umwandeln. Neuladen von favicon durch rechtsklick
		auf Tab und dann "Neuladen". http://convertico.com/ zum ico umwandlung</li>
		<li>Auf UTF-8 in Windows->Preferences->Web-> Alles auf UTF-8 umstellen</li>
		<li>Line width auf 120 umstellen, damit nicht ständig Zeilenumbrüche</li>
		<li>Autocomplete für Bootstrap:
    <ul>
    <li> http://stackoverflow.com/questions/43389337/autocomplete-von-available-css-classes-in-html-javascript-jquery-in-eclipse</li>
    <li> Bootstrap downloaden, entpacken und die datei bootstrap.css lokal verlinken. Nur dann taucht das bei Autocompletion auf.</li>
    <li> Schauen ob Eclipse Web Developer Tools 3.22 aus dem Eclipse Marketplace schon "installed".</li>
    </ul>
    <li>Autocomplete für JavaScript:</li>
    <ul>
    <li>http://www.heldentaten-raid.de/wiki/index.php?title=Links2topics#Autocomplete</li>
    </ul>
   
		<li>File Associations hinzufügen: <a href="http://stackoverflow.com/questions/7900575/how-to-add-css-autocomplete-to-eclipse">http://stackoverflow.com/questions/7900575/how-to-add-css-autocomplete-to-eclipse</a>
		<li>Weitere Einstellung: <a	href="http://stackoverflow.com/questions/12269560/javascript-editor-plugin-for-eclipse">http://stackoverflow.com/questions/12269560/javascript-editor-plugin-for-eclipse</a>
		<li>JBoss Tools editor für bootstrap content assist:<br> 
			* http://tools.jboss.org/downloads/jbosstools/mars/4.3.0.Final.html
			* http://stackoverflow.com/questions/33293627/jboss-tools-for-jsp-make-content-assist-work-for-bootstrap-class-as-in-html-e <br>
			
		 </li>
		<li>Einstellungen in Eclipse vornehmen
			<ol>
			<li>
				Aptana plugin: <a href="http://www.aptana.com/products/studio3/success_plugin.html">http://www.aptana.com/products/studio3/success_plugin.html</a>	
			</li>			
				<li>
					<p>
						jQuery Autocompletion with Eclipse Juno Java EE: <a
							href="http://stackoverflow.com/questions/11731884/jquery-autocompletion-with-eclipse-juno-java-ee">http://stackoverflow.com/questions/11731884/jquery-autocompletion-with-eclipse-juno-java-ee</a>
						<br> JSDT Query plugin installieren und dann jQuery lib über
						projekt properties zum JavaScript include path hinzufügen
					</p>
				</li>
				<li>
					<p>
						Enabling bootstrap content assist in eclipse: <a
							href="http://java.jasks.org/enabling_bootstrap_content_assist_in_eclipse">http://java.jasks.org/enabling_bootstrap_content_assist_in_eclipse</a>
						Tern aus dem Marketplace runter laden<br> Rechtsklick auf das
						Projekt-> Configure -> convert to Tern project<br> dannach
						hat man jQuery autocompletion in .css files.
					</p>
				</li>
			</ol>
		</li>

	</ol>

</body>
</html>
