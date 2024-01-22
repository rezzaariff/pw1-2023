$(document).ready(function() {
	
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	$('#calendar').fullCalendar({
		editable: true,
		events: [
			{
				title: 'Tahun Baru bersama Wakatobi',
				start: new Date(y, m, 1)
			},
			{
				title: 'Lomba Fotografi Bawah Laut',
				start: new Date(y, m, d-5)
			},
			{
				id: 999,
				title: 'Festival Kuliner Lokal',
				start: new Date(y, m, d-3, 16, 0),
			},
			{
				id: 999,
				title: 'Balap Perahu Tradisional',
				start: new Date(y, m, d+4, 16, 0),
			},
			{
				title: 'Kampanye Pembersihan Lingkungan',
				start: new Date(y, m, d, 10, 30)
			},
			{
				title: 'Pameran Seni dan Kerajinan Budaya',
				start: new Date(y, m, d+1, 19, 0),
			},
			{
				title: 'Workshop Konservasi untuk Anak-anak',
				start: new Date(y, m, 28),
				url: '#'
			},
			{
				title: 'Pelatihan Menyelam untuk Pemula',
				start: new Date(y, m+1, 12)
			},
			{
				title: 'Festival Kapal Layar',
				start: new Date(y, m+1, d+5)
			},
			{
				id: 999,
				title: 'Pertunjukan Film Bawah Air',
				start: new Date(y, m+1, d-6, 16, 0),
			},
			{
				id: 999,
				title: 'Kompetisi Kapal Hias',
				start: new Date(y, m+1, d+4, 16, 0),
			},
			{
				title: 'Pertunjukan Wayang Kulit',
				start: new Date(y, m-1, d-2, 10, 30)
			},
			{
				title: 'Petualangan Pulau Terpencil',
				start: new Date(y, m-1, d+5, 19, 0),
			},
			{
				title: 'Kelas Yoga Pantai',
				start: new Date(y, m-1, 28),
				url: '#'
			}
		]
	});
	
});