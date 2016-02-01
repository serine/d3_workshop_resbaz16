//console.log("Hello ResBaz 2016");
//
//// Make Variable
//
//var check_number = 42;
//var check_string = "new string";
//
//console.log(check_number, check_string);
//
//// Make Function
//
//function check_function(the_answer) {
//    console.log(the_answer);
//};
//
////check_function();
//----------------------------------------------------------------------------------------------------
// Interactive Recipe
//----------------------------------------------------------------------------------------------------
//
// Get HTML elemnts
var cat_image = document.getElementById('cat_img');

var get_feed_button = document.getElementById('feed_button');
var get_run_button = document.getElementById('run_button');
// Add an event listener

//cat_img.addEventListener('click', meow);
get_feed_button.addEventListener('click', feed);
get_run_button.addEventListener('click', run);
//get_feed_button.addEventListener('click', function(){alert("woof")});
//console.log(Object.getOwnPropertyNames(document))
//console.log(Object.keys(document))
function meow() {
    alert("Meow");
}
//----------------------------------------------------------------------------------------------------

// Manipulate HTML element
//
function feed(){
   //cat_image.style.width = (cat_image.offsetWidth + 30.0) + 'px';
   cat_image.style.width = (cat_image.width + 30.0) + 'px';
}

function run(){
   //cat_image.style.width = (cat_image.offsetWidth - 30.0) + 'px';
   cat_image.style.width = (cat_image.width - 30.0) + 'px';
}
