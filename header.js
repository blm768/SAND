function header()	{
	
	const header = document.createElement("header");
	
	header.innerHTML = "<div id = 'universalHeader'> <a href = '/index.html'><h1 id = 'topLogo'>Sand</h1></a><h4>A Genre-Agnostic TTRPG</h4><div id = 'options'><a href = '/rules/rulesHomepage.html'><div class = 'headerOption'>Rules</div></a><div class = 'headerOption'><a href = '/playersPage/player'>For Players</a></div><div class = 'headerOption'><a href = '/GMsPage/GM.html'>For Game Masters</a></div><div class = 'headerOption'><a href = '/modules/modules.html'>Modules</a></div></div>"
	
	document.body.appendChild(header);
	
}