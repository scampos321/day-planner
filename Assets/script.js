window.setInterval(function() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000);

var containerArray = [
{
    hour: '9:00AM',
    description: '' 
}, 
{
    hour: '10:00AM',
    description: ''
},
{
    hour: '11:00AM',
    description: ''
},
{
    hour: '12:00PM',
    description: ''
},
{
    hour: '1:00PM',
    description: ''
},
{
    hour: '2:00PM',
    description: ''
}, 
{
    hour: '3:00PM',
    description: ''
},
{
    hour: '4:00PM',
    description: ''
},
{
    hour: '5:00PM',
    description: ''
}
]

// nine
var nineAMEvents = JSON.parse(localStorage.getItem('nine am events')) || [];

var nineAMInput = $('#nineAM input');
var nineAMBtn = $('.nineAMrow .saveBtn');

nineAMBtn.on('click', event => {
    var nineAMInputVal = nineAMInput.val();
    nineAMEvents.push(nineAMInputVal);
    localStorage.setItem('nine am events', JSON.stringify(nineAMEvents));
    location.reload(true);
})

nineAMEvents.forEach((event, index)=>{
    var eventItem = $(`<div class="event ${event}" id="${index}">${event}</div>`);
    $(".nineAMrow .event-container").append(eventItem);
})

// ten
var tenAMEvents = JSON.parse(localStorage.getItem('ten am events')) || [];

var tenAMInput = $('#tenAM input');
var tenAMBtn = $('.tenAMrow .saveBtn');

tenAMBtn.on('click', event => {
    var tenAMInputVal = tenAMInput.val();
    tenAMEvents.push(tenAMInputVal);
    localStorage.setItem('ten am events', JSON.stringify(tenAMEvents));
    location.reload(true);
})

tenAMEvents.forEach((event, index)=>{
    var eventItem = $(`<div class="event ${event}" id="${index}">${event}</div>`);
    $(".tenAMrow .event-container").append(eventItem);
})

// eleven
var elevenAMEvents = JSON.parse(localStorage.getItem('eleven am events')) || [];

var elevenAMInput = $('#elevenAM input');
var elevenAMBtn = $('.elevenAMrow .saveBtn');

elevenAMBtn.on('click', event => {
    var elevenAMInputVal = elevenAMInput.val();
    elevenAMEvents.push(elevenAMInputVal);
    localStorage.setItem('eleven am events', JSON.stringify(elevenAMEvents));
    location.reload(true);
})

elevenAMEvents.forEach((event, index)=>{
    var eventItem = $(`<div class="event ${event}" id="${index}">${event}</div>`);
    $(".elevenAMrow .event-container").append(eventItem);
})

// twelve
var twelveAMEvents = JSON.parse(localStorage.getItem('twelve am events')) || [];

var twelveAMInput = $('#twelveAM input');
var twelveAMBtn = $('.twelveAMrow .saveBtn');

twelveAMBtn.on('click', event => {
    var twelveAMInputVal = twelveAMInput.val();
    twelveAMEvents.push(twelveAMInputVal);
    localStorage.setItem('twelve am events', JSON.stringify(twelveAMEvents));
    location.reload(true);
})

twelveAMEvents.forEach((event, index)=>{
    var eventItem = $(`<div class="event ${event}" id="${index}">${event}</div>`);
    $(".twelveAMrow .event-container").append(eventItem);
})

// one
var onePMEvents = JSON.parse(localStorage.getItem('one pm events')) || [];

var onePMInput = $('#onePM input');
var onePMBtn = $('.onePMrow .saveBtn');

onePMBtn.on('click', event => {
    var onePMInputVal = onePMInput.val();
    onePMEvents.push(onePMInputVal);
    localStorage.setItem('one pm events', JSON.stringify(onePMEvents));
    location.reload(true);
})

onePMEvents.forEach((event, index)=>{
    var eventItem = $(`<div class="event ${event}" id="${index}">${event}</div>`);
    $(".onePMrow .event-container").append(eventItem);
})

// two
var twoPMEvents = JSON.parse(localStorage.getItem('two pm events')) || [];

var twoPMInput = $('#twoPM input');
var twoPMBtn = $('.twoPMrow .saveBtn');

twoPMBtn.on('click', event => {
    var twoPMInputVal = twoPMInput.val();
    twoPMEvents.push(twoPMInputVal);
    localStorage.setItem('two pm events', JSON.stringify(twoPMEvents));
    location.reload(true);
})

twoPMEvents.forEach((event, index)=>{
    var eventItem = $(`<div class="event ${event}" id="${index}">${event}</div>`);
    $(".twoPMrow .event-container").append(eventItem);
})

// three
var threePMEvents = JSON.parse(localStorage.getItem('three pm events')) || [];

var threePMInput = $('#threePM input');
var threePMBtn = $('.threePMrow .saveBtn');

threePMBtn.on('click', event => {
    var threePMInputVal = threePMInput.val();
    threePMEvents.push(threePMInputVal);
    localStorage.setItem('three pm events', JSON.stringify(threePMEvents));
    location.reload(true);
})

threePMEvents.forEach((event, index)=>{
    var eventItem = $(`<div class="event ${event}" id="${index}">${event}</div>`);
    $(".threePMrow .event-container").append(eventItem);
})

// four
var fourPMEvents = JSON.parse(localStorage.getItem('four pm events')) || [];

var fourPMInput = $('#fourPM input');
var fourPMBtn = $('.fourPMrow .saveBtn');

fourPMBtn.on('click', event => {
    var fourPMInputVal = fourPMInput.val();
    fourPMEvents.push(fourPMInputVal);
    localStorage.setItem('four pm events', JSON.stringify(fourPMEvents));
    location.reload(true);
})

fourPMEvents.forEach((event, index)=>{
    var eventItem = $(`<div class="event ${event}" id="${index}">${event}</div>`);
    $(".fourPMrow .event-container").append(eventItem);
})

// five
var fivePMEvents = JSON.parse(localStorage.getItem('five pm events')) || [];

var fivePMInput = $('#fivePM input');
var fivePMBtn = $('.fivePMrow .saveBtn');

fivePMBtn.on('click', event => {
    var fivePMInputVal = fivePMInput.val();
    fivePMEvents.push(fivePMInputVal);
    localStorage.setItem('five pm events', JSON.stringify(fivePMEvents));
    location.reload(true);
})

fivePMEvents.forEach((event, index)=>{
    var eventItem = $(`<div class="event ${event}" id="${index}">${event}</div>`);
    $(".fivePMrow .event-container").append(eventItem);
})



