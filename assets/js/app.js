imgs = ['440f39b106992076e5ebddff5b356215.jpg', 'cc03df4a8687237b52fdeaf869dd3572.jpg', '41e153f26303b418ba34753c89035d3c.jpg', '980dc167b3b1ed3d4c2d307561c25074.jpg', '19d786645336e32012a9e2c1432ac0cd.jpg', '2125217e348342d8a052cb4b79e59009.jpg', '46394bd37235d1e61a956e19d023bf4b.jpg', 'e0f5d9b861d94290263e6e67893bb726.jpg', 'a46ca97f48ca337cbb5c953a15d509f1.jpg', '277cd35b8dbbb09c32fd8393e845e392.jpg', 'a138c18fbe3527d2706b85eb05d4c2cb.jpg', 'af320d518d37e4698b1e77b3656b9a4d.jpg', '8d25790e2df6c072008f1cdcace1a3e7.jpg', '024942b88414b966f132f19cebcaaf9c.jpg', 'b378eb403853af03f133ca49a239917c.jpg', 'b86c49cc2594ad60ae69d81b08813005.jpg', '0c4223cc4a745cc69624d2c542ac5e75.jpg', '61ec0252b8c52a949defae44659dc93a.jpg', 'f969ca08c7026b8e11ec31b2ac2605ed.jpg', '2eb836e3c23c3144ed780067ef4eaae5.jpg', 'f6afd7371e345e0a352535b28f62e9ae.jpg', '35b5fe653da1846968f805b23fe21ea9.jpg', '1995a0cad59a1bb6afad11328bb13138.jpg', '8c2b91a10c3cc9eda6e30a833f192a72.jpg', 'ef59d6ef03a9998a4584356d0a676363.jpg', 'fd8cf40d331e010c5167ed65ac0a1c52.jpg'];
	
texts = ["Nnan axxam ur nesεi lsas Ur ittdumu imawlan","Qqaṛen yelha leqyas Diri win i tefṛen iberdan","Nnan bu lxir yugar fell-as Muḥal at iɣuṛ zman","asif ma iḥemml-ed Ur t-id-iḥebbes uffal","timess ma tceεl-ed Tessefsay ula d uzal","tagmat ma teǧhed Yiwen ur yezmir a ttinal","bu lbaṭel ma ibegss-ed Yiṣṣawaḍ ar lmuḥal", "Nnan kulci ḥudden-as tilas Yelha leḥsab d lmizan","Nnan wi sebben i leflas Tagara yedda εeryan","Abrid akken yebγu yiγzzif Mkul wa ileḥu akken i s-yehwa"]

function refreche() 
{
	po = $(".poits")[0];
	po.innerHTML = texts[Math.floor(Math.random() * texts.length)];

	panel = $(".maials")[0];
	panel.style.backgroundImage = "url('assets/imgs/"+imgs[Math.floor(Math.random() * imgs.length)];
+"')";
	

	$(".poits")[1].innerHTML = $(".poits")[0].innerHTML;
}

refreche();