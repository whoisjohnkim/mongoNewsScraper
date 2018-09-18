

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index", {
            title: "Article Scraper",
            // customcss: `<link rel="stylesheet" href="/styles/timer.css"></link>`,
            // customjs: `<script type="text/javascript" src="/js/timer.js"></script>\n<script type="text/javascript" src="/js/index.js"></script>`
        });
    });

    app.get("/saved", function (req, res) {
        res.render("saved", {
            title: "Saved Articles",
            // customcss: `<link rel="stylesheet" href="/styles/timer.css"></link>`,
            // customjs: `<script type="text/javascript" src="/js/timer.js"></script>\n<script type="text/javascript" src="/js/index.js"></script>`
        });
    });
};