var arr = [2,6,5,8,4,7,1,3]
var i = 0;
// while(arr.length < 8){
//     var r = Math.floor(Math.random() * 8) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }

function dexter_voice(lang, translatedText){
    let utterance;
    utterance = new SpeechSynthesisUtterance(translatedText)
    utterance.lang = lang;
    speechSynthesis.speak(utterance)
}

function planetDes(){
    var speech="venus";
    let text = document.getElementById("instruction").innerText;
    dexter_voice("en", text);
    var j = 0;
    do {
        switch (arr[i]) {
            case 1:
                text = "Which is the dark grey planet that has wrinkles on it?"
                dexter_voice("en", text);
                if(speech == "mercury"){
                    text = "Great! It is Mercury.<br>It is closest to the sun!"
                    dexter_voice("en", text);
                    if(speech == "next"){
                        i = i+1;
                    }
                }
                break;
            case 2:
                text = "Which is the yellowish-white planet with few brownish-red spots? These spots signify the volcanic rocks!"
                dexter_voice("en", text)
                if(speech == "venus"){
                    text = "Great! This is Venus which is the hottest planet but comes after Mercury<br>(not the sun)"
                    dexter_voice("en", text)
                    speech = "next"
                    if(speech == "next"){
                        i = i+1;
                    }
                }
                break;
            case 3:
                text = "Which planet is A combination of water and land? It is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons and plains."
                dexter_voice("en", text)
                if(speech == "earth"){
                    text = "Great! The planets before the Milky way are Terrestrial Planets. Earth is the second-last Terrestrial planet."
                    dexter_voice("en", text)
                    if(speech == "next"){
                        i = i+1;
                    }
                }
                break;
            case 4:
                text = "Which is the red planet? It got the colour red because of the rusty iron on its surface."
                dexter_voice("en", text)
                if(speech == "mars"){
                    text = "Yes, Mars!!<br>It comes right before the milky way."
                    dexter_voice("en", text)
                    if(speech == "next"){
                        i = i+1;
                    }
                }
                break;
            case 5:
                text = "Which is the largest planet in the solar system? It is a gas giant and its colour changes with storms and wind in the planet's atmosphere."
                dexter_voice("en", text)
                if(speech == "jupiter"){
                    text = "That's right. Jupiter!<br>It comes right after the milky way."
                    dexter_voice("en", text)
                    if(speech == "next"){
                        i = i+1;
                    }
                }
                break;
            case 6:
                speech = "saturn"
                text = "Which is the planet with rings? It has a set of 7 main rings with spaces between them."
                dexter_voice("en", text)
                if(speech == "saturn"){
                    text = "You are right, Saturn.<br>The planets after the Milky way are Jovian Planets. It is the second Jovian planet."
                    dexter_voice("en", text)
                    speech = "next"
                    if(speech == "next"){
                        i = i+1;
                    }
                }
                break;
            case 7:
                text = "Which is the planet which is blue in colour and has faint rings?"
                dexter_voice("en", text)
                if(speech == "uranus"){
                    text = "That's correct, Uranus!<br>It is the second-last planet in the solar system and is a neighbour of Saturn!"
                    dexter_voice("en", text)
                    if(speech == "next"){
                        i = i+1;
                    }
                }
                break;
            case 8:
                text = "Which is the dark, cold and windy planet?<br>(It's colour is dark blue.)"
                dexter_voice("en", text)
                if(speech == "neptune"){
                    text = "Great! It is Neptune.<br>It is the last planet in the solar system."
                    dexter_voice("en", text)
                    if(speech == "next"){
                        i = i+1;
                    }
                }
                break;
            default:
                break;
        }  
    j++;
    } while (j <= 8);
    
}
planetDes();