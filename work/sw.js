var cacheName='weatherPWA-step-6-1';


//files to be Cached
var fileToCache=[
	  '/',
	  '/index.html',
	  '/scripts/app.js',
	  '/styles/inline.css',
	  '/images/clear.png',
	  '/images/cloudy-scattered-showers.png',
	  '/images/cloudy.png',
	  '/images/fog.png',
	  '/images/ic_add_white_24px.svg',
	  '/images/ic_refresh_white_24px.svg',
	  '/images/partly-cloudy.png',
	  '/images/rain.png',
	  '/images/scattered-showers.png',
	  '/images/sleet.png',
	  '/images/snow.png',
	  '/images/thunderstorm.png',
	  '/images/wind.png'
		
	];



//Installing the Service Worker 
self.addEventListner('install',function(e){


	console.log('[ServiceWorker] Install');
	
	e.waitUntil(
	
		caches.open(cacheName).then(function(cache){
	
			console.log('[ServiceWorker] Caching App shell');
	
			return cache.addAll(fileToCache);
		})
		);
});





//Activating the Service Worker and Removing the Unused Cache 
self.addEventListner('activate',function(e){
	console.log('[ServiceWorker] Activate');

	e.waitUntil(
		
		caches.keys().then(function(keyList){
		
			return Promise.all(keyList.map(function(key){
		
				if(key!=cacheName)
		
				{
					console.log('[ServiceWorker] Removing Old Cache',key);
					return caches.delete(key);
				}
		
			}));

		})

		);
});