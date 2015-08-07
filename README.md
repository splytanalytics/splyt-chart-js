The SPLYT SDK for Javascript w/ Charting
============================

Welcome! This SDK allows you to integrate websites and web-based applications with SPLYT, which provides analytics and insights about your app.
In addition, SPLYT empowers you with the ability to take actions that will improve your users' engagement.

Note that this SDK currently assumes that your Javascript code will be running in a browser.

***

Charts
------

1. Source `Splyt.all.js` in your document..

		<script src="Splyt.all.js"/>

2. When initializing the SDK, pass the API key that you created from the [Products tool on splyt.com](https://dashboard.splyt.com/admin/products).
   You can also set the SDK to only initialize for charts with the `chartOnly parameter`; see the {@linkcode Splyt.Charts} documentation for details.

	<pre>
		Splyt.init({
			"customerId": "<em>[your customer id goes here]</em>",
			"apikey": "<em>[your api key goes here]</em>",
		});
	</pre>

***

Sample Applications
-------------------

This SDK includes a sample app called BubblePop, a simple [shell game](http://en.wikipedia.org/wiki/Shell_game) that
demonstrates basic integration of data collection, tuning, and testing.  It also shows how to report purchases to SPLYT.

To run the sample, open `example/index.html` in your web browser.  The sample has been tested to work
properly in recent versions of Chrome, Firefox, and Safari.

***

*Copyright 2015 Knetik, Inc.*
