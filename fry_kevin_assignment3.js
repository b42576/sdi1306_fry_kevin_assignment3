// Kevin Fry
// SDI 1306
// Project 3
// Custom JS app based on created flowchart


var jsonData = {
    "socialNetworks": [
        {
            "name": "Twitter",
            "link": "https://twitter.com/",
            "description": "Short \"text\" messages for the world to see."
        },
        {
            "name": "Google+",
            "link": "https://plus.google.com/",
            "description": "Updates and shares from your circles of friends, family, co-workers, and people you admire."
        },
        {
            "name": "LinkedIn",
            "link": "https://www.linkedin.com/",
            "description": "Professional networking."
        },
        {
            "name": "Facebook",
            "link": "https://www.facebook.com/",
            "description": "Post messages, pictures, and videos for all your friends to see."
        }
    ]
};

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
            arrSocials.push("Twitter");
        } else {
            if ((type === "px") && (size <= 2048)){
                arrSocials.push("Facebook","Google+","LinkedIn");
            } else {
                arrSocials.push("Facebook","Google+","LinkedIn");
            }
        }
        return arrSocials;
    },
    "getSocial": function(){
        var setInfo = [this.name,this.mediaType,this.maxSize,this.maxType];
        return setInfo;
    }
    
};



var arrMediaTypes = ["all available", "text", "pictures", "videos"];
var arrMaxTypes = ["characters","px","hr","min","KB","MB","GB"];
var arrChangeSocialNetworking = ["network", "type", "size", "sizeType"];

var objSocials = {
    
};



// facebook max file upload 25mb
objPost.changeSocalNetwork("Facebook","videos",25,"MB");
objPost.changeSocalNetwork("Google+","pictures",2048,"px");
objPost.changeSocalNetwork("Google+","videos",15,"min");
// Unlimited video uploads (up to 15 minutes per video, up to 1080p)


console.log("Social Network: " + objPost.name);
console.log("Medial Type: " + objPost.mediaType);
console.log("Max Size: " + objPost.maxSize);
console.log("Max Type: " + objPost.maxType);

