let myBubbleChart;
let myAreaChart;
let myWordFreqVis;
let mySwarmPlotVis;
let myDensityVis;
let mytweetsource = [];
let tweetSelectedArray = [];
let mergedArray = [];
let tweetSelected = "";
let myBargraph = [];
let config = [
    {key: "tweet_source", title: "Tweet Source"},
];


//let parseDateDensity = d3.timeParse("%Y-%m-%d %H:%M:%S+00:00");
//let userInputVal = document.getElementById("user-input-keyword").value;

new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    navigation: true,
    scrollHorizontally: false,
    anchors: ['section-home', 'section-about', 'section-isabelle', 'section-tom', 'section-blathers', 'section-emoji', 'section-closing', 'section-credit', 'section-sources']
});

// load data
Promise.all([
    d3.csv("data/tweet_emojis.csv"),
    d3.csv("data/emojiWIP4.csv"),
    d3.json("data/hashtags_frequency_by_date.json"),
    d3.csv("data/tweet_text_word_frequency_not_stemmed_top100.csv"),
    d3.csv("data/animal_crossing_tweets_original_20211030_to_20211105_top1000.csv"),
    d3.csv("data/animal_crossing_tweets_original2_20211107.csv", (row) => {
		row.tweet_id = +row.tweet_id
		row.tweet_created_at = parseDateDensity(row.tweet_created_at)
		return row
	}),
    d3.csv("data/volume_data.csv", (row) => {
		row.volume = +row.volume
		row.date = parseDateDensity(row.date)
		return row
	}),
    d3.csv("data/animal_crossing_tweets_og_20211030_to_20211105.csv"),
]).then(function(data) {
    data[5].sort(function(a, b){
        return a.tweet_created_at - b.tweet_created_at
    })
    initVisualizations(data);
}).catch(function(err) {
    console.log(err);
})

function initVisualizations(allDataArray) {
    myBubbleChart = new EmojiBubble("emojibubble", allDataArray[0], allDataArray[1]);
}

// take user input of keyword or phrase searches in the swarm plot
function inputChange() {
    userInputVal = document.getElementById("user-input-keyword").value;
    mySwarmPlotVis.wrangleData();
}

function inputReset(){
    userInputVal = "";
    mySwarmPlotVis.wrangleData();
}

function clearSelection() {
    d3.selectAll(".tweet-sources")
        .attr("fill", "black");
    d3.select(".tstooltip")
        .remove();
    tweetSelected = "";
    tweetSelectedArray = [];
    mytweetsource.bg_sourceChart();
    //updateBarVisualization();
}

/*function updateBarVisualization() {
    myBargraph.wrangleData()
}*/

/*function brushed() {
	let selectionRange = d3.brushSelection(d3.select(".brush").node());
	let selectionDomain = selectionRange.map(myDensityVis.x.invert);
	myDensityVis.wrangleData(selectionDomain);
}*/
