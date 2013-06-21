// Kevin Fry
// SDI 1306
// Project 3
// Custom JS app based on created flowchart

// JSON data
var jsonData = {
    "socialNetworks": [
        {
            "name": "Twitter",
            "link": "https://twitter.com/",
            "description": "you send short \"text\" messages for the world to see."
        },
        {
            "name": "Google+",
            "link": "https://plus.google.com/",
            "description": "you get updates and shares from your circles of friends, family, co-workers, and people you admire."
        },
        {
            "name": "LinkedIn",
            "link": "https://www.linkedin.com/",
            "description": "your able to do professional networking."
        },
        {
            "name": "Facebook",
            "link": "https://www.facebook.com/",
            "description": "you can post messages, pictures, and videos for all your friends to see."
        }
    ]
};

// Variables
var objTwitter = { "name": "Twitter", "mediaType": "characters", "textMessage": false };
var arrFacebook = ["Facebook", "all available", true, "will throw an error"];
var arrMediaTypes = ["all available", "text", "pictures", "videos"];
var arrMaxTypes = ["characters","px","hr","min","KB","MB","GB"];
var arrChangeSocialNetworking = ["network", "type", "size", "sizeType"];

// Object
var objPost = {
    "name":         "Twitter",
    "mediaType":    "text",
    "maxSize":      140,
    "maxType":      "characters",
    "changeSocalNetwork":   function(name,mediaType,maxSize,maxType){
        this.name = name;
        this.mediaType = mediaType;
        this.maxSize = maxSize;
        this.maxType = maxType;
    },
    "detectSocialNetwork":  function(size,type){
        var arrSocials = [];
        if ((type === "characters") && (size <= 140)) {
            arrSocials.push("Twitter","Facebook","Google+","LinkedIn");
        } else {
            if ((type === "px") && (size <= 2048)){
                arrSocials.push("Facebook","Google+","LinkedIn");
            } else {
                arrSocials.push("Pinterest");
            }
        }
        return arrSocials;
    },
    "getSocial": function(){
        var setInfo = [this.name,this.mediaType,this.maxSize,this.maxType];
        return setInfo;
    },
    "isTwitter": function(myBool){
        if ((myBool === true) && (this.name === "Twitter")){
            return true;
        } else {
            return false;
        }
    }
    
};

var funcShowJsonData = function(myData){
    var numSocialNetworks = 0;
    var textMessageMax = 160;
    var numCharacters = 150;
    var tweetMessageMax = 140;
    var txtTest = "Twitter";
    for (var key in myData.socialNetworks){
        numSocialNetworks = numSocialNetworks + 1;
        console.log("With " + myData.socialNetworks[key].name + ", " + myData.socialNetworks[key].description);
        if (myData.socialNetworks[key].name === txtTest){
            while (numCharacters > tweetMessageMax){
                console.log(numCharacters + " characters is too many for Twitter, let's reduce the size of the tweet.");
                numCharacters = numCharacters - 1;
            }
            console.log(numCharacters + " characters can be posted to Twitter.");
        }
    }
    return numSocialNetworks;
};

var funcMergeToObject = function(myArray, myObject){
    var objReturn = { "name": myArray[0], "mediaType": myArray[1], "textMessage": myArray[2] };
    for (i=0; i<myArray.length; i++){
        //console.out(myArray[i] + " ");
        while (myArray.length > 3){
            console.log ("Sometimes, your posts to " + myArray[0] + " can be too much for Twitter to handle.");
            myArray.pop();
        }
        
    }
    return objReturn;
};

var numSocialNetworks = funcShowJsonData(jsonData);
var myFB2ObjSocial = funcMergeToObject(arrFacebook, objTwitter);
var iCanPostTo = objPost.detectSocialNetwork(125, "characters");
var arrCurrentSocial = objPost.getSocial();
var boolIsCurrentSocialTwitter = objPost.isTwitter(false);
// facebook max file upload 25mb
objPost.changeSocalNetwork("Facebook","videos",25,"MB");
objPost.changeSocalNetwork("Google+","pictures",2048,"px");
objPost.changeSocalNetwork("Google+","videos",15,"min");
// Unlimited video uploads (up to 15 minutes per video, up to 1080p)


console.log("With the " + objPost.name + " social network, posting " + objPost.mediaType + " maxes out at " + objPost.maxSize + " " + objPost.maxType + ".");

console.log("It's " +boolIsCurrentSocialTwitter+ " that we are right now working with Twitter.");