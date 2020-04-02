const formId = "1FAIpQLSfs_VVGz4C3BjZiUGRJoCC_YcqJYer-bHvzwghN-zTKaTB6dQ";
const entry1 = "entry.2007169641";
const entry2 = "entry.104803694";
const entry3 = "entry.2030727442";
const entry4 = "entry.2117446052"
const getPath = formId => `https://docs.google.com/forms/d/e/1FAIpQLSfs_VVGz4C3BjZiUGRJoCC_YcqJYer-bHvzwghN-zTKaTB6dQ/formResponse`;

const postToGoogleDB = function(data){
	const path = getPath(formId);
	const url = getURL(path,data);
	sendRequest('POST', url)
		.then(responseEvent);
}

const sendRequest = async function(verb, url){
	const request = initRequest(verb, url);
	const response = await fetch(request);
	return response;
}

const getURL = function(path, params){
	const url = new URL(path);
	for(let key in params){
		url.searchParams.set(key, params[key]);
	}
	return url;
}

const initRequest = function(verb, url){
	const init = new Object();
		init.method = verb;
		init.mode = 'no-cors';
	return new Request(url, init);
}

const responseEvent = response => alert('Success!');