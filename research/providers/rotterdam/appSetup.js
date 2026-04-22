window.dojoConfig = {
    // Default Dojo config
	isDebug: false,
	useCustomLogger: true,
	async: true,
	baseUrl: "mxclientsystem/dojo/",
	cacheBust: "639120283760966107",
	//#{OTHER_DIR}Redirect: "#{RTL_REDIRECT}",

    // CSP Dojo config
	has: {
        "csp-restrictions": true
    },
	blankGif: "mxclientsystem/dojo/resources/blank.gif"
};

if (!document.cookie || !document.cookie.match(/(^|;)originURI=/gi))
	document.cookie = "originURI=/login.html" + (window.location.protocol === "https:" ? ";SameSite=None;Secure" : "");
