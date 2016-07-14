/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Khaidir Afif");

 // var awesomeThoughts = "I am Afif and I am AWESOME!";

 // console.log(awesomeThoughts);

 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

 // $("#main").append(funThoughts);

//var formattedName = HTMLheaderName.replace("%data%", "Khaidir Afif");
//var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Developer");
// var bio = {
// 	'name' : 'Khaidir Afif',
// 	'role' : 'Front-end Developer',
// 	'contacts' : {
// 		'mobile' : '0857-1575-0154',
// 		'email' : 'afifkhaidir@live.com',
// 		'twitter' : 'https://twitter.com/afif_khaidir',
// 		'github' : 'https://github.com/afifkhaidir',
// 		'blog' : 'https://ilmuaiti.blogspot.co.id',
// 		'location' : 'Bogor, Indonesia'
// 	},
// 	'picture' : 'images/fry.jpg',
// 	'welcomeMsg' : 'Welcome to Khaidir Afif Page',
// 	'skills' : ['JavaScript','HTML5','CSS3','Python','Machine Learning']
// };

// var work = {};
// work.position = 'CEO';
// work.employer = 'Nikaz Art';
// work.years = 2015;
// work.city = 'Bogor';

// var education = {};
// education['school'] = "Bogor Agricultural University";
// education['degree'] = 'Bachelor';
// education['years'] = '2012';
// education['city'] = 'Bogor';

// $("#header").append(HTMLheaderName.replace('%data%',bio.name));
// $("#header").append(HTMLheaderRole.replace('%data%',bio.role));
// $("#header").append(HTMLbioPic.replace('%data%',bio.picture));

// $("#workExperience").append(HTMLworkStart);
// $(".work-entry").append(HTMLworkEmployer.replace('%data%',work.employer) +
// 	HTMLworkTitle.replace('%data%',work.position));

// $('#education').append(HTMLschoolStart);
// $('.education-entry').append(HTMLschoolName.replace('%data%',education['school']) + 
// 	HTMLschoolDegree.replace('%data%',education['degree']));

var work = {
	"jobs" : [{
		"employer" : "Goodyear Indonesia",
		"title" : "Software Developer Intern",
		"dates" : "July - August 2015",
		"location" : "Bogor, Indonesia",
		"description" : "Develop Rotation Schedule System"
	}]
};

var projects = {
	"projects" : [{
		"title" : "Ahsan (Mobile Apps)",
		"dates" : "August 2015",
		"description" : "My responsibility is designing UI/UX for app",
		"image" : ["images/ahsan.jpg"]
	}]
};

var bio = {
	"name" : "Khaidir Afif",
	"role" : "Front-end Developer",
	"welcomeMessage" : "Welcome to my profile page",
	"biopic" : "images/fry.jpg",
	"contacts" : {
		"mobile" : "0857-1575-0154",
		"email" : "afifkhaidir@live.com",
		"twitter" : "@afif_khaidir",
		"github" : "afifkhaidir",
		"blog" : "ilmuaiti.blogspot.com",
		"location" : "Bogor, Indonesia"
	},
	"skills" : ["HTML5", "CSS", "JavaScript", "Python", "Machine Learning"]
};

var education = {
	"schools" : [{
		"name" : "Bogor Agricultural University",
		"location" : "Bogor, Indonesia",
		"degree" : "Bachelor",
		"dates" : "October 2016",
		"url" : "ipb.ac.id",
		"majors" : ["Computer Science"]
	}],
	"onlineCourses" : [{
		"title" : "JavaScript Basic",
		"school" : "Udacity",
		"dates" : "July 2016",
		"url" : "https://www.udacity.com/course/javascript-basics--ud804"
	}]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts["email"]);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts["twitter"]);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts["github"]);
var formattedBlog = HTMLblog.replace("%data%",bio.contacts["blog"]);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts["location"]);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++){
		var skill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(skill);
	}
}

work.jobs.forEach(function(job){
	$("#workExperience").append(HTMLworkStart);

	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",job.employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%",job.title);
	var formattedWorkDates = HTMLworkDates.replace("%data%",job.dates);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%",job.location);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%",job.description);

	$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkLocation);
	$(".work-entry:last").append(formattedWorkDescription);
});