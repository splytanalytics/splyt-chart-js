The SPLYT Charting SDK for Javascript
============================

Welcome! This SDK allows you to integrate Splyt visualizations into your web application.

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

3. Use the Splyt_Chart functions to render charts into a <div> you specify.

    <pre>
        Splyt_Charts.render(
            "<em>[your div ID goes here]</em>",
            "<em>[your KPI/visualization ID goes here]</em>",
            <em>[epoch timestamp - begin range]</em>,
            <em>[epoch timestamp - end range]</em>,
            {<em>[Highcharts options]</em>}
        );
    </pre>

***

Example Applications
-------------------

To run the example, open `example/index.html` in your web browser.

***

*Copyright 2015 Knetik, Inc.*
