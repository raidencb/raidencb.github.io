var request = new XMLHttpRequest();
request.open('GET','https://www.callboxinc.com/wp-json/wp/v2/posts',true);
var posts = "";

request.onload = function(){
	// begin accesing JSON data here
	var data = JSON.parse(this.response);
	if(request.status >= 200 && request.status < 400){
	
		var ul = document.createElement('ul');
        ul.setAttribute('id','proList');  

		data.forEach(post => {
		    var li = document.createElement('li');
            li.setAttribute('class','item');

            ul.appendChild(li);

            li.innerHTML=post.title.rendered;
		});

		document.body.appendChild(ul)

	} else{

	}
};
request.send();
