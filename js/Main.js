var demonData;
var skillData;
var liberatorData;
var nullText = "-----------";
var baseUrl = "https://alenael.github.io/Dx2-TeamBuilder";

//Our Controls
var demonsSel;
var demonArchtype;
var demonCustomSkill1;
var demonCustomSkill2;
var demonGachaLock;
var demonImages;
var demonImgArchtype;
var demonImgAI;
var demonSkill1;
var demonSkill2;
var demonSkill3;
var demonAwakenSkill;
var demonPhys;
var demonFire;
var demonIce;
var demonElec;
var demonForce;
var demonLight;
var demonDark;

function LoadData() {
    
    //Create some additional demons
    $('#demon').clone().attr("id", "demon2").addClass("order-1").appendTo('#demoncontent');
    $('#demon').clone().attr("id", "demon3").addClass("order-3").appendTo('#demoncontent');
    $('#demon').clone().attr("id", "demon4").addClass("order-3").appendTo('#demoncontent');

    //Enable Tooltips
    $("[data-toggle=tooltip]").tooltip();

    //Load our json
    $.when(JsonLoader1(), JsonLoader2(), JsonLoader3()).done(function (a1, a2) {

        //Grab reference to all our controls
        demonsSel = document.getElementsByName("demonSel");
        demonArchtype = document.getElementsByName("demonArchtype");
        demonCustomSkill1 = document.getElementsByName("demonCustomSkill1");
        demonCustomSkill2 = document.getElementsByName("demonCustomSkill2");
        demonGachaLock = document.getElementsByName("demonGachaLock");
        demonImages = document.getElementsByName("demonImage");
        demonImgArchtype = document.getElementsByName("demonImgArchtype");
        demonImgAI = document.getElementsByName("demonImgAI");
        demonSkill1 = document.getElementsByName("demonSkill1");
        demonSkill2 = document.getElementsByName("demonSkill2");
        demonSkill3 = document.getElementsByName("demonSkill3");
        demonAwakenSkill = document.getElementsByName("demonAwakenSkill");
        demonPhys = document.getElementsByName("demonPhys");
        demonFire = document.getElementsByName("demonFire");
        demonIce = document.getElementsByName("demonIce");
        demonElec = document.getElementsByName("demonElec");
        demonForce = document.getElementsByName("demonForce");
        demonLight = document.getElementsByName("demonLight");
        demonDark = document.getElementsByName("demonDark");

        ReadURL();
    });
}

//Reads the URl upon load to see if we have a special build being loaded
function ReadURL() {
    if (window.location.href.indexOf("?") >= 0) {
        var result = window.atob(window.location.href.split('?')[1]);

        var url = new URL(decodeURI(baseUrl + "?" + result));

        var liberator = url.searchParams.get("liberator");

         if (liberator != null)
             document.getElementById("liberators").value = liberator;

        var demons = [
            url.searchParams.get("demon1"),
            url.searchParams.get("demon2"),
            url.searchParams.get("demon3"),
            url.searchParams.get("demon4")
        ];

        var archtpes = [
            url.searchParams.get("demon1archtype"),
            url.searchParams.get("demon2archtype"),
            url.searchParams.get("demon3archtype"),
            url.searchParams.get("demon4archtype")
        ];

        var customSkills1 = [
            url.searchParams.get("demon1skill1"),
            url.searchParams.get("demon2skill1"),
            url.searchParams.get("demon3skill1"),
            url.searchParams.get("demon4skill1")
        ];

        var customSkills2 = [
            url.searchParams.get("demon1skill2"),
            url.searchParams.get("demon2skill2"),
            url.searchParams.get("demon3skill2"),
            url.searchParams.get("demon4skill2")
        ];

        for (var i = 0; i < demons.length; i++) {
            demonsSel[i].value = demons[i];
            demonArchtype[i].value = archtpes[i];
            demonCustomSkill1[i].value = customSkills1[i];
            demonCustomSkill2[i].value = customSkills2[i];
            demonGachaLock[i].checked = true;
        }
    }

    ReloadAll();
}


//Generates our URl on button press
function CreateURL() {

    var parameters = "";

    if ($('#liberator').val() != nullText) {
        parameters += "liberator=" + $('#liberators').val() + "&";
    }

    for (var i = 0; i < demonsSel.length; i++) {
        if (demonsSel[i].value !== nullText) {
            parameters += "demon" + (i+1) + "=" + demonsSel[i].value + "&";
            parameters += "demon" + (i+1) + "archtype=" + demonArchtype[i].value + "&";

            if (demonCustomSkill1[i].value !== nullText)
                parameters += "demon" + (i+1) + "skill1=" + demonCustomSkill1[i].value + "&";
            if (demonCustomSkill2[i].value !== nullText)
                parameters += "demon" + (i+1) + "skill2=" + demonCustomSkill2[i].value + "&";
        }
    }

    window.location.href = baseUrl + "?" + window.btoa(parameters.substring(0, parameters.length - 1));
}

function JsonLoader1() {
    //Load Skills
    return $.getJSON("Data/Skills.json", function (skills) {
        skillData = skills;

        LoadSkillControls();
    });
}

function JsonLoader2() {
    //Load Demons
    return $.getJSON("Data/Demons.json", function (demons) {
        demonData = demons;

        LoadDemonControls();
    });
}

//Load Liberators
function JsonLoader3() {
    return $.getJSON("Data/Liberators.json",
        function(liberators) {
            liberatorData = liberators;

            var select = document.getElementById("liberators");

            for (var i = 0; i <= liberatorData.length - 1; i++) {
                var option = document.createElement("option");
                option.text = liberatorData[i].Name;
                option.value = liberatorData[i].Name;
                select.add(option, 0);
            }
            SortByABC(select);
        });
}

//Loads up a control with skills
function LoadSkillControls() {
    var select = document.querySelectorAll('[name="demonCustomSkill1"], [name="demonCustomSkill2"]'); 

    for (var x = 0; x < select.length; x++) {
        var option = document.createElement('option');
        option.text = nullText;
        option.value = nullText;
        select[x].add(option, 0);

        for (var i = 0; i < skillData.length; i++) {
            var option = document.createElement('option');
            option.text = skillData[i].Name;
            option.value = skillData[i].Name;
            option.title = skillData[i].Description;
            select[x].add(option, 0);
        }

        SortByABC(select[x]);
    }
}

//Loads up a control with our demon info
function LoadDemonControls() {
    var select = document.getElementsByName("demonSel");
    
    for (var x = 0; x < select.length; x++) {
        var option = document.createElement('option');
        option.text = nullText;
        option.value = nullText;
        select[x].add(option, 0);

        for (var i = 0; i < demonData.length; i++) {
            option = document.createElement('option');
            option.text = demonData[i].Name;
            option.value = demonData[i].Name;
            select[x].add(option, 0);
        }

        SortByABC(select[x]);
    }
}

//Sorts a Drop Down into ABC
function SortByABC(control) {
    var sel = $(control);
    var optsList = sel.find('option');
    optsList.sort(function (a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
    sel.html('').append(optsList);
}

//Reloads all our data on the form
function ReloadAll() {
    ChangeLiberator();
    SetupDemonControls();
    CalculateTotalSpeed();
    BuildResists();
}

//Sets up our demon controls
function SetupDemonControls() {
    for (var i = 0; i < demonsSel.length; i++) {

        var demon = GetDemon(demonsSel[i].value);

        if (demon != null) {
            demonImages[i].src = "Images/Demons/" + demon.Name + ".jpg";
            demonImages[i].style.visibility = 'visible';

            demonImgArchtype[i].src = "Images/Archtypes/" + $(demonArchtype[i]).val() + ".png";
            demonImgArchtype[i].style.visibility = 'visible';

            demonImgAI[i].src = "Images/AI/" + demon.Type + ".png";
            demonImgAI[i].style.visibility = 'visible';

            demonSkill1[i].innerHTML = demon["Skill 1"];
            demonSkill2[i].innerHTML = demon["Skill 2"];
            demonSkill3[i].innerHTML = demon["Skill 3"];
            demonAwakenSkill[i].innerHTML = GetSkillByArchtype(demon, $(demonArchtype[i]).val());;

            if (demonGachaLock[i].checked === false) {
                demonCustomSkill1[i].value = GetGachaSkillByArchtype(demon, $(demonArchtype[i]).val());
            }

            //Update Tooltips
            $(demonSkill1[i]).attr('data-original-title', GetSkillInfo(demon["Skill 1"]));
            $(demonSkill2[i]).attr('data-original-title', GetSkillInfo(demon["Skill 2"]));
            $(demonSkill3[i]).attr('data-original-title', GetSkillInfo(demon["Skill 3"]));
            $(demonAwakenSkill[i]).attr('data-original-title',
                GetSkillInfo(GetSkillByArchtype(demon, $(demonArchtype[i]).val())));

            //Remove focus from any control
            demonsSel[i].blur();
            demonArchtype[i].blur();
        } else {
            demonsSel[i].value = nullText;
            demonArchtype[i].value = "clear";
            demonSkill1[i].innerHTML = "";
            demonSkill2[i].innerHTML = "";
            demonSkill3[i].innerHTML = "";
            demonAwakenSkill[i].innerHTML = "";
            demonImages[i].style.visibility = 'hidden';
            demonImgArchtype[i].style.visibility = 'hidden';
            demonImgAI[i].style.visibility = 'hidden';
            demonCustomSkill1[i].value = nullText;
            demonCustomSkill2[i].value = nullText;
        }

        //Set the tooltips
        $(demonCustomSkill1[i]).attr('data-original-title', GetSkillInfo(demonCustomSkill1[i].value));
        $(demonCustomSkill2[i]).attr('data-original-title', GetSkillInfo(demonCustomSkill2[i].value));

        //Remove focus from any control
        demonCustomSkill1[i].blur();
        demonCustomSkill2[i].blur();
    }
}


//Locks our Custom Skill 1
function Lock(control) {
    var demonCustomSkill1 = document.getElementsByName("demonCustomSkill1");
    var demonGachaLock = document.getElementsByName("demonGachaLock");

    for (var i = 0; i < demonCustomSkill1.length; i++) {
        if (demonCustomSkill1[i] == control) {
            demonGachaLock[i].checked = true;
        }
    }
}

//Calculate team speed
function CalculateTotalSpeed() {

    var demonSpeed = [0, 0, 0, 0];

    for (var i = 0; i < demonsSel.length; i++) {
        demonSpeed[i] = GetDemonSpeed(demonsSel[i].value, i);
    }
    var count = Math.min(demonSpeed[0], 1) + Math.min(demonSpeed[1], 1) + Math.min(demonSpeed[2], 1) + Math.min(demonSpeed[3], 1);

    var totalSpeed = 0;
    if (count != 0)
        totalSpeed = Math.floor((demonSpeed[0] + demonSpeed[1] + demonSpeed[2] + demonSpeed[3]) * (100 / count));
    
    document.getElementById("totalspeed").innerHTML = "Total Speed: " + totalSpeed;
}

//Returns a demons speed value
function GetDemonSpeed(name, num) {
    var demon = GetDemon(name);
    var liberator = GetLiberator();
    var speed = 0;
    var extraAgi = 0;
    var extraPercent = 1;

    if (demon != null) {
        //Calculate Extra Agi
        if (demon["Skill 1"] === "Agility Amp I" ||
            demon["Skill 2"] === "Agility Amp I" ||
            demon["Skill 3"] === "Agility Amp I" ||
            GetSkillByArchtype(demon, $(demonArchtype[num]).val()) === "Agility Amp I" ||
            demonCustomSkill1[num].value === "Agility Amp I" ||
            demonCustomSkill2[num].value === "Agility Amp I")
            extraAgi += 5;

        if (demon["Skill 1"] === "Agility Amp II" ||
            demon["Skill 2"] === "Agility Amp II" ||
            demon["Skill 3"] === "Agility Amp II" ||
            GetSkillByArchtype(demon, $(demonArchtype[num]).val()) === "Agility Amp II" ||
            demonCustomSkill1[num].value === "Agility Amp II" ||
            demonCustomSkill2[num].value === "Agility Amp II")
            extraAgi += 10;

        if (demon["Skill 1"] === "Agility Amp III" ||
            demon["Skill 2"] === "Agility Amp III" ||
            demon["Skill 3"] === "Agility Amp III" ||
            GetSkillByArchtype(demon, $(demonArchtype[num]).val()) === "Agility Amp III" ||
            demonCustomSkill1[num].value === "Agility Amp III" ||
            demonCustomSkill2[num].value === "Agility Amp III")
            extraAgi += 15;

        //Add Ag from Liberator
        if (liberator != null && liberator !== nullText && liberator.Ag != "")
            extraAgi += liberator.Ag;

        //Calculate extra percent
        if (demon["Skill 1"] === "Speedster" ||
            demon["Skill 2"] === "Speedster" ||
            demon["Skill 3"] === "Speedster" ||
            GetSkillByArchtype(demon, $(demonArchtype[num]).val()) === "Speedster" ||
            demonCustomSkill1[num].value === "Speedster" ||
            demonCustomSkill2[num].value === "Speedster")
            extraPercent += .5;
        
        speed = Math.floor((demon["6★ Agility"] + extraAgi) * extraPercent);
    }

    return speed;
}

//Builds resists for each demon
function BuildResists() {

    for (var i = 0; i < demonsSel.length; i++) {
        var demon = GetDemon(demonsSel[i].value);

        if (demon == null) {
            demonPhys[i].innerHTML = "-";
            demonFire[i].innerHTML = "-";
            demonIce[i].innerHTML = "-";
            demonElec[i].innerHTML = "-";
            demonForce[i].innerHTML = "-";
            demonLight[i].innerHTML = "-";
            demonDark[i].innerHTML = "-";
        } else {
            //Load base Resists Data in
            var physResist = SwapResistText(demon.Phys);
            var fireResist = SwapResistText(demon.Fire);
            var iceResist = SwapResistText(demon.Ice);
            var elecResist= SwapResistText(demon.Elec);
            var forceResist= SwapResistText(demon.Force);
            var lightResist= SwapResistText(demon.Light);
            var darkResist= SwapResistText(demon.Dark);

            //Now lets check if we have any resist skills that override the base
            var skills = [
                demon["Skill 3"], GetSkillByArchtype(demon, $(demonArchtype[i]).val()), demonCustomSkill1[i].value,
                demonCustomSkill2[i].value
            ];

            for (var x = 0; x < skills.length; x++) {
                if (skills[x].indexOf("Phys") >= 0)
                    if (skills[x].indexOf("Drain") >= 0)
                        physResist = "Dr";
                    else if (skills[x].indexOf("Repel") >= 0)
                        physResist = "Rp";
                    else if (skills[x].indexOf("Null") >= 0)
                        physResist = "Nu";
                    else if (skills[x].indexOf("Resist") >= 0)
                        physResist = "Rs";
                if (skills[x].indexOf("Fire") >= 0)
                    if (skills[x].indexOf("Drain") >= 0)
                        fireResist = "Dr";
                    else if (skills[x].indexOf("Repel") >= 0)
                        fireResist = "Rp";
                    else if (skills[x].indexOf("Null") >= 0)
                        fireResist = "Nu";
                    else if (skills[x].indexOf("Resist") >= 0)
                        fireResist = "Rs";
                if (skills[x].indexOf("Ice") >= 0)
                    if (skills[x].indexOf("Drain") >= 0)
                        iceResist = "Dr";
                    else if (skills[x].indexOf("Repel") >= 0)
                        iceResist = "Rp";
                    else if (skills[x].indexOf("Null") >= 0)
                        iceResist = "Nu";
                    else if (skills[x].indexOf("Resist") >= 0)
                        iceResist = "Rs";
                if (skills[x].indexOf("Elec") >= 0)
                    if (skills[x].indexOf("Drain") >= 0)
                        elecResist = "Dr";
                    else if (skills[x].indexOf("Repel") >= 0)
                        elecResist = "Rp";
                    else if (skills[x].includes("Null") >= 0)
                        elecResist = "Nu";
                    else if (skills[x].includes("Resist") >= 0)
                        elecResist = "Rs";
                if (skills[x].indexOf("Force") >= 0)
                    if (skills[x].indexOf("Drain") >= 0)
                        forceResist = "Dr";
                    else if (skills[x].indexOf("Repel") >= 0)
                        forceResist = "Rp";
                    else if (skills[x].indexOf("Null") >= 0)
                        forceResist = "Nu";
                    else if (skills[x].indexOf("Resist") >= 0)
                        forceResist = "Rs";
                if (skills[x].indexOf("Light") >= 0)
                    if (skills[x].indexOf("Drain") >= 0)
                        lightResist = "Dr";
                    else if (skills[x].indexOf("Repel") >= 0)
                        lightResist = "Rp";
                    else if (skills[x].indexOf("Null") >= 0)
                        lightResist = "Nu";
                    else if (skills[x].indexOf("Resist") >= 0)
                        lightResist = "Rs";
                if (skills[x].indexOf("Dark") >= 0)
                    if (skills[x].indexOf("Drain") >= 0)
                        darkResist = "Dr";
                    else if (skills[x].indexOf("Repel") >= 0)
                        darkResist = "Rp";
                    else if (skills[x].indexOf("Null") >= 0)
                        darkResist = "Nu";
                    else if (skills[x].indexOf("Resist") >= 0)
                        darkResist = "Rs";
            }

            //Finally set our resists
            demonPhys[i].innerHTML = physResist;
            demonFire[i].innerHTML = fireResist;
            demonIce[i].innerHTML = iceResist;
            demonElec[i].innerHTML = elecResist;
            demonForce[i].innerHTML = forceResist;
            demonLight[i].innerHTML = lightResist;
            demonDark[i].innerHTML = darkResist;
        }
    }
}

//Makes text look nicer for resists
function SwapResistText(text) {
    var result = text;

    if (result == "")
        result = "-";

    return result.charAt(0).toUpperCase() + result.slice(1);
}

//Gets demon by name
function GetDemon(name) {
    var foundDemon = null;
    demonData.forEach(function (demon) {
        if (demon.Name == name) {
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

//Returns skill descriptions by skill name
function GetSkillInfo(skillName) {
    for (var i = 0; i < skillData.length; i++) {
        if (skillName == nullText)
            return "";
        else if (skillData[i].Name == skillName)
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
    for (var i = 0; i < demonsSel.length; i++) {
        demonsSel[i].value = nullText;
        demonCustomSkill1[i].value = nullText;
        demonCustomSkill2[i].value = nullText;
        demonArchtype[i].value = "Clear";
        demonGachaLock[i].checked = false;
    }

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

    $('#liberators').blur();
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