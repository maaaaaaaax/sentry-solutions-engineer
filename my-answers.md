# JavaScript: Ignore errors from 3rd party library?

>*Hi, I want to ignore all errors that come from https://somejslibrary.com/somelibrary.js as they are not impacting my application/experience and I can’t do anything about these errors since I don’t control the code/library. Here is my code/setup:*

    <!DOCTYPE html>
    <html>
    <head>
        <title>Sample Title</title>
    <script
    src="https://browser.sentry-cdn.com/6.2.5/bundle.min.js"
    integrity="sha384-+0tgGyP4idWu9/NA6Jbmnj3SApxIg65/GR1zo3qSieRNyzmmDQ/5a1Yu6mfmUw+v"
    crossorigin="anonymous"
    ></script>
        <script>
        Sentry.init({
            dsn: 'https://XXXXXXX@sentry.io/123',
            release: "1.1"
        });
        </script>

        <script src="https://somejslibrary.com/somelibrary.js" crossorigin="anonymous"></script>

        <script>
        var obj = {};
        obj.invalidFunction(); // this error should always be reported to Sentry
        </script>
    </head>
    <body>
        Body text...
    </body>
    </html>

See the ignoreErrors method explained at https://docs.sentry.io/clients/javascript/config/ 

Solution: add the following line to the Sentry.init method, as demonstrated in index.html:

ignoreErrors: ["https://somejslibrary.com/somelibrary.js", /.*/],

https://stackoverflow.com/questions/6711971/regular-expressions-match-anything

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
