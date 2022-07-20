function code(call) {
	var name = document.getElementById('name').value;
	let age = document.getElementById("age").value;
	let gt = document.getElementById('gt').value;
	let nợ1 = document.getElementById("a").innerHTML = "mày có trả tiền cho tao ko hả thằng " + name
	let nợ2 = document.getElementById("b").innerHTML = "mày nợ tao hơi lâu rồi đấy cái thằng DBRR"
	let nợ3 = document.getElementById("c").innerHTML = name + " mày có trả ko hả "
	let nợ4 = document.getElementById("d").innerHTML = "trả lời"
}
let code2 = () => {
	let l = prompt("có trả ko")
	switch (l) {
		case 'có':
			alert("nhớ trả")
			break;
		case 'không':
			alert("rửa cổ chờ tao lên chặt")
			break;
		case 'déo':
			alert("này thích quan tài màu gì để tao còn đặ mua cho")
			break;
		case 'ko':
			alert("mày mua quan tài sẵn đi thằng DBRR")
			break;
	}
}