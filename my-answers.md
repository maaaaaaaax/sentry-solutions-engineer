## 1. JavaScript: Ignore errors from 3rd party library?

***

Hi Ido,

Thanks for reaching out! Sentry's JavaScript client includes an ignoreErrors method, which allows developers to silence errors that are a result of something other than your application, or errors that you’re completely not interested in. ignoreErrors is a list of these messages to be filtered out before being sent to Sentry as either regular expressions or strings. When using strings, they’ll partially match the messages, so if you need to achieve an exact match, use RegExp patterns instead.

You can read more about ignoreErrors in Sentry's documentation here: https://docs.sentry.io/clients/javascript/config/ 

(Hint: Ctrl+F > "ignoreErrors" will help you navigate the page quickly.)

I've taken the liberty of updating the HTML code that you provided to include a working implementation of Sentry's ignoreErrors method, which you can review here: https://github.com/maaaaaaaax/sentry-solutions-engineer/blob/main/1/index.html

If you have any questions about regular expressions, I found the following resources to be helpful:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

https://stackoverflow.com/questions/6711971/regular-expressions-match-anything

I hope that helps you! Please let me know if there is anything else I can do to help.

Best,

Max Wiederholt

Solutions Engineer @ Sentry.io  
max.wiederholt@sentry.io