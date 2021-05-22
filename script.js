function traitement_result(nquestion) {
	repa = document.getElementById('rep' + nquestion + 'a');
	if (
		repa.className == 'blue' ||
		repa.className == 'green' ||
		repa.className == 'red'
	) {
		repa = true;
	}
	repb = document.getElementById('rep' + nquestion + 'b');
	if (
		repb.className == 'blue' ||
		repb.className == 'green' ||
		repb.className == 'red'
	) {
		repb = true;
	}
	repc = document.getElementById('rep' + nquestion + 'c');
	if (
		repc.className == 'blue' ||
		repc.className == 'green' ||
		repc.className == 'red'
	) {
		repc = true;
	}
	var user_rep = '';
	if (repa == true) {
		user_rep = user_rep + 'A';
	}
	if (repb == true) {
		user_rep = user_rep + 'B';
	}
	if (repc == true) {
		user_rep = user_rep + 'C';
	}
	return user_rep;
}

function verif(user_rep, good_rep) {
	var note = 0;
	for (i = 1; i <= good_rep.length; i++) {
		x = i - 1;
		if (user_rep[x] == '') {
			user_rep[x] = 'Pas de reponse';
		}
		repa = document.getElementById('rep' + i + 'a');
		repb = document.getElementById('rep' + i + 'b');
		repc = document.getElementById('rep' + i + 'c');
		rep = document.getElementById('rep' + i);
		notehtml = document.getElementById('note');
		if (user_rep[x].includes('A') && good_rep[x].includes('A')) {
			repa.className = 'green';
		} else if (user_rep[x].includes('A')) {
			repa.className = 'red';
		}
		if (user_rep[x].includes('B') && good_rep[x].includes('B')) {
			repb.className = 'green';
		} else if (user_rep[x].includes('B')) {
			repb.className = 'red';
		}
		if (user_rep[x].includes('C') && good_rep[x].includes('C')) {
			repc.className = 'green';
		} else if (user_rep[x].includes('C')) {
			repc.className = 'red';
		}
		if (user_rep[x] == good_rep[x]) {
			note += 1;
			rep.innerHTML =
				"<li><h3><a class='good'>" +
				user_rep[x] +
				'</a> est la bonne reponse<h3></li>';
		} else {
			rep.innerHTML =
				"<li><h3><a class='bad'>" +
				user_rep[x] +
				"</a> la bonne reponse etait : <a class='good'>" +
				good_rep[x] +
				'</a><h3></li>';
		}
		if (note >= good_rep.length / 2) {
			notehtml.innerHTML =
				"<h2 id='note'>Note : <a class='good'>" + note + '/3<a/></h2>';
		} else {
			notehtml.innerHTML =
				"<h2 id='note'>Note : <a class='red'>" + note + '/3<a/></h2>';
		}
	}
}

function prog() {
	div_right = document.getElementById('right');
	var good_rep = ['A', 'B', 'BC'];
	var rep_user_tot = [];
	var tot_question = good_rep.length;
	for (i = 1; i <= tot_question; i++) {
		rep_user_tot.push(traitement_result(i));
	}
	verif(rep_user_tot, good_rep);
	div_right.style.visibility = 'visible';
}

function check(n) {
	var id = 'rep' + n;
	let button = document.getElementById(id);
	if (button.className == 'red') {
		button.className = '';
	} else if (button.className == 'green') {
		button.className = '';
	} else if (button.className == '') {
		button.className = 'blue';
	} else {
		button.className = '';
	}
}
