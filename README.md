<h1>HTML5 Fruit Salad</h1>

HTML5 Fruit Salad is a partner to build your file structure and to deploy your website using the best concepts and some of the best libraries used worldwide, including Gulp The streaming build system and Node a platform built on JavaScript.

<h2>Usage</h2>

<a href="http://nodejs.org/" target="_blank">Install nodejs</a> if you don't have installed.

<h3>Install dependences</h3>

<code>
npm install gulp gulp-uglify gulp-minify-css gulp-imagemin gulp-useref gulp-jsvalidate gulp-concat gulp-cache
</code>

<h2>The basic structure of the project:</h2>

<pre><code>
├── assets/
│   └── css/
│     └── img/  
│     │ └── glyphicons-halflings.png  
│     │ └── glyphicons-halflings-white.png
│     └── libs/ 
│     │ └── bootstrap.min.css
│     └── vendor/   
│     │ └── main.css
│     │ └── normalize.css
│     └── screen.css    
│   └── fonts/
│   └── imgs/
│   └── js/
│     └── libs/
│     └── vendor/
│     │ └── jquery-1.10.2.min.js
│     │ └── modernizr-2.6.2.min.js
│     └── functions.js
│   └── 404.html
│   └── favicon.ico
│   └── index.html
├── deploy/
│   └── css/
│     └── img/  
│     │ └── glyphicons-halflings.png  
│     │ └── glyphicons-halflings-white.png
│     └── vendor/   
│     │ └── main.css
│     │ └── normalize.css
│     └── all.css   
│     └── plugins.css   
│   └── fonts/
│   └── imgs/
│   └── js/
│     └── vendor/
│     │ └── jquery-1.10.2.min.js
│     │ └── modernizr-2.6.2.min.js
│     └── all.js
│     └── plugins.js
│   └── 404.html
│   └── favicon.ico
│   └── index.html
├── .gitattributes
├── .gitignore
├── .htaccess
├── crossdomain.xml
├── gulpfile.js
├── LICENSE
├── README.md
└── robots.txt
</code>
</pre>

<h2>Guides</h2>

Work path: assets/<br>
Deploy path: deploy/<br>

CSS path: assets/css/<br>
CSS libraries  path: assets/css/libs/<br>

JS path: assets/js/<br>
JS libraries  path: assets/js/libs/
