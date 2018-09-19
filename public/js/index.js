$(document).on("click", "#scrapeButton", function(event){
    $.ajax({
        method: "GET",
        url: "/scrape"
    }).then(function(data){
        console.log("We have scraped articles");
    })
})

// $(document).on("click", "#saveButton", function(event){
//     $.ajax({
//         method: "GET",
//         url: "/save"
//     }).then(function(data){
//         console.log("Saved this Article");
//     })
// })