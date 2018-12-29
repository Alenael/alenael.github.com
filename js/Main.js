var demonData;
var skillData;
var liberatorData;
var nullText = "-----------";
var baseUrl = "https://alenael.github.io/Dx2-TeamBuilder/Index.html";

function LoadData() {

    $.when(JsonLoader1(), JsonLoader2(), JsonLoader3()).done(function (a1, a2) {
        ReadURL();
    });
}

//Reads the URl upon load to see if we have a special build being loaded
function ReadURL() {
    if (window.location.href.includes("?")) {
        var result = window.atob(window.location.href.split('?')[1]);
        
        var url = new URL(decodeURI(baseUrl + "?" + result));

        var demon1 = url.searchParams.get("demon1");
        var demon1Archtype = url.searchParams.get("demon1archtype");
        var demon1Skill1 = url.searchParams.get("demon1skill1");
        var demon1Skill2 = url.searchParams.get("demon1skill2");
        var demon2 = url.searchParams.get("demon2");
        var demon2Archtype = url.searchParams.get("demon2archtype");
        var demon2Skill1 = url.searchParams.get("demon2skill1");
        var demon2Skill2 = url.searchParams.get("demon2skill2");
        var demon3 = url.searchParams.get("demon3");
        var demon3Archtype = url.searchParams.get("demon3archtype");
        var demon3Skill1 = url.searchParams.get("demon3skill1");
        var demon3Skill2 = url.searchParams.get("demon3skill2");
        var demon4 = url.searchParams.get("demon4");
        var demon4Archtype = url.searchParams.get("demon4archtype");
        var demon4Skill1 = url.searchParams.get("demon4skill1");
        var demon4Skill2 = url.searchParams.get("demon4skill2");
        var liberator = url.searchParams.get("liberator");

        if (liberator != null)
            document.getElementById("liberators").value = liberator;

        if (demon1 != null) {
            document.getElementById("demonSel1").value = demon1;
            document.getElementById("demon1archtype").value = demon1Archtype;

            if (demon1Skill1 != null) {
                document.getElementById("demon1gachalock").checked = true;
                document.getElementById("demon1customskill1").value = demon1Skill1;
            }
            if (demon1Skill2 != null)
                document.getElementById("demon1customskill2").value = demon1Skill2;
        }

        if (demon2 != null) {
            document.getElementById("demonSel2").value = demon2;
            document.getElementById("demon2archtype").value = demon2Archtype;

            if (demon2Skill1 != null) {
                document.getElementById("demon2gachalock").checked = true;
                document.getElementById("demon2customskill1").value = demon2Skill1;
            }
            if (demon2Skill2 != null)
                document.getElementById("demon2customskill2").value = demon2Skill2;
        }

        if (demon3 != null) {
            document.getElementById("demonSel3").value = demon3;
            document.getElementById("demon3archtype").value = demon3Archtype;

            if (demon3Skill1 != null) {
                document.getElementById("demon3gachalock").checked = true;
                document.getElementById("demon3customskill1").value = demon3Skill1;
            }
            if (demon3Skill2 != null)
                document.getElementById("demon3customskill2").value = demon3Skill2;
        }
        if (demon4 != null) {
            document.getElementById("demonSel4").value = demon4;
            document.getElementById("demon4archtype").value = demon4Archtype;

            if (demon4Skill1 != null) {
                document.getElementById("demon4gachalock").checked = true;
                document.getElementById("demon4customskill1").value = demon4Skill1;
            }
            if (demon4Skill2 != null)
                document.getElementById("demon4customskill2").value = demon4Skill2;
        }

        ReloadAll();
    }
}


//Generates our URl on button press
function CreateURL() {

    var parameters = "";

    if ($('#liberator').val() != nullText) {
        parameters += "liberator=" + $('#liberators').val() + "&";
    }
    if ($('#demonSel1').val() != nullText) {
        parameters += "demon1=" + $('#demonSel1').val() + "&";
        parameters += "demon1archtype=" + $('#demon1archtype').val() + "&";

        if ($('#demon1customskill1').val() != nullText)
            parameters += "demon1skill1=" + $('#demon1customskill1').val() + "&";
        if ($('#demon1customskill2').val() != nullText)
            parameters += "demon1skill2=" + $('#demon1customskill2').val() + "&";
    }
    if ($('#demonSel2').val() != nullText) {
        parameters += "demon2=" + $('#demonSel2').val() + "&";
        parameters += "demon2archtype=" + $('#demon2archtype').val() + "&";

        if ($('#demon2customskill1').val() != nullText)
            parameters += "demon2skill1=" + $('#demon2customskill1').val() + "&";
        if ($('#demon2customskill2').val() != nullText)
            parameters += "demon2skill2=" + $('#demon2customskill2').val() + "&";
    }
    if ($('#demonSel3').val() != nullText) {
        parameters += "demon3=" + $('#demonSel3').val() + "&";
        parameters += "demon3archtype=" + $('#demon3archtype').val() + "&";

        if ($('#demon1customskill1').val() != nullText)
            parameters += "demon3skill1=" + $('#demon3customskill1').val() + "&";
        if ($('#demon1customskill2').val() != nullText)
            parameters += "demon3skill2=" + $('#demon3customskill2').val() + "&";
    }
    if ($('#demonSel4').val() != nullText) {
        parameters += "demon4=" + $('#demonSel4').val() + "&";
        parameters += "demon4archtype=" + $('#demon4archtype').val() + "&";

        if ($('#demon1customskill1').val() != nullText)
            parameters += "demon4skill1=" + $('#demon4customskill1').val() + "&";
        if ($('#demon1customskill2').val() != nullText)
            parameters += "demon4skill2=" + $('#demon4customskill2').val() + "&";
    }

    window.location.href =baseUrl + "?" + window.btoa(parameters.substring(0, parameters.length - 1));
}

function JsonLoader1() {
    //Load Skills
    return $.getJSON("Data/Skills.json", function (skills) {
        skillData = skills;

        LoadSkillControl("demon1customskill1");
        LoadSkillControl("demon1customskill2");

        LoadSkillControl("demon2customskill1");
        LoadSkillControl("demon2customskill2");

        LoadSkillControl("demon3customskill1");
        LoadSkillControl("demon3customskill2");

        LoadSkillControl("demon4customskill1");
        LoadSkillControl("demon4customskill2");
    });
}

function JsonLoader2() {
    //Load Demons
    return $.getJSON("Data/Demons.json", function (demons) {
        demonData = demons;

        LoadDemonControl("demonSel1");
        LoadDemonControl("demonSel2");
        LoadDemonControl("demonSel3");
        LoadDemonControl("demonSel4");
    });
}


function JsonLoader3() {
    //Load Liberators
    return $.getJSON("Data/Liberators.json", function(liberators) {
            liberatorData = liberators;

            var select = document.getElementById("liberators");
            var option = document.createElement('option');
            option.text = nullText;
            option.value = nullText;
            select.add(option, 0);

            for (var i = 0; i <= liberatorData.length - 1; i++) {
                //Load all the demons and add them to our list
                var option = document.createElement('option');
                option.text = liberatorData[i].Name;
                option.value = liberatorData[i].Name;
                select.add(option, 0);
            }
        });
}

//Loads up a control with skills
function LoadSkillControl(control) {
    var select = document.getElementById(control);
    var option = document.createElement('option');
    option.text = nullText;
    option.value = nullText;
    option.title = "";
    select.add(option, 0);

    for (var i = 0; i <= skillData.length - 1; i++) {
        //Load all the demons and add them to our list
        var option = document.createElement('option');
        option.text = skillData[i].Name;
        option.value = skillData[i].Name;
        option.title = skillData[i].Description;
        select.add(option, 0);
    }

    SortByABC(control);
}

//Loads up a control with our demon info
function LoadDemonControl(control) {
    var select = document.getElementById(control);
    var option = document.createElement('option');
    option.text = nullText;
    option.value = nullText;
    select.add(option, 0);

    for (var i = 0; i <= demonData.length - 1; i++) {
        //Load all the demons and add them to our list
        var option = document.createElement('option');
        option.text = demonData[i].Name;
        option.value = demonData[i].Name;
        select.add(option, 0);
    }

    SortByABC(control);
}

//Sorts a Drop Down into ABC
function SortByABC(control) {
    var sel = $('#' + control);
    var opts_list = sel.find('option');
    opts_list.sort(function (a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
    sel.html('').append(opts_list);
}

function ReloadAll() {
    ChangeLiberator();
    ChangeDemon(document.getElementById("demonSel1"));
    ChangeDemon(document.getElementById("demonSel2"));
    ChangeDemon(document.getElementById("demonSel3"));
    ChangeDemon(document.getElementById("demonSel4"));
    CalculateTotalSpeed();
}

function ChangeDemon(control) {
    switch (control.id) {
    case "demonSel1":
        SetupDemonControls(1);
        break;
    case "demonSel2":
        SetupDemonControls(2);
        break;
    case "demonSel3":
        SetupDemonControls(3);
        break;
    case "demonSel4":
        SetupDemonControls(4);
        break;
    }
}

function SetupDemonControls(controlNum) {
    var sel = $('#demonSel' + controlNum).val();
    demonData.forEach(function(demon) {
        if (demon.Name == sel) {
            document.getElementById("demon" + controlNum + "image").style.visibility = 'visible';
            document.getElementById("demon" + controlNum + "image").src = "Images/Demons/" + demon.Name + ".png";
            document.getElementById("demon" + controlNum + "skill1").innerHTML = demon["Skill 1"];
            document.getElementById("demon" + controlNum + "skill1").title = GetSkillInfo(demon["Skill 1"]);
            document.getElementById("demon" + controlNum + "skill2").innerHTML = demon["Skill 2"];
            document.getElementById("demon" + controlNum + "skill2").title = GetSkillInfo(demon["Skill 2"]);
            document.getElementById("demon" + controlNum + "skill3").innerHTML = demon["Skill 3"];
            document.getElementById("demon" + controlNum + "skill3").title = GetSkillInfo(demon["Skill 3"]);
            document.getElementById("demon" + controlNum + "awakenskill1").innerHTML =
                GetSkillByArchtype(demon, $('#demon1archtype').val());
            document.getElementById("demon" + controlNum + "awakenskill1").title =
                GetSkillInfo(GetSkillByArchtype(demon, $('#demon1archtype').val()));
            if (document.getElementById("demon" + controlNum + "gachalock").checked == false) {
                document.getElementById("demon" + controlNum + "customskill1").value =
                    GetGachaSkillByArchtype(demon, $('#demon' + controlNum + 'archtype').val());
            }
            CalculateTotalSpeed();
        } else if (nullText == sel) {
            document.getElementById("demon" + controlNum + "image").style.visibility = 'hidden';
        }
    });
}

//Calculate team speed
function CalculateTotalSpeed() {

    var demon1Speed = GetDemonSpeed(1);
    var demon2Speed = GetDemonSpeed(2);
    var demon3Speed = GetDemonSpeed(3);
    var demon4Speed = GetDemonSpeed(4);
    var count = Math.min(demon1Speed, 1) + Math.min(demon2Speed, 1) + Math.min(demon3Speed, 1) + Math.min(demon4Speed, 1);

    var totalSpeed = 0;
    if (count != 0)
        totalSpeed = Math.floor((demon1Speed + demon2Speed + demon3Speed + demon4Speed) * (100 / count));
    
    document.getElementById("totalspeed").innerHTML = "Total Speed: " + totalSpeed;
}

//Returns a demons speed value
function GetDemonSpeed(num) {
    var demon = GetDemon(num);
    var liberator = GetLiberator();
    var speed = 0;
    var extraAgi = 0;
    var extraPercent = 1;

    if (demon != null) {
        //Calculate Extra Agi
        if (demon["Skill 1"] == "Agility Amp I" ||
            demon["Skill 2"] == "Agility Amp I" ||
            demon["Skill 3"] == "Agility Amp I" ||
            $('#demon' + num + "customskill1").val() == "Agility Amp I" ||
            $('#demon' + num + "customskill2").val() == "Agility Amp I")
            extraAgi += 5;

        if (demon["Skill 1"] == "Agility Amp II" ||
            demon["Skill 2"] == "Agility Amp II" ||
            demon["Skill 3"] == "Agility Amp II" ||
            $('#demon' + num + "customskill1").val() == "Agility Amp II" ||
            $('#demon' + num + "customskill2").val() == "Agility Amp II")
            extraAgi += 10;

        if (demon["Skill 1"] == "Agility Amp III" ||
            demon["Skill 2"] == "Agility Amp III" ||
            demon["Skill 3"] == "Agility Amp III" ||
            $('#demon' + num + "customskill1").val() == "Agility Amp III" ||
            $('#demon' + num + "customskill2").val() == "Agility Amp III")
            extraAgi += 15;

        //Add Ag from Liberator
        if (liberator != null && liberator != nullText && liberator.Ag != "")
            extraAgi += liberator.Ag;

        //Calculate extra percent
        if (demon["Skill 1"] == "Speedster" ||
            demon["Skill 2"] == "Speedster" ||
            demon["Skill 3"] == "Speedster" ||
            $('#demon' + num + "customskill1").val() == "Speedster" ||
            $('#demon' + num + "customskill2").val() == "Speedster")
            extraPercent += .5;

        speed = Math.floor((demon["6★ Agility"] + extraAgi) * extraPercent);
    }

    return speed;
}

//Gets demon by name
function GetDemon(controlNum) {
    var foundDemon = null;
    demonData.forEach(function (demon) {
        if (demon.Name == $('#demonSel' + controlNum).val()) {
            foundDemon = demon;
        }
    });

    return foundDemon;
}

//Get Liberator by name
function GetLiberator() {
    var foundLiberator = null;
    liberatorData.forEach(function (liberator) {
        if (liberator.Name == document.getElementById("liberators").value) {
            foundLiberator = liberator;
        }
    });

    return foundLiberator;
}

function GetSkillInfo(skillName) {
    for (var i = 0; i <= skillData.length; i++) {
        if (skillName == nullText)
            return "";
        else (skillData[i].Name == skillName)
            return skillData[i].Description;
    }
}

function GetSkillByArchtype(demon, archtype) {
    switch (archtype) {
    case "clear":
        return SwapNullText(demon["Clear Awaken"]);
    case "red":
        return SwapNullText(demon["Red Awaken"]);
    case "teal":
        return SwapNullText(demon["Teal Awaken"]);
    case "purple":
        return SwapNullText(demon["Purple Awaken"]);
    case "yellow":
        return SwapNullText(demon["Yellow Awaken"]);
    }
}

function GetGachaSkillByArchtype(demon, archtype) {
    switch (archtype) {
    case "clear":
        return SwapNullText(demon["Clear Gacha"]);
    case "red":
        return SwapNullText(demon["Red Gacha"]);
    case "teal":
        return SwapNullText(demon["Teal Gacha"]);
    case "purple":
        return SwapNullText(demon["Purple Gacha"]);
    case "yellow":
        return SwapNullText(demon["Yellow Gacha"]);
    }
}

//Swaps our text if its null
function SwapNullText(text) {
    if (text == null)
        return nullText;
    else
        return text;
}


function Reset() {
    //Set our null values
    document.getElementById("demonSel1").value = nullText;
    document.getElementById("demonSel2").value = nullText;
    document.getElementById("demonSel3").value = nullText;
    document.getElementById("demonSel4").value = nullText;
        
    //Reset Artypes
    document.getElementById("demon1archtype").value = "Clear";
    document.getElementById("demon2archtype").value = "Clear";
    document.getElementById("demon3archtype").value = "Clear";
    document.getElementById("demon4archtype").value = "Clear";

    ReloadAll();
}

function ChangeLiberator() {
    var liberator = $('#liberators').val();

    if (liberator == nullText)
        document.getElementById("liberatorimage").style.visibility = 'hidden';
    else {
        document.getElementById("liberatorimage").style.visibility = 'visible';
        document.getElementById("liberatorimage").src = "Images/Liberators/" + liberator + ".png";
    }

    CalculateTotalSpeed();
}

function OpenTab(event, tab, tabControlClass, tabContentClass) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(tabContentClass);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName(tabControlClass);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    event.currentTarget.className += " active";
}