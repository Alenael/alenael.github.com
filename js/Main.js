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
var demonImages;
var demonImgArchtype;
var demonImgAI;
var demonImgStar;
var demonRace;
var demonGrade;
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
var dropDownMenus;

function LoadData() {
    
    $(document).ready(function () {
        $("body").tooltip({
            selector: '[data-toggle="tooltip"]'
        });
    });

    //Load our json
    $.when(JsonLoader1(), JsonLoader2(), JsonLoader3()).done(function(a1, a2) {
        
        $('div#demoncontent').removeClass("hidden");
        $('div#loading').addClass("hidden");

        Clone($('#demon'), 2);
        Clone($('#demon'), 3);
        Clone($('#demon'), 4);
        
        //Grab reference to all our controls
        demonsSel = document.getElementsByName("demonSel");
        demonArchtype = document.getElementsByName("demonArchtype");
        demonCustomSkill1 = document.getElementsByName("demonCustomSkill1");
        demonCustomSkill2 = document.getElementsByName("demonCustomSkill2");
        demonImages = document.getElementsByName("demonImage");
        demonImgArchtype = document.getElementsByName("demonImgArchtype");
        demonImgAI = document.getElementsByName("demonImgAI");
        demonImgStar = document.getElementsByName("demonImgStar");
        demonRace = document.getElementsByName("demonRace");
        demonGrade = document.getElementsByName("demonGrade");
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
        dropDownMenus = document.getElementsByClassName("dropdown-menu");

        //Setup some custom CSS for our select controls
        for (var i = 0; i <= demonsSel.length * (demonsSel.length * 2) - 1; i = i + 8) {
            dropDownMenus[i + 0].className += " demon-dropdown";
            dropDownMenus[i + 1].className += " demon-dropdown";
            dropDownMenus[i + 2].className += " archtype-dropdown";
            dropDownMenus[i + 3].className += " archtype-dropdown";
            dropDownMenus[i + 4].className += " skill-dropdown";
            dropDownMenus[i + 5].className += " skill-dropdown";
            dropDownMenus[i + 6].className += " skill-dropdown";
            dropDownMenus[i + 7].className += " skill-dropdown";
        }

        for (var l = 0; l < demonsSel.length; l++) {
            var el = $(demonCustomSkill1[l]).next().find("div")[0];
            el.setAttribute('data-toggle', "tooltip");            
            var el = $(demonCustomSkill2[l]).next().find("div")[0];
            el.setAttribute('data-toggle', "tooltip");            
        }

        ReadURL();
        TurnOrder();
    });
}

//Clones our Demon
function Clone(object, num) {
    var newClone = object.clone().attr("id", "demon" + num).addClass("order-" + num).appendTo('#demoncontent');
    var select = $(newClone).find('select').clone(true, true);
    var boostrap = $(newClone).find('.bootstrap-select');

    for (var i = 0; i < select.length; i++) {
        boostrap[i].replaceWith(select[i]);
        $(select[i]).selectpicker();    
    }
}

//Reads the URl upon load to see if we have a special build being loaded
function ReadURL() {
    if (window.location.href.indexOf("?") >= 0) {
        var result = window.atob(window.location.href.split('?')[1]);

        var url = new URL(decodeURI(baseUrl + "?" + result.replace("#", "")));

        var liberator = url.searchParams.get("liberator");

         if (liberator != null)
             document.getElementById("liberators").value = liberator;

        var demons = [
            url.searchParams.get("demon1"),
            url.searchParams.get("demon2"),
            url.searchParams.get("demon3"),
            url.searchParams.get("demon4")
        ];

        var archtypes = [
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
            $(demonsSel[i]).selectpicker('val', demons[i] === null ? nullText : demons[i]);
            $(demonArchtype[i]).selectpicker('val', archtypes[i] === null ? "clear" : archtypes[i]);
            $(demonCustomSkill1[i]).selectpicker('val', customSkills1[i]);
            $(demonCustomSkill2[i]).selectpicker('val', customSkills2[i]);
        }
    }
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
    var select = document.getElementsByName('demonCustomSkill1');

    for (var x = 0; x < select.length; x++) {
        var option = document.createElement('option');
        option.text = nullText;
        option.value = nullText;
        select[x].add(option, 0);

        for (var i = 0; i < skillData.length; i++) {
            var option = document.createElement('option');
            option.text = skillData[i].Name;
            option.value = skillData[i].Name;
            option.setAttribute("data-tokens", skillData[i].Element + " " + skillData[i].Target);
            option.setAttribute("data-subtext",
                skillData[i].Element.charAt(0).toUpperCase() + skillData[i].Element.slice(1));
            select[x].add(option, 0);
        }

        SortByABC(select[x]);
        $(select[x]).selectpicker("refresh");
    }
    
    $('#demonCustomSkill1').clone().attr("name", "demonCustomSkill2").appendTo($('#customSkillGroup')).selectpicker();
    document.getElementsByName("demonCustomSkill2")[0].addEventListener("onchange",
        function() {
            Lock(this);
            ReloadAll("All");
        });
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
            option.setAttribute("data-tokens", demonData[i].Type + " " + demonData[i].Race);
            option.setAttribute("data-subtext", demonData[i].Race);
            select[x].add(option, 0);
        }

        SortByABC(select[x]);
        
        $(select[x]).selectpicker("refresh");
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
function ReloadAll(control) {
    ChangeLiberator();
    SetupDemonControls(control);
    UpdateTooltips();
    CalculateTotalSpeed();
    BuildResists();
    FilterDemons();
    FilterSkills();
}

//Sets up our demon controls
function SetupDemonControls(control) {
    for (var i = 0; i < demonsSel.length; i++) {

        if (control !== "All" && control !== demonsSel[i])
            continue;

        var demon = GetDemon(demonsSel[i].value);

        if (demon != null) {

            demonImages[i].src = "Images/Demons/" + demon.Name + ".jpg";
            demonImages[i].style.visibility = 'visible';

            demonImgArchtype[i].src = "Images/Archtypes/" + $(demonArchtype[i]).val() + ".png";
            demonImgArchtype[i].style.visibility = 'visible';

            demonImgAI[i].src = "Images/AI/" + demon.Type + ".png";
            demonImgAI[i].style.visibility = 'visible';

            demonImgStar[i].src = "Images/Stars/" + demon.Rarity + ".png";
            demonImgStar[i].style.visibility = 'visible';

            demonRace[i].innerHTML = "Race: " + demon.Race;
            demonRace[i].style.visibility = 'visible';

            demonGrade[i].innerHTML = "Grade: " + demon.Grade;
            demonGrade[i].style.visibility = 'visible';

            demonSkill1[i].innerHTML = demon["Skill 1"];
            demonSkill2[i].innerHTML = demon["Skill 2"];
            demonSkill3[i].innerHTML = demon["Skill 3"];
            demonAwakenSkill[i].innerHTML = GetSkillByArchtype(demon, $(demonArchtype[i]).val());;

            var gachaSkill = GetGachaSkillByArchtype(demon, $(demonArchtype[i]).val());
            if (!lock[i] && (gachaSkill !== nullText || $(demonArchtype[i]).val() === "clear")) {
                $(demonCustomSkill1[i]).selectpicker('val', gachaSkill);
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
            demonImgStar[i].style.visibility = 'hidden';
            demonGrade[i].style.visibility = 'hidden';
            demonRace[i].style.visibility = 'hidden';
            demonCustomSkill1[i].value = nullText;
            demonCustomSkill2[i].value = nullText;
        }
    }
}

var lock = [false, false, false, false, false];

//Keeps track if we are locked or not
function Lock(control) {
    for (var i = 0; i < demonsSel.length; i++) {
        lock[i] = true;

        if (demonsSel[i] === control || demonArchtype[i] === control)
            lock[i] = false;
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
    if (count !== 0)
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
                physResist = FixResist(skills[x], physResist, "Phys");
                fireResist = FixResist(skills[x], fireResist, "Fire");
                iceResist = FixResist(skills[x], iceResist, "Ice");
                elecResist = FixResist(skills[x], elecResist, "Elec");
                forceResist = FixResist(skills[x], forceResist, "Force");
                lightResist = FixResist(skills[x], lightResist, "Light");
                darkResist = FixResist(skills[x], darkResist, "Dark");
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

function FixResist(skillName, resistFinal, actualResist) {
    if (skillName.indexOf(actualResist) >= 0)
        if (skillName.indexOf("Drain") >= 0)
            resistFinal = "Ab";
        else if (skillName.indexOf("Repel") >= 0 && resistFinal !== "Ab")
            resistFinal = "Rp";
        else if (skillName.indexOf("Null") >= 0 && resistFinal !== "Rp" && resistFinal !== "Ab")
            resistFinal = "Nu";
        else if (skillName.indexOf("Resist") >= 0 && resistFinal !== "Rp" && resistFinal !== "Ab" && resistFinal !== "Nu")
            resistFinal = "Rs";

    return resistFinal;
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
        if (demon.Name === name) {
            foundDemon = demon;
        }
    });

    return foundDemon;
}

//Get Liberator by name
function GetLiberator() {
    var foundLiberator = null;
    liberatorData.forEach(function (liberator) {
        if (liberator.Name === document.getElementById("liberators").value) {
            foundLiberator = liberator;
        }
    });

    return foundLiberator;
}

//Returns skill descriptions by skill name
function GetSkillInfo(skillName) {
    for (var i = 0; i < skillData.length; i++) {
        if (skillName === nullText)
            return "";
        else if (skillData[i].Name === skillName)
            return skillData[i].Description;
    }

    return "";
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
    if (text == null || text === "")
        return nullText;
    else
        return text;
}


function Reset() {
    window.location.href = baseUrl;
}

function ChangeLiberator() {
    var liberator = $('#liberators').val();

    if (liberator === nullText)
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

//Swaps demons by turn order
function TurnOrder() {

    var cols = document.getElementsByName("demon");
    var demons = [];

    for (var i = 0; i < demonsSel.length; i++) {
        demons.push(GetDemon(demonsSel[i].value));
    }

    //Sorts our demons by agi only (Lead brands will be added later for this)
    var sorter = function() {
        return function (a, b) {
            if (a == null) {
                return 1;
            } else if (b == null) {
                return -1;
            } else if (a === b) {
                return 0;
            }
            if (a === b) {
                return 0;
            } 
            else {
                return a["6★ Agility"] < b["6★ Agility"] ? 1 : -1;
            }
        }
    };

    var newTurnOrder = demons.slice().sort(sorter());

    //Move everything to end
    for (var x = 0; x < newTurnOrder.length; x++) {
        cols[x].classList.remove("order-1");
        cols[x].classList.remove("order-2");
        cols[x].classList.remove("order-3");
        cols[x].classList.remove("order-4");
        cols[x].classList.add("order-4");
    }

    //Now fix non null items to be in correct spot
    if (newTurnOrder.some(function(i) { return i !== null; })) {
        for (var j = 0; j < newTurnOrder.length; j++) {
            for (var k = 0; k < newTurnOrder.length; k++) {
                if (demons[k] !== null && demons[k] === newTurnOrder[j]) {
                    cols[k].classList.remove("order-1");
                    cols[k].classList.remove("order-2");
                    cols[k].classList.remove("order-3");
                    cols[k].classList.remove("order-4");

                    cols[k].classList.add("order-" + j);
                    break;
                }
            }
        }
    }

    //Deslect our button
    $('speedButton').blur();
}

//Removes demons already selected from the list
function FilterDemons() {

    var disabledDemons = [];

    for (var d = 0; d < demonsSel.length; d++) {
        disabledDemons.push(demonsSel[d].value);
    }

    if (disabledDemons.some(function(i) { return i !== null; })) {
        for (var x = 0; x < demonsSel.length; x++) {
            if ($(demonsSel).val() != nullText) {
                var object = $(demonsSel[x]).find("option");

                for (var j = 0; j < object.length; j++) {
                    if (object[j].value === nullText)
                        $(object[j]).prop('disabled', false);
                    else if (disabledDemons.indexOf(object[j].value) >= 0)
                        $(object[j]).prop('disabled', true);
                    else
                        $(object[j]).prop('disabled', false);
                }
            }
            $(demonsSel[x]).selectpicker('render');
        }
    }
}

//Removes demons already selected from the list
function FilterSkills() {


    for (var d = 0; d < demonsSel.length; d++) {

        var disabledSkills = [];

        var demon = GetDemon(demonsSel[d].value);

        var object = $(demonCustomSkill1[d]).find("option");
        var object2 = $(demonCustomSkill2[d]).find("option");

        if (demon != null) {

            disabledSkills.push(demon["Skill 1"]);
            disabledSkills.push(demon["Skill 2"]);
            disabledSkills.push(demon["Skill 3"]);
            disabledSkills.push(demon["Skill 1"]);
            disabledSkills.push(GetSkillByArchtype(demon, $(demonArchtype[d]).val()));
            disabledSkills.push(demonCustomSkill1[d].value);
            disabledSkills.push(demonCustomSkill2[d].value);

            for (var i = 0; i < object.length; i++) {
                if (disabledSkills[i] !== nullText) {
                    if (i === 0) {
                        $(object[i]).prop('disabled', false);
                        $(object2[i]).prop('disabled', false);
                    } else if (disabledSkills.indexOf(object[i].value) >= 0) {
                        $(object[i]).prop('disabled', true);
                        $(object2[i]).prop('disabled', true);
                    } else {
                        $(object[i]).prop('disabled', false);
                        $(object2[i]).prop('disabled', false);
                    }
                }
            }
        } else {
            for (var i = 0; i < object.length; i++) {
                $(object[i]).prop('disabled', false);
                $(object2[i]).prop('disabled', false);
            }
        }

        $(demonCustomSkill1[d]).selectpicker('render');
        $(demonCustomSkill2[d]).selectpicker('render');
    }
}

//Update tooltips.. done separtly to avoid issues
function UpdateTooltips() {
    for (var i = 0; i < demonsSel.length; i++) {
        //Remove focus from any control
        demonCustomSkill1[i].blur();
        demonCustomSkill2[i].blur();

        $(demonCustomSkill1[i]).next().find("div")[0].setAttribute('data-original-title',
            GetSkillInfo($(demonCustomSkill1[i]).val()));
        $(demonCustomSkill2[i]).next().find("div")[0].setAttribute('data-original-title',
            GetSkillInfo($(demonCustomSkill2[i]).val()));
    }
}
