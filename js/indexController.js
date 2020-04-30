var app = angular.module('imvishal', []);
app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.filter("toArray", function(){
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            result.push(val);
        });
        return result;
    };
});

app.controller('myIndexCtrl', function($scope) {
    $scope.selectedProject  = [];
    $scope.pageStaticObject = [{
      "titleName"                               : "Vishal Singh",
      "profileTypeTitle"                        : "# Full-Stack Developer",
      "personalBgImg"                           : "img/background01.jpg",
      "myImg"                                   : "img/mypic.jpg",
      "personalTitle"                           : "Personal",
      "profileType"                             : "Full Stack Developer",
      "personalCurrentAddress"                  : "Bhopal, Madhya Pradesh",
      "personalLang"                            : "English, Hindi",
      "personalSkills"                          : "Php, Laravel, AngularJs, Angular 2, ExpressJs, StrongLoop, NodeJs, HTML, Jade, Ejs, CSS, SCSS, MySQL, CouchDb, PouchDb, MongoDb, JavaScript, Ionic, Angular Material, Materialize, Photoshop, Flash",
      "personalIntro"                           : "I'm a young developer with a passion for quality and an endless stream of crazy ideas. In my spare time I love playing games, listening to music, dreaming up and working on new projects. I am currently work in IISER Bhopal As Software Developer (Jr. Eng).",
      "personalFaceTooltip"                     : "Facebook Page Link",
      "personalGithubTooltip"                   : "GitHub Repositories",
      "personalEmailTooltip"                    : "Mail to Us", 
      "personalCurrentAddressLink"              : "https://goo.gl/maps/a4RT2kiGEYU2",
      "personalFacebookLink"                    : "https://www.facebook.com/vishaloban",
      "personalGithubLink"                      : "https://github.com/vishaloban",
      "personalEmailLink"                       : "mailto:vishalsingh1371990@gmail.com?subject=Hi, Vishal",
      "card1Title_Code"                         : "Code",
      "card1Contain_Code"                       : "I pride myself in writing code that is as clean, maintainable and understandable as possible.",
      "cardBgStack"                             : "img/card/card-stack.png",
      "card2Title_User"                         : "User",
      "card2Contain_User"                       : "When I work on projects, I focus on the end user. I keep the end user's wants and needs in the back of my head at all times, making for a smooth user experience.",
      "cardBgPlus"                              : "img/card/card-plus.png",
      "card3Title_Tools"                        : "Tools",
      "card3Contain_Tools"                      : "I always used time saver & new tech in my project",
      "cardBgWindow"                            : "img/card/card-window.png",
      "card3Contain_ToolsRepetsObj"             : [
                                                    {"tooltip": "AngularJS",  "imgLink": "img/skillsLogo/angular.png"},
                                                    {"tooltip": "CouchDB",    "imgLink": "img/skillsLogo/couchdb.png"},
                                                    {"tooltip": "Git",        "imgLink": "img/skillsLogo/git.png"},
                                                    {"tooltip": "Ionic",      "imgLink": "img/skillsLogo/ionic.jpg"},
                                                    {"tooltip": "Laravel",    "imgLink": "img/skillsLogo/laravel.png"},
                                                    {"tooltip": "MongoDB",    "imgLink": "img/skillsLogo/mongo.png"},
                                                    {"tooltip": "NodeJS",     "imgLink": "img/skillsLogo/node.jpg"},
                                                    {"tooltip": "React",      "imgLink": "img/skillsLogo/react.png"},
                                                    {"tooltip": "StrongLoop", "imgLink": "img/skillsLogo/strongloop.jpg"}
                                                  ], 
      "card4Title_Responsive"                   : "Responsive",
      "card4Contain_Tools"                      : "I make my projects perfectly accessible on all devices, from the smallest smartphone touchscreen, I have a fervent passion for clear and clean design, and I incorporate that in all of my projects.",
      "cardBgResponsive"                        : "img/card/card-responsive.png",
      "card4Contain_RepoRepetsObj"              : [
                                                    {"title": "Angular material", "imgLink": "img/skillsLogo/angular.png"},
                                                    {"title": "Bootstrap",        "imgLink": "img/skillsLogo/bootstrap.png"},
                                                    {"title": "Materialize",      "imgLink": "img/skillsLogo/materializecss.png"},
                                                    {"title": "Ionic",            "imgLink": "img/skillsLogo/ionic.jpg"},
                                                    {"title": "Monaca",           "imgLink": "img/skillsLogo/monaca.jpg"},
                                                  ],
     "educationSectionTitle"                    : "EDUCATION",
     "educationRepetCourse"                     : [
                                                    {"title": "M.C.A (Master of Computer Application)", "yearRange": "2011 - 2014", "contain": "I complete my post graduate in Master of Computer Application from Makhanlal Chaturvedi Rashtriya Patrakarita Avam Sanchar Vishwavidyalaya, Bhopal.<br><br>Course Duration: 3-Year (6 semester)<br><br>Since graduating from university, I have also undertaken responsibilities for designing a product for the company. The roles I have been given have provided the perfect opportunity to implement the skills I have gained throughout my higher education, as well as experiencing the running of a successful business."},
                                                    {"title": "B.C.A (Bachelor of Computer Application)", "yearRange": "2008 - 2011", "contain": "I done my graduation in Bachelor of Computer Application from Extrol College, Bhopal.<br><br>Course Duration: 3-Year (6 semester)"},
                                                  ],
     "experienceSectionTitle"                   : "EXPERIENCE",
     "experienceRepetCourse"                    : [
                                                    {"title": "IISER (Indian Institute of Science Education and Research), Bhopal", "website": "https://www.iiserb.ac.in", "yearRange": "2016 - Present", "contain": '<p>I am currently work in <a class="tools tooltipped" data-position="top" data-delay="50" data-tooltip="Visit center website" href="http://creates.iiserb.ac.in/index.html" target="_blank">CREATES</a>, IISER Bhopal As Software Developer (Jr. Eng), My role research on new technologies and used in institue automation project and mobile developement.<a class="tools tooltipped" data-position="top" data-delay="50" data-tooltip="Click for visit my profile" href="http://creates.iiserb.ac.in/people.html" target="_blank">Visit My Profile</a></p><h7><u>About CREATES</u></h7><p>Centre for Research in Advanced Technology for Education in Science (CREATES) is a Teaching Learning Centre (TLC) established by IISER Bhopal under PMMMNMTT scheme of Ministry of Human Resource and Development (MHRD).</p><p>Primary vision of the center is to develop new core technologies to aid in teaching and learning, to create new knowledge resources, to develop new technology-based pedagogies, and to develop a sustainable platform for creating, sharing and delivering knowledge. <a class="tools tooltipped" data-position="top" data-delay="50" data-tooltip="Visit center website" href="http://creates.iiserb.ac.in/index.html" target="_blank">Read more about Creates Center</a></p><h7><u>About IISER</u></h7><p>IISERs were created through a proclamation of Ministry of Human Resource Development, Government of India, to promote quality education and research in science and related areas. <a href="https://www.iiserb.ac.in" target="_blank">Read more about IISER</a></p>'},
                                                    {"title": "PSSCIVE (Pandit Sundarlal Sharma Central Institute of Vocational Education), Bhopal", "website": "http://www.psscive.ac.in",  "yearRange": "2015 - 2016", "contain": '<p>My role was Develope & maintain server the institue website.</p><h7><u>About PSSCIVE</u></h7><p>The Pandit Sundarlal Sharma Central Institute of Vocational Education (PSSCIVE) is an apex research and development organization in the field of vocational education. It is a constitute unit of National Council of Education Research and Training(NCERT), established by the Ministry of Human Resource Development (MHRD), Government of India in 1993 at Bhopal. It is a UNEVOC (International Project on Technical and Vocational Education) Center in India. <a class="tools tooltipped" data-position="top" data-delay="50" data-tooltip="Open Website" href="http://www.psscive.ac.in" target="_blank">Read more about PSSCIVE</a></p>'},
                                                    {"title": "Eulogik", "yearRange": "2015 - 2015", "website": "http://www.eulogik.com/", "contain": '<p>Worked with the technology team on innovation designing & web development / mobile development. All new tech, I learn here like Nodejs, Angular, Ionic, Laravel, Mongodb, Strongloop etc.</p><h7><u>About Eulogik</u></h7><p>Core focus areas of Eulogik are new edge web & mobile applications. We are working with the latest technologies in the world of Web & Mobile. We focus on creating rich applications for a range of customers. We love technologies like HTML5, CSS3, Laravel, Javascript, Ajax, Web Services, JSON, PHP-MySQL, Bootstrap, Material Design frameworks, Ionic framework, Apache Cordova and many more. <a class="tools tooltipped" data-position="top" data-delay="50" data-tooltip="Open Website" href="http://www.eulogik.com" target="_blank">Read more about eulogik</a></p>'},
                                                    {"title": "Perfect Software Services", "yearRange": "2013 - 2015", "website": "http://www.perfectsoftwareservices.com/", "contain": '<p>My first employer company, I learn basic step of Development process, Client  interation, Design database structure in this company, all implement in live project. </p><h7><u>About Perfect Software Services</u></h7><p>We are one of the best in the field of website designing, website development, online marketing and software development. We are located in Gurgaon, India. <a class="tools tooltipped" data-position="top" data-delay="50" data-tooltip="Open Website" href="http://www.perfectsoftwareservices.com" target="_blank">Read more about PSS</a></p>'}
                                                  ],
     "abilitiesSectionTitle"                    : "ABILITIES",
     "abilitiesRepeatLang"                      : [
                                                        {"sectionTitle": "SSS (Server Side Scripting Language)", "items": [
                                                                                                                                {"itemTitle": "NodeJS",     "itemImg": "img/skillsLogo/node.jpg"},
                                                                                                                                {"itemTitle": "ExpressJS",  "itemImg": "img/skillsLogo/express.png"},
                                                                                                                                {"itemTitle": "StrongLoop", "itemImg": "img/skillsLogo/strongloop.jpg"},
                                                                                                                                {"itemTitle": "Wordpress",  "itemImg": "img/skillsLogo/wordpress.png"},
                                                                                                                                {"itemTitle": "PHP",        "itemImg": "img/skillsLogo/php.png"},
                                                                                                                                {"itemTitle": "Laravel",    "itemImg": "img/skillsLogo/laravel.png"}
                                                                                                                          ]
                                                        },
                                                        {"sectionTitle": "Mobile Frameworks", "items": [
                                                                                                            {"itemTitle": "React Native", "itemImg": "img/skillsLogo/react2.png"},
                                                                                                            {"itemTitle": "Cordova",      "itemImg": "img/skillsLogo/cordova.png"},
                                                                                                            {"itemTitle": "Monaca",       "itemImg": "img/skillsLogo/monaca.jpg"},
                                                                                                            {"itemTitle": "Ionic 1 & 2",  "itemImg": "img/skillsLogo/ionic.jpg"},
                                                                                                            {"itemTitle": "Expo",         "itemImg": "img/skillsLogo/expo.png"}
                                                                                                        ]
                                                        },
                                                        {"sectionTitle": "Design Skills", "items": [
                                                                                                        {"itemTitle": "Bootstrap",        "itemImg": "img/skillsLogo/bootstrap.png"},
                                                                                                        {"itemTitle": "Materialize",      "itemImg": "img/skillsLogo/materializecss.png"},
                                                                                                        {"itemTitle": "Angular Material", "itemImg": "img/skillsLogo/angularM.jpg"},
                                                                                                        {"itemTitle": "React Native",     "itemImg": "img/skillsLogo/react2.png"},
                                                                                                        {"itemTitle": "Ionic",            "itemImg": "img/skillsLogo/ionic.jpg"}
                                                                                                    ]
                                                        },
                                                        {"sectionTitle": "DBMS", "items": [
                                                                                                {"itemTitle": "Couch DB", "itemImg": "img/skillsLogo/couchdb.png"},
                                                                                                {"itemTitle": "Mongo DB", "itemImg": "img/skillsLogo/mongo.png"},
                                                                                                {"itemTitle": "MySQL",    "itemImg": "img/skillsLogo/mysql.jpg"},
                                                                                                {"itemTitle": "SQLite",   "itemImg": "img/skillsLogo/sqlite.png"},
                                                                                                {"itemTitle": "FireBase", "itemImg": "img/skillsLogo/firebase.jpg"}
                                                                                        ]
                                                        },
                                                        {"sectionTitle": "CSS (Client Side Scripting Language)", "items": [
                                                                                                                                {"itemTitle": "AngularJS 1 & 2", "itemImg": "img/skillsLogo/angular.png"},
                                                                                                                                {"itemTitle": "JavaScript",      "itemImg": "img/skillsLogo/js.png"},
                                                                                                                                {"itemTitle": "TypeScript",      "itemImg": "img/skillsLogo/typescript.png"},
                                                                                                                                {"itemTitle": "Jquery",          "itemImg": "img/skillsLogo/jquery.gif"},
                                                                                                                                {"itemTitle": "Ajax",            "itemImg": "img/skillsLogo/ajax.png"},
                                                                                                                                {"itemTitle": "HTML5",           "itemImg": "img/skillsLogo/html.png"},
                                                                                                                                {"itemTitle": "CSS3",            "itemImg": "img/skillsLogo/css.png"},
                                                                                                                                {"itemTitle": "SASS",            "itemImg": "img/skillsLogo/sass.png"}
                                                                                                                        ]
                                                        },
                                                        {"sectionTitle": "Template Engine", "items": [
                                                                                                            {"itemTitle": "Ejs",        "itemImg": "img/skillsLogo/ejs.png"},
                                                                                                            {"itemTitle": "Jade / Pug", "itemImg": "img/skillsLogo/pug.svg"},
                                                                                                            {"itemTitle": "Etc",        "itemImg": "img/skillsLogo/ect.png"},
                                                                                                            {"itemTitle": "Blade",      "itemImg": "img/skillsLogo/blade.png"}
                                                                                                    ]
                                                        },
                                                        {"sectionTitle": "Web Server", "items": [
                                                                                                        {"itemTitle": "Nginx",  "itemImg": "img/skillsLogo/nginx.png"},
                                                                                                        {"itemTitle": "Apache", "itemImg": "img/skillsLogo/apache.png"},
                                                                                                        {"itemTitle": "Mamp",   "itemImg": "img/skillsLogo/mamp.png"},
                                                                                                        {"itemTitle": "Xammp",  "itemImg": "img/skillsLogo/xammp.png"},
                                                                                                        {"itemTitle": "Wamp",   "itemImg": "img/skillsLogo/wamp.png"},
                                                                                                        {"itemTitle": "IIS",    "itemImg": "img/skillsLogo/iis.png"}
                                                                                                ]
                                                        },
                                                        {"sectionTitle": "Package Manager", "items": [
                                                                                                            {"itemTitle": "NPM",      "itemImg": "img/skillsLogo/npm.png"},
                                                                                                            {"itemTitle": "Composer", "itemImg": "img/skillsLogo/composer.png"},
                                                                                                            {"itemTitle": "HomeBreq", "itemImg": "img/skillsLogo/homebrew.png"}
                                                                                                    ]
                                                        },
                                                        {"sectionTitle": "Tools", "items": [
                                                                                                    {"itemTitle": "Atom",         "itemImg": "img/skillsLogo/atom.png"},
                                                                                                    {"itemTitle": "Code",         "itemImg": "img/skillsLogo/code.png"},
                                                                                                    {"itemTitle": "Sublime",      "itemImg": "img/skillsLogo/sublime.jpg"},
                                                                                                    {"itemTitle": "GIT",          "itemImg": "img/skillsLogo/git.png"},
                                                                                                    {"itemTitle": "XML",          "itemImg": "img/skillsLogo/xml.png"},
                                                                                                    {"itemTitle": "JSON",         "itemImg": "img/skillsLogo/json.png"},
                                                                                                    {"itemTitle": "BSON",         "itemImg": "img/skillsLogo/bson.png"},
                                                                                                    {"itemTitle": "Dreamweaver",  "itemImg": "img/skillsLogo/dream.png"},
                                                                                                    {"itemTitle": "Photoshop",    "itemImg": "img/skillsLogo/ps.png"},
                                                                                                    {"itemTitle": "Flash",        "itemImg": "img/skillsLogo/flash.png"}
                                                                                            ]
                                                        },
                                                        {"sectionTitle": "OS", "items": [
                                                                                                {"itemTitle": "Mac",     "itemImg": "img/skillsLogo/mac.png"},
                                                                                                {"itemTitle": "Linux",   "itemImg": "img/skillsLogo/linux.png"},
                                                                                                {"itemTitle": "Windows", "itemImg": "img/skillsLogo/windows.png"}
                                                                                        ]
                                                        }
                                                  ],
      "PersonalDossierSectionTitle"             : "Personal Dossier",
      "PersonalDossierItems"                    : [
                                                    {"itemTitle": "Father's Name",        "icon": "fa-male",           "itemValue": "Shri. P.C.S Sisodia"},
                                                    {"itemTitle": "Date Of Birth",        "icon": "fa-birthday-cake",  "itemValue": "13 JULY, 1990"},
                                                    {"itemTitle": "Nationality",          "icon": "fa-globe",          "itemValue": "Indian"},
                                                    {"itemTitle": "Marital Status",       "icon": "fa-user-times",     "itemValue": "Single"},
                                                    {"itemTitle": "E-Mail",               "icon": "fa-envelope-o",     "itemValue": "vishalsingh1371990@gmail.com"},
                                                    {"itemTitle": "Alternate Mobile No.", "icon": "fa-mobile",         "itemValue": "9977296229"},
                                                    {"itemTitle": "Language Known",       "icon": "fa-language",       "itemValue": "English, Hindi"},
                                                    {"itemTitle": "hobbies",              "icon": "fa-gamepad",        "itemValue": "Listening Music, Bandminton, Travelling"},
                                                    {"itemTitle": "Address",              "icon": "fa-map-marker",     "itemValue": "MIG-45, Sumitra Parisar, Nayapura, Kolar Road, Bhopal (M.P)"}
                                                  ],
      "downloadBtnText"                         : "Download Resume",
      "downloadPdfLink"                         : "/resume/vishalsingh_resume.pdf",
      "declaretionText"                         : "I do hereby declare that the above written particulars are true to the best of my knowledge and belief.",
      "mySign"                                  : "img/vishalSign.png",
      "myFullName"                              : "[Vishal Singh Sisodia]",
      "projectSectionTitle"                     : "Projects",
      "projectType"                             : ["All", "Website", "App", "Other"],
      "projectsRepets"                          : [
                                                    /*Shiksha Messanger*/
                                                    {
                                                        "sno": 3, "projectType": "mobileApp", "classs": 'app', "projectName": "# Shiksha Messanger", "thumbnail": "img/projectsImg/shikshaMessanger/shikshaMessanger1.png", "linkUrl": "#", "intro": "Shiksha Messenger app for students, faculties & staff. Get Important notifications, Institute Timeline, courses Timeline  from the Institute and Instructors will be sent through this app.", 
                                                        "chipRepetTech":    [
                                                                                {"title": "Android App",  "imgLink": "img/skillsLogo/android.png"},
                                                                                {"title": "IOS App",      "imgLink": "img/skillsLogo/apple.png"},
                                                                                {"title": "React-Native", "imgLink": "img/skillsLogo/react2.png"},
                                                                                {"title": "FireBase",     "imgLink": "img/skillsLogo/firebase.jpg"},
                                                                                {"title": "Node",         "imgLink": "img/skillsLogo/node.jpg"},
                                                                                {"title": "CouchDB",      "imgLink": "img/skillsLogo/couchdb.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Splash Screen",                    "imgLink": "img/projectsImg/shikshaMessanger/shikshaMessanger1.png"},
                                                                                {"toolTip" : "Welcome Screen",                   "imgLink": "img/projectsImg/shikshaMessanger/shikshaMessanger2.png"},
                                                                                {"toolTip" : "Sign In Screen",                   "imgLink": "img/projectsImg/shikshaMessanger/shikshaMessanger3.png"},
                                                                                {"toolTip" : "Sign Up Screen",                   "imgLink": "img/projectsImg/shikshaMessanger/shikshaMessanger4.png"},
                                                                                {"toolTip" : "Forgot Password Screen",           "imgLink": "img/projectsImg/shikshaMessanger/shikshaMessanger5.png"},
                                                                                {"toolTip" : "Intro Screen",                     "imgLink": "img/projectsImg/shikshaMessanger/shikshaMessanger6.png"},
                                                                                {"toolTip" : "Intro Screen",                     "imgLink": "img/projectsImg/shikshaMessanger/shikshaMessanger7.png"},
                                                                                {"toolTip" : "User Profile",                     "imgLink": "img/projectsImg/shikshaMessanger/shikshaMessanger9.png"},
                                                                                {"toolTip" : "Notification Details Screen",      "imgLink": "img/projectsImg/shikshaMessanger/shikshaMessanger10.png"}
                                                                            ]
                                                    },
                                                    /*MindQuizzer*/
                                                    {
                                                        "sno": 4, "projectType": "mobileApp", "classs": 'app', "projectName": "# MindQuizzer App", "thumbnail": "img/projectsImg/mindQuizzer/mindQuizzer1.png", "linkUrl": "https://mindquizzer.com", "intro": "Mind Quizzer is a free education app tool that will transform your education experience. Our mobile app has a number of features that will make your educational experience valuable and will help with your academic success.<br><br><h5>For Teachers:</h5>Teachers from around the world can submit questions to Mind Quizzer. Once the questions are approved by our subject experts, the questions are live for students use. The teachers are compensation with a commission based structure that is based on how many times their questions are accessed for testing by students.<br><br><h5>For Students - Quiz Taking:</h5>Students can take multiple choice practice tests using our app. The questions can be selected based on the country, course and topic of their choice. A student can select questions in increments of 10,20,30,40, or 50. Each question will be closely aligned with a students course in their topic. Students will be given the correct response as they proceed from one question to the next. Students can also select the variety of questions based on various levels of difficulty for each question. Questions are coded based on a 1 - easy, 2 - moderate, or 3 -difficult. Students will also have a dashboard where they can see their results on previous assessments.<br><br><h5>For Students - Virtual Help Center:</h5> Students are often faced with tough assignments and tight deadlines. The grade they receive will be very important. Our virtual help center is your online app for help anytime from anywhere. A student is asked to select the subject they are having issues with, a brief description of the area they are having difficulty with and upload a copy picture or copy of the assessment. Our subject expert will review the submission and respond with the cost to provide the help requested. Once a student accepts the cost, the subject expert will then send back to the student a video file that shows the solution with audio.", 
                                                        "chipRepetTech":    [
                                                                                {"title": "Android App",  "imgLink": "img/skillsLogo/android.png"},
                                                                                {"title": "IOS App",      "imgLink": "img/skillsLogo/apple.png"},
                                                                                {"title": "React-Native", "imgLink": "img/skillsLogo/react2.png"},
                                                                                {"title": "Paypal",       "imgLink": "img/skillsLogo/paypal.png"},
                                                                                {"title": "Php",          "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "MySQL",        "imgLink": "img/skillsLogo/mysql.jpg"}

                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Splash Screen",                                "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer1.png"},
                                                                                {"toolTip" : "Welcome Screen",                               "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer2.png"},
                                                                                {"toolTip" : "Sign Up Screen",                               "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer3.png"},
                                                                                {"toolTip" : "Log In Screen",                                "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer4.png"},
                                                                                {"toolTip" : "Forgot Password Screen",                       "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer5.png"},
                                                                                {"toolTip" : "Student Home Screen",                          "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer6.png"},
                                                                                {"toolTip" : "Help Desk Screen",                             "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer7.png"},
                                                                                {"toolTip" : "Student Drawer Screen",                        "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer8.png"},
                                                                                {"toolTip" : "Result & Payment Status Screen",               "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer9.png"},
                                                                                {"toolTip" : "Result & Payment Status Screen",               "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer10.png"},
                                                                                {"toolTip" : "Quiz Dashboard Screen",                        "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer11.png"},
                                                                                {"toolTip" : "Topic Filters Screen",                         "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer12.png"},
                                                                                {"toolTip" : "Cart Screen",                                  "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer13.png"},
                                                                                {"toolTip" : "Paypal Payment Screen",                        "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer14.png"},
                                                                                {"toolTip" : "Admin Subjects Filters Screen",                "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer15.png"},
                                                                                {"toolTip" : "Single Question Upload Screen",                "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer16.png"},
                                                                                {"toolTip" : "Bulk Question Upload Screen",                  "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer17.png"},
                                                                                {"toolTip" : "My Questions Status Screen",                   "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer18.png"},
                                                                                {"toolTip" : "My Approve Questions Screen",                  "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer19.png"},
                                                                                {"toolTip" : "Question Preview Screen",                      "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer21.png"}, 
                                                                                {"toolTip" : "My Topics Status Screen",                      "imgLink": "img/projectsImg/mindQuizzer/mindQuizzer23.png"}
                                                                            ]
                                                    },
                                                    /*SwiftKey*/
                                                    {
                                                        "sno": 5, "projectType": "mobileApp", "classs": 'app', "projectName": "# SwiftKey App", "thumbnail": "img/projectsImg/swiftKey/swiftKey1.png", "linkUrl": "#", "intro": "Mind Quizzer is a free education app tool that will transform your education experience. Our mobile app has a number of features that will make your educational experience valuable and will help with your academic success.<br><br><h5>For Teachers:</h5>Teachers from around the world can submit questions to Mind Quizzer. Once the questions are approved by our subject experts, the questions are live for students use. The teachers are compensation with a commission based structure that is based on how many times their questions are accessed for testing by students.<br><br><h5>For Students - Quiz Taking:</h5>Students can take multiple choice practice tests using our app. The questions can be selected based on the country, course and topic of their choice. A student can select questions in increments of 10,20,30,40, or 50. Each question will be closely aligned with a students course in their topic. Students will be given the correct response as they proceed from one question to the next. Students can also select the variety of questions based on various levels of difficulty for each question. Questions are coded based on a 1 - easy, 2 - moderate, or 3 -difficult. Students will also have a dashboard where they can see their results on previous assessments.<br><br><h5>For Students - Virtual Help Center:</h5> Students are often faced with tough assignments and tight deadlines. The grade they receive will be very important. Our virtual help center is your online app for help anytime from anywhere. A student is asked to select the subject they are having issues with, a brief description of the area they are having difficulty with and upload a copy picture or copy of the assessment. Our subject expert will review the submission and respond with the cost to provide the help requested. Once a student accepts the cost, the subject expert will then send back to the student a video file that shows the solution with audio.", 
                                                        "chipRepetTech":    [
                                                                                {"title": "Android App",  "imgLink": "img/skillsLogo/android.png"},
                                                                                {"title": "React-Native", "imgLink": "img/skillsLogo/react2.png"},
                                                                                {"title": "FireBase",     "imgLink": "img/skillsLogo/firebase.jpg"},
                                                                                {"title": "Php",          "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "MySQL",        "imgLink": "img/skillsLogo/mysql.jpg"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Splash Screen",                    "imgLink": "img/projectsImg/swiftKey/swiftKey1.png"},
                                                                                {"toolTip" : "Intro Screen",                     "imgLink": "img/projectsImg/swiftKey/swiftKey2.png"},
                                                                                {"toolTip" : "Sign In Screen",                   "imgLink": "img/projectsImg/swiftKey/swiftKey3.png"},
                                                                                {"toolTip" : "User Dashboard Screen",            "imgLink": "img/projectsImg/swiftKey/swiftKey4.png"},
                                                                                {"toolTip" : "Rise a Request Screen",            "imgLink": "img/projectsImg/swiftKey/swiftKey5.png"},
                                                                                {"toolTip" : "Service Request Screen",           "imgLink": "img/projectsImg/swiftKey/swiftKey6.png"},
                                                                                {"toolTip" : "Request Details Screen",           "imgLink": "img/projectsImg/swiftKey/swiftKey7.png"},
                                                                                {"toolTip" : "Student Drawer Screen",            "imgLink": "img/projectsImg/swiftKey/swiftKey8.png"},
                                                                                {"toolTip" : "Bulletin Board  Screen",           "imgLink": "img/projectsImg/swiftKey/swiftKey9.png"},
                                                                                {"toolTip" : "Add new Bulletin Screen",          "imgLink": "img/projectsImg/swiftKey/swiftKey10.png"},
                                                                                {"toolTip" : "Broadcast Screen",                 "imgLink": "img/projectsImg/swiftKey/swiftKey11.png"},
                                                                                {"toolTip" : "Bulletin Detail Screen",           "imgLink": "img/projectsImg/swiftKey/swiftKey12.png"}
                                                                            ]
                                                    },
                                                    /*cybrom*/
                                                    {
                                                        "sno": 6, "projectType": "webApp", "classs": 'web', "projectName": "# Cybrom", "thumbnail": "img/projectsImg/cybrom/cybrom1.png", "linkUrl": "http://103.96.221.3:4040/", "intro": "Cybrom Technology Private Ltd. Expertise In Providing Quality Education & Live Practical Exposure To The Young Minds From Last 12 Years.<br><h5># Features</h5><p>◉ Student can download study materials.</p><p>◉ Online code compailer.</p><p>◉ Attandance System.</p><p>◉ CodeByte & Test Series features</p><p>◉ Track User Performance</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "React",      "imgLink": "img/skillsLogo/react2.png"},
                                                                                {"title": "Redux",      "imgLink": "img/skillsLogo/redux.png"},
                                                                                {"title": "Bootstrap",  "imgLink": "img/skillsLogo/bootstrap.png"},
                                                                                {"title": "Php",        "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "MySQL",      "imgLink": "img/skillsLogo/mysql.jpg"}

                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Log In Page",                          "imgLink": "img/projectsImg/cybrom/cybrom1.png"},
                                                                                {"toolTip" : "Daily Class Session Page",             "imgLink": "img/projectsImg/cybrom/cybrom2.png"},
                                                                                {"toolTip" : "Daily Class Session Page",             "imgLink": "img/projectsImg/cybrom/cybrom3.png"},
                                                                                {"toolTip" : "Daily Code Byte Page",                 "imgLink": "img/projectsImg/cybrom/cybrom4.png"},
                                                                                {"toolTip" : "Student Quiz Page",                    "imgLink": "img/projectsImg/cybrom/cybrom5.png"},
                                                                                {"toolTip" : "Daily Code Byte Page",                 "imgLink": "img/projectsImg/cybrom/cybrom6.png"},
                                                                                {"toolTip" : "Test Series Page",                     "imgLink": "img/projectsImg/cybrom/cybrom7.png"},
                                                                                {"toolTip" : "Test Series Detail Page",              "imgLink": "img/projectsImg/cybrom/cybrom8.png"},
                                                                                {"toolTip" : "Code Byte Compiler Page",              "imgLink": "img/projectsImg/cybrom/cybrom9.png"}
                                                                            ]
                                                    },
                                                    /*JAC*/
                                                    {
                                                        "sno": 7, "projectType": "webApp", "classs": 'web', "projectName": "# Joint Addmission Commite", "thumbnail": "img/projectsImg/jac/jac7.png", "intro": "<br>Jac portal was used for admission counselling in all IISERs located in India. Student can accept offer seat in (JEE, KVPY, SCB) exam and fee pay using jac payment portal.<br><h5># Features</h5><p>◉ Provide DataTables for all (Exam Results / Counsiling Report / Payments Report).</p><p>◉ ICICI payment Gateway.</p><p>◉ Two-way oauth.</p><p>◉ Validate Student provide Documents.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "Angular",            "imgLink": "img/skillsLogo/angular.png"},
                                                                                {"title": "Express",            "imgLink": "img/skillsLogo/node.jpg"},
                                                                                {"title": "PdfMake",            "imgLink": "img/skillsLogo/pdf.png"},
                                                                                {"title": "Bootstrap",          "imgLink": "img/skillsLogo/bootstrap.png"},
                                                                                {"title": "Payment Gateway",    "imgLink": "img/skillsLogo/payment.jpg"},
                                                                                {"title": "CouchDB",            "imgLink": "img/skillsLogo/couchdb.png"}

                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Jac Log In Page",                              "imgLink": "img/projectsImg/jac/jac1.png"},
                                                                                {"toolTip" : "Student Documents Validation Page",            "imgLink": "img/projectsImg/jac/jac2.png"},
                                                                                {"toolTip" : "Search Applicant Application Page",            "imgLink": "img/projectsImg/jac/jac3.png"},
                                                                                {"toolTip" : "SCB DataTable Page",                           "imgLink": "img/projectsImg/jac/jac4.png"},
                                                                                {"toolTip" : "Applicant Details Page",                       "imgLink": "img/projectsImg/jac/jac5.png"},
                                                                                {"toolTip" : "Applicant Details Page",                       "imgLink": "img/projectsImg/jac/jac6.png"},
                                                                                {"toolTip" : "Applicant Seat Status Page",                   "imgLink": "img/projectsImg/jac/jac7.png"},
                                                                                {"toolTip" : "SCB DataTable Extra Options Page",             "imgLink": "img/projectsImg/jac/jac8.png"},
                                                                                {"toolTip" : "Applicant Dashboard Page",                     "imgLink": "img/projectsImg/jac/jac9.png"},
                                                                                {"toolTip" : "Document Verify By Student Page",              "imgLink": "img/projectsImg/jac/jac11.png"},
                                                                                {"toolTip" : "Document Validation Page",                     "imgLink": "img/projectsImg/jac/jac12.png"},
                                                                                {"toolTip" : "Marksheet Validate Log In Page",               "imgLink": "img/projectsImg/jac/jac13.png"},
                                                                                {"toolTip" : "OTP Validate Page",                            "imgLink": "img/projectsImg/jac/jac15.png"},
                                                                                {"toolTip" : "ICICI Payment Gatway",                         "imgLink": "img/projectsImg/jac/jac16.png"},
                                                                                {"toolTip" : "Applicant Seat Offer Page",                    "imgLink": "img/projectsImg/jac/jac17.png"},
                                                                                {"toolTip" : "Download Offer Letter Page",                   "imgLink": "img/projectsImg/jac/jac18.png"},
                                                                                {"toolTip" : "Payment Confirmation modal",                   "imgLink": "img/projectsImg/jac/jac19.png"},
                                                                                {"toolTip" : "Applicant Static Info",                        "imgLink": "img/projectsImg/jac/jac20.png"},
                                                                                {"toolTip" : "Validation DataTable Page",                    "imgLink": "img/projectsImg/jac/jac21.png"}
                                                                            ]
                                                    },
                                                    /*Examinner App*/
                                                    {
                                                        "sno": 8, "projectType": "mobileApp", "classs": 'app', "projectName": "# Examinner App", "thumbnail": "img/projectsImg/examinner/exam1.png", "linkUrl": "https://quiz.examineer.in", "intro": "Using technology to make education accessible to masses and improve pedagogy is central purpose of CREATES and examineer.in is our flagship project materialising this gaol. We have developed a core technology and a backbone framework for development and deployment of science and math-rich educational e-content. Our framework is platform independent and is accessible using standard web technologies. The core technology aims to provide methods for content development for college and higher education as well as school education without the need of extensive knowledge of computers or information technology. The backbone framework makes the core technology accessible through cloud computing.<br><h5># Features</h5><p>◉ Ease of access for content developers and learners.</p><p>◉ No requirement of knowledge of information technology or computers for subject experts.</p><p>◉ Access to latest technologies for e-content development and deployment.</p><p>◉ Computable dynamical content, like dynamical graphics and dynamical equations.</p><p>◉ Long term sustainability.</p><p>◉ Content development through crowd-sourcing.</p><p>◉ Scalability through cloud based distributed system.</p><p>◉ Usage independent development and deployment.</p><p>◉ Big data friendly databases.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "Android App",        "imgLink": "img/skillsLogo/android.png"},
                                                                                {"title": "IOS App",            "imgLink": "img/skillsLogo/apple.png"},
                                                                                {"title": "Angular",            "imgLink": "img/skillsLogo/angular.png"},
                                                                                {"title": "Ionic",              "imgLink": "img/skillsLogo/ionic.jpg"},
                                                                                {"title": "Mathjax",            "imgLink": "img/skillsLogo/mathjax.png"},
                                                                                {"title": "Express",            "imgLink": "img/skillsLogo/node.jpg"},
                                                                                {"title": "CouchDB",            "imgLink": "img/skillsLogo/couchdb.png"}

                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Splash Screen",                              "imgLink": "img/projectsImg/examinner/exam1.png"},
                                                                                {"toolTip" : "Sign In Screen",                             "imgLink": "img/projectsImg/examinner/exam2.png"},
                                                                                {"toolTip" : "Instructions Screen",                        "imgLink": "img/projectsImg/examinner/exam3.png"},
                                                                                {"toolTip" : "Grading Scheme Screen",                      "imgLink": "img/projectsImg/examinner/exam4.png"},
                                                                                {"toolTip" : "Instructions / terms & condition Screen",    "imgLink": "img/projectsImg/examinner/exam5.png"},
                                                                                {"toolTip" : "Quiz Section Screen",                        "imgLink": "img/projectsImg/examinner/exam6.png"},
                                                                                {"toolTip" : "Quiz Overview Screen",                       "imgLink": "img/projectsImg/examinner/exam7.png"},
                                                                                {"toolTip" : "Calculator Screen",                          "imgLink": "img/projectsImg/examinner/exam8.png"},
                                                                                {"toolTip" : "Grading Scheme Screen",                      "imgLink": "img/projectsImg/examinner/exam9.png"},
                                                                                {"toolTip" : "Quiz Overview Screen",                       "imgLink": "img/projectsImg/examinner/exam10.png"},
                                                                                {"toolTip" : "Quiz Grading Matrix Screen",                 "imgLink": "img/projectsImg/examinner/exam11.png"},
                                                                                {"toolTip" : "MCQ Question Screen",                        "imgLink": "img/projectsImg/examinner/exam12.png"},
                                                                                {"toolTip" : "MCA Question Hint & Explanation Screen",     "imgLink": "img/projectsImg/examinner/exam13.png"},
                                                                                {"toolTip" : "MCA User Set answer Screen",                 "imgLink": "img/projectsImg/examinner/exam14.png"},
                                                                                {"toolTip" : "Change Language Modal",                      "imgLink": "img/projectsImg/examinner/exam16.png"},
                                                                                {"toolTip" : "User Profile Screen",                        "imgLink": "img/projectsImg/examinner/exam19.png"},
                                                                                {"toolTip" : "Quiz Submit Screen",                         "imgLink": "img/projectsImg/examinner/exam20.png"}
                                                                            ]
                                                    },
                                                    /*Academic Affairs*/
                                                    {
                                                        "sno": 11, "projectName": "# Academic Affairs Portal", "classs": 'web', "thumbnail": "img/projectsImg/acadAffairs/acadAffairsimg1.png", "linkUrl": "https://shiksha.iiserb.ac.in/login/", "intro": "An effective and functional ERP helps teachers to focus on their main job that is teaching. An education ERP also helps to improve administration, student management and accumulates students data in one place. Eventually, it reflects on teacher's efficiency in teaching by decreasing time spent on managing students and communicating with them.<br>We have created and launched Shiksha, an education ERP software with-in the institute. It provides one place for all student academic data, course management, academic registration, academic history of departments and students, report generation etc. The software is under active development and has been greatly appreciated by the community. It provides role-based management to all stake holders in the institute such as Deans, Faculty, Students and Administrators.", 
                                                        "chipRepetTech":    [
                                                                                {"title": "AngularJS", "imgLink": "img/skillsLogo/angular.png"},
                                                                                {"title": "Bootstrap", "imgLink": "img/skillsLogo/bootstrap.png"},
                                                                                {"title": "CouchDB",   "imgLink": "img/skillsLogo/couchdb.png"},
                                                                                {"title": "Elastic",   "imgLink": "img/skillsLogo/elastic.png"},
                                                                                {"title": "Kibana",    "imgLink": "img/skillsLogo/Kibana.png"},
                                                                                {"title": "NodeJS",    "imgLink": "img/skillsLogo/node.jpg"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Login Page",                                           "imgLink": "img/projectsImg/acadAffairs/acadAffairsimg1.png"},
                                                                                {"toolTip" : "Forgot Password Page",                                 "imgLink": "img/projectsImg/acadAffairs/acadAffairsimg2.png"},
                                                                                {"toolTip" : "Academic Admin Profile Page",                          "imgLink": "img/projectsImg/acadAffairs/acadAffairsimg3.png"},
                                                                                {"toolTip" : "Academic Admin Student Page (Perform Curd Operation)", "imgLink": "img/projectsImg/acadAffairs/acadAffairsimg4.png"},
                                                                                {"toolTip" : "Academic Admin Course by registration Page",           "imgLink": "img/projectsImg/acadAffairs/acadAffairsimg5.png"},
                                                                                {"toolTip" : "Academic Admin Student Profile Page",                  "imgLink": "img/projectsImg/acadAffairs/acadAffairsimg6.png"},
                                                                                {"toolTip" : "Academic Admin Offered Course Page",                   "imgLink": "img/projectsImg/acadAffairs/acadAffairsimg7.png"}
                                                                            ]
                                                    },
                                                    /*Creates Website*/
                                                    {
                                                        "sno": 12, "projectName": "# Creates Center", "classs": 'web', "thumbnail": "img/projectsImg/createsCenter/createsCenter1.png", "linkUrl": "http://creates.iiserb.ac.in/", "intro": "<h5><b>Centre for Research in Advanced Technology for Education in Science (CREATES)</b></h5><p>Centre for Research in Advanced Technology for Education in Science (CREATES) is a Teaching Learning Centre (TLC) established by IISER Bhopal under PMMMNMTT scheme of Ministry of Human Resource and Development (MHRD).</p><p>Primary vision of the center is to develop new core technologies to aid in teaching and learning, to create new knowledge resources, to develop new technology-based pedagogies, and to develop a sustainable platform for creating, sharing and delivering knowledge</p><p>The center’s developmental activities employ various pedagogies including immersive learning, collaborative and constructive learning, adaptive teaching and proactive teaching, with the aim of implementing these methodologies through the use of technology. Several new technological innovations are being undertaken by a diverse team of faculty members from various departments, which include development of a dynamic science and math-rich content acquisition platform, development of technology-enabled studio classroom for adaptive, immersive and reactive learning, and a technology-based assessment engine. Since its inception and subsequent approval in December 2015, CREATES has made significant progress in the aforementioned project. The center also promotes innovation in education technology through collaboration with IISER Bhopal community by creating necessary infrastructural resources for educationists and enthusiasts.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "Bootstrap",  "imgLink": "img/skillsLogo/bootstrap.png"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",           "imgLink": "img/projectsImg/createsCenter/createsCenter1.png"},
                                                                                {"toolTip" : "Project Page",        "imgLink": "img/projectsImg/createsCenter/createsCenter2.png"},
                                                                                {"toolTip" : "Team Member Page",    "imgLink": "img/projectsImg/createsCenter/createsCenter3.png"},
                                                                                {"toolTip" : "Contact Us Page",     "imgLink": "img/projectsImg/createsCenter/createsCenter4.png"}
                                                                            ]
                                                    },
                                                    /*BasicESQ Website*/
                                                    {
                                                        "sno": 13, "projectName": "# Basic ESQ", "classs": 'web', "thumbnail": "img/projectsImg/basicESQ/basicesq01.png", "linkUrl": "http://basicesq.com/", "intro": "BASIC ESQ was designed by two solo attorneys out of New York. Garry (co-founder) is a NYC litigator who built a solo practice from the ground up. Adam (co-founder) began his legal career as a corporate lawyer. The pair partnered up and created a litigation boutique in New York. As solos and small firm managers we realized we needed an affordable, basic, and intuitive law practice management system. We designed BASIC ESQ using our experience and knowledge of what solos and small firms need to streamline their practice. BASIC ESQ is SaaS cloud application developed with Material Design principals to deliver an intuitive law practice management experience. Our responsive application allows you to access your account from any device, including your tablet or smartphone. BASIC ESQ was built by practicing attorneys. Our application was developed with the needs of solo and small firm attorneys in mind. BASIC ESQ’s simplified system includes only the features that you really need to make your practice a success! We continue to use BASIC ESQ every day in our law practice! Join us! TRY BASIC ESQ FOR FREE TODAY!</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "AngularMaterial", "imgLink": "img/skillsLogo/angular.png"},
                                                                                {"title": "StrongLoop",      "imgLink": "img/skillsLogo/strongloop.jpg"},
                                                                                {"title": "Braintree",       "imgLink": "img/skillsLogo/braintree.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",           "imgLink": "img/projectsImg/basicESQ/basicesq1.png"},
                                                                                {"toolTip" : "Message Board Page",  "imgLink": "img/projectsImg/basicESQ/basicesq2.png"},
                                                                                {"toolTip" : "Calander Page",       "imgLink": "img/projectsImg/basicESQ/basicesq3.png"},
                                                                                {"toolTip" : "Add Task Page",       "imgLink": "img/projectsImg/basicESQ/basicesq4.png"}
                                                                            ]
                                                    },
                                                    /*Matrimony Mart Website*/
                                                    {
                                                        "sno": 14, "projectName": "# Matrimony Mart", "classs": 'web', "thumbnail": "img/projectsImg/matrimonymart/matrimonymart00.png", "linkUrl": "http://www.matrimonymart.com", "intro": "<p>www.matrimonymart.com is an internet enabled electronic platform that facilitates communication for the purposes of advertising and distributing information pertaining to goods and or services, have been posted, listed or provided information on www.matrimonymart.com.</p><p>While interacting with users on www.matrimonymart.com, with respect to any listing, posting or information we strongly encourage you to exercise reasonable diligence as you would in traditional off line channels and practice judgment and common sense before committing to or complete intended sale, purchase of any goods or services or exchange of information.</p><p>While making use of www.matrimonymart.com classifieds and other services such as the discussion forums, comments and feedback and other services, you will post in the appropriate category or area and you agree that your use of the Site shall be strictly governed by this Acceptable Use Policy including the policy for listing of your Classified which shall not violate the prohibited and restricted items policy (herein after referred to as the Listing Policy.) (Listing Policy) The listing policy shall be read as part of this Acceptable Use Policy and is incorporated in this Acceptable Use Policy by way of reference.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "PHP",        "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "MySql",      "imgLink": "img/skillsLogo/mysql.jpg"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "HTML",       "imgLink": "img/skillsLogo/html.png"},
                                                                                {"title": "CSS",        "imgLink": "img/skillsLogo/css.jpg"},
                                                                                {"title": "Google API", "imgLink": "img/skillsLogo/google.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",              "imgLink": "img/projectsImg/matrimonymart/matrimonymart1.png"},
                                                                                {"toolTip" : "Products listing Page",  "imgLink": "img/projectsImg/matrimonymart/matrimonymart2.png"},
                                                                                {"toolTip" : "Product Info Page",      "imgLink": "img/projectsImg/matrimonymart/matrimonymart3.png"},
                                                                                {"toolTip" : "Product Gallery Page",   "imgLink": "img/projectsImg/matrimonymart/matrimonymart4.png"},
                                                                                {"toolTip" : "Contact to Vendor Page", "imgLink": "img/projectsImg/matrimonymart/matrimonymart5.png"},
                                                                                {"toolTip" : "Vendor location",        "imgLink": "img/projectsImg/matrimonymart/matrimonymart6.png"},
                                                                                {"toolTip" : "Post Your Ad Page",      "imgLink": "img/projectsImg/matrimonymart/matrimonymart7.png"},
                                                                                {"toolTip" : "Contact Us Page",        "imgLink": "img/projectsImg/matrimonymart/matrimonymart8.png"},
                                                                                {"toolTip" : "Terms & Privacy Page",   "imgLink": "img/projectsImg/matrimonymart/matrimonymart9.png"}
                                                                            ]
                                                    },
                                                    /*Stayfit solutions Website*/
                                                    {
                                                        "sno": 15, "projectName": "# Stayfit solutions", "classs": 'web', "thumbnail": "img/projectsImg/stayfit/stayfit1.png", "linkUrl": "http://www.perfectsoftwareservices.com/demo/websites/stayfitsolutions/index.php", "intro": "<p>Our newly opened Fitness studio at Sohna Road is a dream come true for every fitness lover. It boasts of a safe, hygienic studio set in a fitness inspiring ambience. Whether you are a corporate professional hard pressed for time, a multi-tasking, a busy business owner or a student we have an innovative, customized fitness solution for you.</p><p>The fitness studio with a difference promises to banish the boredom that a routine exercise schedule brings along. Here you will experience different exercise forms, group classes, individual sessions and the most modern, just arrived equipments. You pay nothing extra for having a personal fitness guide!!!.</p><p>Stayfit Solutions is your one stop destination for complete fitness solutions be it weight loss, weight gain or achieving higher fitness levels. We are a leading fitness house providing services to clients across Gurgaon, Faridabad and Delhi. At the forefront of the fitness wave in this urban setting for the last 5 years, we endeavor to provide holistic packages that aim to introduce you to a world of health and zero disease. Visit the packages section one that suits you.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "PHP",        "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "MySql",      "imgLink": "img/skillsLogo/mysql.jpg"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "Bootstrap",  "imgLink": "img/skillsLogo/bootstrap.png"},
                                                                                {"title": "HTML",       "imgLink": "img/skillsLogo/html.png"},
                                                                                {"title": "CSS",        "imgLink": "img/skillsLogo/css.jpg"},
                                                                                {"title": "Social API", "imgLink": "img/skillsLogo/social.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",                    "imgLink": "img/projectsImg/stayfit/stayfit1.png"},
                                                                                {"toolTip" : "Profile Page",                 "imgLink": "img/projectsImg/stayfit/stayfit2.png"},
                                                                                {"toolTip" : "360 Value Creation Page",      "imgLink": "img/projectsImg/stayfit/stayfit3.png"},
                                                                                {"toolTip" : "Career Page Page",             "imgLink": "img/projectsImg/stayfit/stayfit4.png"},
                                                                                {"toolTip" : "Contact Us Page",              "imgLink": "img/projectsImg/stayfit/stayfit5.png"}
                                                                            ]
                                                    },
                                                    /*grewalssb Website*/
                                                    {
                                                        "sno": 16, "projectName": "# GREWAL SSB ACADEMY", "classs": 'web', "thumbnail": "img/projectsImg/grewalssb/grewalssb1.png", "linkUrl": "http://www.grewalssbacademy.com/index.html", "intro": "<p>The Founder of this Academy General (Dr) Ranjit Singh has a deep passion for sports, yoga and adventure activities.</p><p>A gold medalist in 1500 mtrs race in Kurukshetra University, he was awarded the coveted Principal's Gold Medal in Adventure Course at HMI, Darjeeling in 1974. Not only a services Lawn Tennis player, he is also a keen trekker, swimmer, golfer and cross country Blue at IMA.</p><p>He was the team manager of the Indian Ice Hockey team which went to Japan in July 2002.</p><p>He was the Chief Instructor and Principal of Autonomous College at AEC Trg College and Centre.</p><p> As OSD (Def) in KV Sangathan he brought in phenomenal changes and even introduced adventure activities not only in Defence Sector located KVs but also in all the KVs.</p><p> He has also been offg Principal & Head-Master of Sainik School, Imphal, Principal of Military School, Dholpur and UP Sainik School, Lucknow, where his goal oriented training of students for SSB produced outstanding results.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "PHP",        "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "MySql",      "imgLink": "img/skillsLogo/mysql.jpg"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "HTML",       "imgLink": "img/skillsLogo/html.png"},
                                                                                {"title": "CSS",        "imgLink": "img/skillsLogo/css.jpg"},
                                                                                {"title": "Social API", "imgLink": "img/skillsLogo/social.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",                 "imgLink": "img/projectsImg/grewalssb/grewalssb1.png"},
                                                                                {"toolTip" : "Profile Page",              "imgLink": "img/projectsImg/grewalssb/grewalssb2.png"},
                                                                                {"toolTip" : "360 Value Creation Page",   "imgLink": "img/projectsImg/grewalssb/grewalssb3.png"},
                                                                                {"toolTip" : "Career Page",               "imgLink": "img/projectsImg/grewalssb/grewalssb4.png"},
                                                                                {"toolTip" : "Contact Us Page",           "imgLink": "img/projectsImg/grewalssb/grewalssb5.png"},
                                                                                {"toolTip" : "Contact Us Page",           "imgLink": "img/projectsImg/grewalssb/grewalssb6.png"},
                                                                                {"toolTip" : "Contact Us Page",           "imgLink": "img/projectsImg/grewalssb/grewalssb7.png"},
                                                                                {"toolTip" : "Contact Us Page",           "imgLink": "img/projectsImg/grewalssb/grewalssb8.png"}
                                                                            ]
                                                    },
                                                    /*cofounder Website*/
                                                    {
                                                        "sno": 17, "projectName": "# Co-founder Synergy", "classs": 'web', "thumbnail": "img/projectsImg/cofounder/cofounder1.png", "linkUrl": "http://www.cofoundersynergy.com", "intro": "<h5>Intro</h5><p>Co-founder Synergy is not just a company. It is a lifestyle. The central theme of our culture is knowledge, innovation and creativity, courage and entrepreneurship.</p><p>We get real satisfaction when we see your ideas coming to fruition. We already have strong networking with social entrepreneurs worldwide who are at the idea stage or start-up stage and we are doing match making of core team, co-founders for expansion of their start-ups in emerging economies.</p><p>Finally we thought to take up work which surrounds not only to the idea of making a living but to the idea of making a life.</p><h5>Vision</h5><p>Our vision is to create a heaven for aspiring entrepreneurs and start-ups so that every entrepreneurial dream can be nurtured in our eco-system and we can help India achieve a status of 'Start-up Country'.</p><h5>Mission</h5><p>Our mission is to make our vision a reality by researching world class entrepreneurial start-up support practices and implementing for the absolute benefit of founders and aspiring entrepreneurs and working as idea stage accelerator by providing entrepreneurship trainings and advisory services and searching co-founders for start-ups and making fitment for their venture, helping fund raising through seed capital, private equity, venture capital and debt financing etc.</p><h5>Concept</h5><p>A co-founder means a joint-founder. A co-founder is a full-fledged business partner who is risk taker, having entrepreneurial capabilities and is responsible for designated functions in the company as decided by all co-founders together. For example, one co-founder takes care of marketing function and another takes care of finance, admin and operations and both together are involved in strategy and business planning.</p><p>Synergy is the interaction of multiple elements in a system to produce an effect different from or greater than the sum of their individual effects. The term synergy comes from the Greek word synergia meaning 'working together'.</p><p>So, the word Co-founder Synergy perfectly describes the importance of working as a team where team members from different acumen and training meet to set up a business with common goal of making any product or providing any service with or without profit motives.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "PHP",        "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "MySql",      "imgLink": "img/skillsLogo/mysql.jpg"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "HTML",       "imgLink": "img/skillsLogo/html.png"},
                                                                                {"title": "CSS",        "imgLink": "img/skillsLogo/css.jpg"},
                                                                                {"title": "Social API", "imgLink": "img/skillsLogo/social.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",                  "imgLink": "img/projectsImg/cofounder/cofounder1.png"},
                                                                                {"toolTip" : "Profile Page",               "imgLink": "img/projectsImg/cofounder/cofounder2.png"},
                                                                                {"toolTip" : "360 Value Creation Page",    "imgLink": "img/projectsImg/cofounder/cofounder3.png"},
                                                                                {"toolTip" : "Career Page",                "imgLink": "img/projectsImg/cofounder/cofounder4.png"},
                                                                                {"toolTip" : "Contact Us Page",            "imgLink": "img/projectsImg/cofounder/cofounder5.png"},
                                                                                {"toolTip" : "User Login Page",            "imgLink": "img/projectsImg/cofounder/cofounder6.png"},
                                                                                {"toolTip" : "User Registration Page",     "imgLink": "img/projectsImg/cofounder/cofounder7.png"},
                                                                                {"toolTip" : "User Home Page",             "imgLink": "img/projectsImg/cofounder/cofounder8.png"},
                                                                                {"toolTip" : "User Profile Page",          "imgLink": "img/projectsImg/cofounder/cofounder9.png"},
                                                                                {"toolTip" : "User Password Change Page",  "imgLink": "img/projectsImg/cofounder/cofounder10.png"},
                                                                                {"toolTip" : "NEWS Tag Page",              "imgLink": "img/projectsImg/cofounder/cofounder11.png"}
                                                                            ]
                                                    },
                                                    /*Uno App*/
                                                    {
                                                        "sno": 18, "projectName": "# Uno App", "classs": 'app', "thumbnail": "img/projectsImg/app_uno/uno1.png", "linkUrl": "http://www.eulogik.com/portfolio/uno-app/", "intro": "<h5>Intro</h5><p>Uno is s simple and smart way of messaging. Uno simple to used, chat with single word.</p><h5># features</h5><p>Chat with single word.</p><p>Find friends location.</p><p>See your friends profile.</p><p>Invite & connect with friends.</p><p>light weigth & faster.</p><p>Cheack last message status.</p><p>User profile pic.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "Ionic 1",      "imgLink": "img/skillsLogo/ionic.png"},
                                                                                {"title": "AngularJS",    "imgLink": "img/skillsLogo/angular.jpg"},
                                                                                {"title": "JavaScript",   "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "CSS",          "imgLink": "img/skillsLogo/css.jpg"},
                                                                                {"title": "StrongLoop",   "imgLink": "img/skillsLogo/strongloop.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Single word. Easy messageing",    "imgLink": "img/projectsImg/app_uno/uno1.jpg"},
                                                                                {"toolTip" : "Invite & connect with friends",   "imgLink": "img/projectsImg/app_uno/uno2.jpg"},
                                                                                {"toolTip" : "See your friend's profile",       "imgLink": "img/projectsImg/app_uno/uno3.jpg"},
                                                                                {"toolTip" : "check your last messages",        "imgLink": "img/projectsImg/app_uno/uno4.jpg"},
                                                                                {"toolTip" : "Type simple & Chat simple",       "imgLink": "img/projectsImg/app_uno/uno5.jpg"}
                                                                            ]
                                                    },
                                                    /*Kushal Multi Developers Website*/
                                                    {
                                                        "sno": 19, "projectName": "# Kushal Multi Developers", "classs": 'web', "thumbnail": "img/projectsImg/kushal/kushal1.png", "linkUrl": "http://kushalmultidevelopers.com", "intro": "<h5>Intro</h5><p>Kushal Multidevelopers Pvt. Ltd. Erstwhile R M Enterprises has already taken a lead by developing and delivering over 2.5 million sq. feet in just two and a half years of its inception. This magnificent success is the outcome of the trust reposed by the customers in the honest and transparent working of the company and due to the timely delivery and delivering more than the commitment. The success and co-operation of the customers has made us humble and enthusiased us to serve more.</p><p>At Kushal Multidevelopers, we believe, that trust and respect is earned through actions and not through words. This belief has pushed us to strive harder and create higher benchmarks in delivery and service.</p><p>The Company commenced operations in FEB 2011 in India. Today, the company enjoys a strong presence on and around NH8 Highway and operations spanning all key segments of the Real estate Industry, namely the farmhouses, residential, and commercial. The company is the one of the fastest entities in the realty sector with a difference that offers luxury for reasonable costs, excellent customer care levels with highest customer satisfaction index and the highest imaginable standards for the welfare of its staff, society as well as for the environment.</p><p>The company has traversed a path of steady growth and expansion and has posted increasing turnover and profits year after year. The systems have been strengthened and new processes have been added.</p><p>The company is managed by highly qualified and ethically sound professionals who are fully engrossed to ensure that the company maintains its high standards in quality construction, timely delivery and customer Satisfaction. The Company has always strived hard to keep its commitments and thus enjoys an extremely resonant reputation in the Real Estate Industry.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "PHP",        "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "Bootstrap",  "imgLink": "img/skillsLogo/bootstrap.png"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "HTML",       "imgLink": "img/skillsLogo/html.png"},
                                                                                {"title": "CSS",        "imgLink": "img/skillsLogo/css.jpg"},
                                                                                {"title": "Social API", "imgLink": "img/skillsLogo/social.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",           "imgLink": "img/projectsImg/kushal/kushal1.png"},
                                                                                {"toolTip" : "Our Projects Page",   "imgLink": "img/projectsImg/kushal/kushal2.png"},
                                                                                {"toolTip" : "Why Us Page",         "imgLink": "img/projectsImg/kushal/kushal3.png"},
                                                                                {"toolTip" : "Gallery Page",        "imgLink": "img/projectsImg/kushal/kushal4.png"},
                                                                                {"toolTip" : "About Us Page",       "imgLink": "img/projectsImg/kushal/kushal5.png"},
                                                                                {"toolTip" : "Our Projects Page",   "imgLink": "img/projectsImg/kushal/kushal6.png"},
                                                                                {"toolTip" : "Inquiry form Page",   "imgLink": "img/projectsImg/kushal/kushal7.png"},
                                                                                {"toolTip" : "Contect Us Page",     "imgLink": "img/projectsImg/kushal/kushal8.png"}

                                                                            ]
                                                    },
                                                    /*KushalUtility website*/
                                                    {
                                                        "sno": 21, "projectName": "# Kushal Utility Service", "classs": 'web', "thumbnail": "img/projectsImg/kushalUtility/kushal1.png", "linkUrl": "http://kushalutilityservices.com", "intro": "<h5>Intro</h5><p>Motto is to provide superior class, professional and trustworthy service to our customers in a timely, and a very COST-EFFECTIVE manner. Kushal Utility Services is founded on a strong vision of being the best in the market to provide high quality solutions delivered with cost effective, quality controlled and timely support to our customers.</p><p>We strive to improve the traditional ways of handling your household issues. Our services have been tried and proven to reduce costs, increase efficiency and allow individuals to focus on their core competencies and more efficient and productive work.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "PHP",        "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "HTML",       "imgLink": "img/skillsLogo/html.png"},
                                                                                {"title": "CSS",        "imgLink": "img/skillsLogo/css.jpg"},
                                                                                {"title": "Social API", "imgLink": "img/skillsLogo/social.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",               "imgLink": "img/projectsImg/kushalUtility/kushal1.png"},
                                                                                {"toolTip" : "Overview Page",           "imgLink": "img/projectsImg/kushalUtility/kushal2.png"},
                                                                                {"toolTip" : "Facts Page",              "imgLink": "img/projectsImg/kushalUtility/kushal3.png"},
                                                                                {"toolTip" : "Mission & Vision Page",   "imgLink": "img/projectsImg/kushalUtility/kushal4.png"},
                                                                                {"toolTip" : "About Founder Page",      "imgLink": "img/projectsImg/kushalUtility/kushal5.png"},
                                                                                {"toolTip" : "Plan Page",               "imgLink": "img/projectsImg/kushalUtility/kushal6.png"},
                                                                                {"toolTip" : "Plan Page",               "imgLink": "img/projectsImg/kushalUtility/kushal7.png"},
                                                                                {"toolTip" : "Plan Page",               "imgLink": "img/projectsImg/kushalUtility/kushal8.png"},
                                                                                {"toolTip" : "Plan Page",               "imgLink": "img/projectsImg/kushalUtility/kushal9.png"},
                                                                                {"toolTip" : "Plan Page",               "imgLink": "img/projectsImg/kushalUtility/kushal10.png"},
                                                                                {"toolTip" : "Why Us Page",             "imgLink": "img/projectsImg/kushalUtility/kushal11.png"},
                                                                                {"toolTip" : "Contact Us Page",         "imgLink": "img/projectsImg/kushalUtility/kushal12.png"}
                                                                            ]
                                                    },
                                                    /*vivid  Consortium website*/
                                                    {
                                                        "sno": 21, "projectName": "# Vivid Consortium", "classs": 'web', "thumbnail": "img/projectsImg/vividConsortium/vivid1.png", "linkUrl": "http://www.vividconsortium.com", "intro": "<h5>Intro</h5><p>Vivid Consortium (CL &WP) Pvt. Ltd. was formed in the year 2013 in collaboration with M/s. EP Borneo Sdn Bhd (Malaysia). We selected talented and experienced team of Engineers who were trained in India and Singapore for technical aspects, planning of works and installation of right product suitable for as per the location of works.</p><p>At Vivid Consortium (CL &WP) Pvt. Ltd. Our vision is to provide proficient and reliable service to our customers nationwide and become one of the major players in eco-friendly waterproofing and cleaning industry by exercising the skills and expertise in which we are endowed.</p><p>Carrying out all cleaning and waterproofing activities in a eco-friendly and environmentally safe way and ensuring safety of our employees and the public at large.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "HTML",       "imgLink": "img/skillsLogo/html.png"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "Bootstrap",  "imgLink": "img/skillsLogo/bootstrap.png"},
                                                                                {"title": "CSS",        "imgLink": "img/skillsLogo/css.jpg"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",        "imgLink": "img/projectsImg/vividConsortium/vivid1.png"},
                                                                                {"toolTip" : "About Page",       "imgLink": "img/projectsImg/vividConsortium/vivid2.png"},
                                                                                {"toolTip" : "Products Page",    "imgLink": "img/projectsImg/vividConsortium/vivid3.png"},
                                                                                {"toolTip" : "Products Page",    "imgLink": "img/projectsImg/vividConsortium/vivid4.png"},
                                                                                {"toolTip" : "Products Page",    "imgLink": "img/projectsImg/vividConsortium/vivid5.png"},
                                                                                {"toolTip" : "Products Page",    "imgLink": "img/projectsImg/vividConsortium/vivid6.png"},
                                                                                {"toolTip" : "Products Page",    "imgLink": "img/projectsImg/vividConsortium/vivid7.png"},
                                                                                {"toolTip" : "Service Page",     "imgLink": "img/projectsImg/vividConsortium/vivid8.png"},
                                                                                {"toolTip" : "Service Page",     "imgLink": "img/projectsImg/vividConsortium/vivid9.png"},
                                                                                {"toolTip" : "Service Page",     "imgLink": "img/projectsImg/vividConsortium/vivid10.png"},
                                                                                {"toolTip" : "Contact Us Page",  "imgLink": "img/projectsImg/vividConsortium/vivid11.png"}

                                                                            ]
                                                    },
                                                    /*8L Health website*/
                                                    {
                                                        "sno": 22, "projectName": "# 8l Health", "classs": 'web', "thumbnail": "img/projectsImg/8lhealth/8lhealth1.png", "linkUrl": "http://dev8lhealth.herokuapp.com", "intro": "<h5>Intro</h5><p>A global medical group that is dedicated to providing medical second opinions about cardiovascular health through Tele-Medicine.</p><p>We connect patients seeking expert consultation about preliminary diagnoses and treatment options with our American Board-certified cardiovascular professionals.</p><p>We use the latest telecommunications technology to conveniently and confidentially serve patients located across the global.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "PHP",        "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "MySql",      "imgLink": "img/skillsLogo/mysql.jpg"},
                                                                                {"title": "HTML",       "imgLink": "img/skillsLogo/html.png"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "Bootstrap",  "imgLink": "img/skillsLogo/bootstrap.png"},
                                                                                {"title": "CSS",        "imgLink": "img/skillsLogo/css.jpg"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",         "imgLink": "img/projectsImg/8lhealth/8lhealth1.png"},
                                                                                {"toolTip" : "Log In Page",       "imgLink": "img/projectsImg/8lhealth/8lhealth2.png"},
                                                                                {"toolTip" : "Contact us page",   "imgLink": "img/projectsImg/8lhealth/8lhealth3.png"}

                                                                            ]
                                                    },
                                                    /*Acromed website*/
                                                    {
                                                        "sno": 23, "projectName": "# Acromed", "classs": 'web', "thumbnail": "img/projectsImg/acromed/acromed1.png", "linkUrl": "http://www.acromed.in", "intro": "<h5>Intro</h5><p>Acromed.in is a Bhopal`s first online one stop shop for medicine, pathology, doctor`s and surgical products. Acromed provides cash on delivery services at every corner of Bhopal, India. We offer same day medicine delivery. We have prescription medicines of all brands. Acromed`s online surgical shop has all type of surgical products in reasonable rates for all types of clinics and hospitals in Bhopal.</p><p><b><u>Acromed features:</u></b></p><p>◉ Online Doctor Search</p><p>◉ Pathology Lab Tests</p><p>◉ Surgical Shop</p><p>◉ Online Doctor Search</p><p>Acromed.in team makes delivery online medicine simple as you think. We are working from last 10 years in same domain of Pharmaceutical, which was managed by dedicated team of young entrepreneur. We are the one who commit you for the customer service, time &amp; affordable rates for high quality medicine. We use the latest trends &amp; technology from which customer can easily reach us for better &amp; fast service, you can use our website, mobile app and whats app to connect with us and our services.</p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "PHP",        "imgLink": "img/skillsLogo/php.png"},
                                                                                {"title": "MySql",      "imgLink": "img/skillsLogo/mysql.jpg"},
                                                                                {"title": "HTML",       "imgLink": "img/skillsLogo/html.png"},
                                                                                {"title": "JavaScript", "imgLink": "img/skillsLogo/js.png"},
                                                                                {"title": "Bootstrap",  "imgLink": "img/skillsLogo/bootstrap.png"},
                                                                                {"title": "CSS",        "imgLink": "img/skillsLogo/css.jpg"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Home Page",                          "imgLink": "img/projectsImg/acromed/acromed1.png"},
                                                                                {"toolTip" : "Search & Buy Medicine Page",         "imgLink": "img/projectsImg/acromed/acromed2.png"},
                                                                                {"toolTip" : "Book Doctors Appointment Page",      "imgLink": "img/projectsImg/acromed/acromed3.png"},
                                                                                {"toolTip" : "Find and Book Page",                 "imgLink": "img/projectsImg/acromed/acromed4.png"},
                                                                                {"toolTip" : "Upload Prescription Page",           "imgLink": "img/projectsImg/acromed/acromed5.png"},
                                                                                {"toolTip" : "Pathology Lab Page",                 "imgLink": "img/projectsImg/acromed/acromed6.png"},
                                                                                {"toolTip" : "Blog Page",                          "imgLink": "img/projectsImg/acromed/acromed7.png"},
                                                                                {"toolTip" : "FAQs Page",                          "imgLink": "img/projectsImg/acromed/acromed8.png"},
                                                                                {"toolTip" : "Contact Us Page",                    "imgLink": "img/projectsImg/acromed/acromed9.png"},
                                                                                {"toolTip" : "Offers Page",                        "imgLink": "img/projectsImg/acromed/acromed10.png"},
                                                                                {"toolTip" : "Registration Page",                  "imgLink": "img/projectsImg/acromed/acromed11.png"},
                                                                                {"toolTip" : "Login Page",                         "imgLink": "img/projectsImg/acromed/acromed12.png"}
                                                                            ]
                                                    },
                                                    /*Runnner Game*/
                                                    {
                                                        "sno": 24, "projectName": "# Runnner", "classs": 'other', "thumbnail": "img/projectsImg/runner/runner4.png", "linkUrl": "./runner.html", "intro": "<h5>Intro</h5><p>Runnner is a flash based 2d game develop by me in 2011. This is my first pice of code. I used Adobe flash with actionscript 2.0,  photoshop for graphic design & Adobe soundboot for sound editing.</p><p>I learnt scoreing system, Scollision management, Graphic controlling using AS 2.0, Animations.</p><p>You can play this game use this link. <a href='./runner.html' target='_blank'>Click here to Play this Game</a></p>", 
                                                        "chipRepetTech":    [
                                                                                {"title": "Flash",              "imgLink": "img/skillsLogo/flash.png"},
                                                                                {"title": "Photoshop",          "imgLink": "img/skillsLogo/ps.png"},
                                                                                {"title": "SoundBooth",         "imgLink": "img/skillsLogo/soundBooth.jpg"},
                                                                                {"title": "ActionScript 2.0",  "imgLink": "img/skillsLogo/actionScript.png"}
                                                                            ],
                                                        "screenShot":       [
                                                                                {"toolTip" : "Game Preloader Screen",      "imgLink": "img/projectsImg/runner/runner1.png"},
                                                                                {"toolTip" : "My Intro Page Screen",       "imgLink": "img/projectsImg/runner/runner2.png"},
                                                                                {"toolTip" : "Game Menu Screen",           "imgLink": "img/projectsImg/runner/runner3.png"},
                                                                                {"toolTip" : "Stage 1-1 Screen",           "imgLink": "img/projectsImg/runner/runner4.png"},
                                                                                {"toolTip" : "Stage 1-2 Screen",           "imgLink": "img/projectsImg/runner/runner5.png"},
                                                                                {"toolTip" : "Stage 2-1 Screen",           "imgLink": "img/projectsImg/runner/runner6.png"},
                                                                                {"toolTip" : "Stage 2-2 Screen",           "imgLink": "img/projectsImg/runner/runner7.png"},
                                                                                {"toolTip" : "Stage 3-1 Screen",           "imgLink": "img/projectsImg/runner/runner8.png"},
                                                                                {"toolTip" : "Stage 3-2 Screen",           "imgLink": "img/projectsImg/runner/runner9.png"},
                                                                                {"toolTip" : "Stage 4-1 Screen",           "imgLink": "img/projectsImg/runner/runner10.png"},
                                                                                {"toolTip" : "Stage 4-2 Screen",           "imgLink": "img/projectsImg/runner/runner11.png"},
                                                                                {"toolTip" : "Credits List Screen",        "imgLink": "img/projectsImg/runner/runner12.png"},
                                                                                {"toolTip" : "Gave Over Screen",           "imgLink": "img/projectsImg/runner/runner13.png"}
                                                                            ]
                                                    },
                                                  ],
      "copyRightText"                           : "© 2020 COPYRIGHT",
      "developerMSG"                            : "Made with <i>♥</i> by Vishal Singh",
      "parallaxImg1"                            : "img/parallaxImg/01.jpg",
      "parallaxImg2"                            : "img/parallaxImg/02.jpg",
      "parallaxImg3"                            : "img/parallaxImg/03.jpg",
      "parallaxImg4"                            : "img/parallaxImg/04.png",
    }];
  
    
    $scope.selectProject = function(index){
      $scope.selectedProject = $scope.pageStaticObject[0].projectsRepets[index];
      //alert(JSON.stringify($scope.selectedProject));
    }
});