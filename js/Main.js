var majorVer = 1; 
var minorVer = .43;

var demonData;
var skillData;
var liberatorData;
var demonInfoData;
var nullText = "-----------";
var baseUrl = window.location.origin;

var maxTotalMitama = 20;

var max1Mitama = 100;
var max2Mitama = 100;
var max3Mitama = 100;
var max4Mitama = 50;
var max5Mitama = 50;

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
var demonBrands;
var demonHP;
var demonVit;
var demonStr;
var demonAgi;
var demonMag;
var demonLu;
var demonPAtk;
var demonMAtk;
var demonPDef;
var demonMDef;
var demonPAtk;
var demonPDef;
var demonMAtk;
var demonMDef;
var demonPhysEvasion;
var demonPhysAccuracy;
var demonAilmentInfiction;
var demonAilmentResistance;
var demonCritical;
var demonHeal;
var demonSP;
var aether1;
var aether2;
var aether3;
var aether4;
var aether1Img;
var aether2Img;
var aether3Img;
var aether4Img;
var demonEdit1;
var demonEdit2;
var demonEdit3;
var demonEdit4;
var demonEdit5;
var demonEdit6;
var demonEditNumber;
var demonEditPercent;
var demonMitamaStr;
var demonMitamaMag;
var demonMitamaVit;
var demonMitamaAgi;
var demonMitamaLuck;
var demonMitamaTotal;
var enableP3Check;
var enableSkillLevelsCheck;

var blockUpdating = true;

function LoadData() {

    document.getElementById("versionLbl").innerHTML = "Version: " + parseFloat(majorVer + minorVer).toFixed(2);

    $(document).ready(function () {
        $("body").tooltip({
            selector: '[data-toggle="tooltip"]'
        }); 
    });
    
    //Load our json
    $.when(JsonLoader1(), JsonLoader2(), JsonLoader3(), JsonLoader4()).done(function (){

        $('.selectpicker').selectpicker();
        Clone($('#demon'), 2);
        Clone($('#demon'), 3);
        Clone($('#demon'), 4);
        $('.selectpicker').selectpicker();

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
        demonBrands = document.getElementsByName("demonBrandPicker");
        demonHP = document.getElementsByName("hpBtn");
        demonVit = document.getElementsByName("vitBtn");
        demonStr = document.getElementsByName("strBtn");
        demonAgi = document.getElementsByName("agiBtn");
        demonMag = document.getElementsByName("magBtn");
        demonLu = document.getElementsByName("luBtn");
        demonPAtk = document.getElementsByName("patkBtn");
        demonMAtk = document.getElementsByName("pdefBtn");
        demonPDef = document.getElementsByName("maatkBtn");
        demonMDef = document.getElementsByName("madefBtn");
        demonPhysEvasion = document.getElementsByName("physEvasionBtn");
        demonPhysAccuracy = document.getElementsByName("physAccuracyBtn");
        demonAilmentInfiction = document.getElementsByName("ailmentInflictionBtn");
        demonAilmentResistance = document.getElementsByName("ailmentResistanceBtn");
        demonCritical = document.getElementsByName("criticalBtn");
        demonHeal = document.getElementsByName("healBtn");
        demonSP = document.getElementsByName("demonSP");
        aether1 = document.getElementsByName("aether1");
        aether2 = document.getElementsByName("aether2");
        aether3 = document.getElementsByName("aether3");
        aether4 = document.getElementsByName("aether4");
        aether1Img = document.getElementsByName("aether1Img");
        aether2Img = document.getElementsByName("aether2Img");
        aether3Img = document.getElementsByName("aether3Img");
        aether4Img = document.getElementsByName("aether4Img");
        aether1Img = document.getElementsByName("aether1Img");
        demonEdit1 = document.getElementsByName("demonEdit1");
        demonEdit2 = document.getElementsByName("demonEdit2");
        demonEdit3 = document.getElementsByName("demonEdit3");
        demonEdit4 = document.getElementsByName("demonEdit4");
        demonEdit5 = document.getElementsByName("demonEdit5");
        demonEdit6 = document.getElementsByName("demonEdit6");
        demonEditNumber = document.getElementsByName("demonEditNumber");
        demonEditPercent = document.getElementsByName("demonEditPercent");
        demonMitamaStr = document.getElementsByName("demonMitamaStr");
        demonMitamaMag = document.getElementsByName("demonMitamaMag");
        demonMitamaVit = document.getElementsByName("demonMitamaVit");
        demonMitamaAgi = document.getElementsByName("demonMitamaAgi");
        demonMitamaLuck = document.getElementsByName("demonMitamaLuck");
        demonMitamaTotal = document.getElementsByName("demonMitamaTotal");
        enableP3Check = document.getElementsByName("enableP3Check");        
        enableSkillLevelsCheck = document.getElementsByName("enableSkillLevelsCheck");

        //Setup some custom CSS for our select controls
        for (var i = 0; i <= dropDownMenus.length - 1; i = i + dropDownMenus.length/demonsSel.length) {
            dropDownMenus[i + 0].className += " demon-dropdown";
            dropDownMenus[i + 1].className += " demon-dropdown";
            dropDownMenus[i + 2].className += " archtype-dropdown";
            dropDownMenus[i + 3].className += " archtype-dropdown";
            dropDownMenus[i + 4].className += " skill-dropdown";
            dropDownMenus[i + 5].className += " skill-dropdown";
            dropDownMenus[i + 6].className += " skill-dropdown";
            dropDownMenus[i + 7].className += " skill-dropdown";
            dropDownMenus[i + 8].className += " skill-dropdown";
            dropDownMenus[i + 9].className += " skill-dropdown";
            dropDownMenus[i + 10].className += " archtype-dropdown";
            dropDownMenus[i + 11].className += " archtype-dropdown";
            dropDownMenus[i + 12].className += " archtype-dropdown";
            dropDownMenus[i + 13].className += " archtype-dropdown";
            dropDownMenus[i + 14].className += " archtype-dropdown";
            dropDownMenus[i + 15].className += " archtype-dropdown";
            dropDownMenus[i + 16].className += " archtype-dropdown";
            dropDownMenus[i + 17].className += " archtype-dropdown";
            dropDownMenus[i + 18].className += " archtype-dropdown";
            dropDownMenus[i + 19].className += " archtype-dropdown";
            dropDownMenus[i + 20].className += " archtype-dropdown";
            dropDownMenus[i + 21].className += " archtype-dropdown";
        }

        //Setup tooltips for our custom skill combos
        for (var l = 0; l < demonsSel.length; l++) {
            var el = $(demonCustomSkill1[l]).next().find("div")[0];
            el.setAttribute('data-toggle', "tooltip");
            el.setAttribute('data-html', "true");            
            var el = $(demonCustomSkill2[l]).next().find("div")[0];
            el.setAttribute('data-toggle', "tooltip");
            el.setAttribute('data-html', "true");
        }

        //Set correct default settings 
        for (var m = 0; m < demonEdit1.length; m++) {
            $(demonEdit1).selectpicker('val', "hp");
            $(demonEdit2).selectpicker('val', "physatk");
            $(demonEdit3).selectpicker('val', "magatk");
            $(demonEdit4).selectpicker('val', "magdef");
            $(demonEdit5).selectpicker('val', "physevasion");
            $(demonEdit6).selectpicker('val', "speed");
        }

        ReadURL();
        
        //Show help if first time on site
        if (!localStorage.noFirstVisit) {
            $('#helpModal').modal('show');
            localStorage.noFirstVisit = true;
        } else if (localStorage.lastUpdate < parseFloat(majorVer + minorVer).toFixed(2)) { //Show recent change if version changed
            $('#newChangesModal').modal('show');
        }

        localStorage.lastUpdate = parseFloat(majorVer + minorVer).toFixed(2);
    });
}

//Parse our URL Data and setup things in it
function ParseURL(data) {
    if (data != null) {
        var url = new URL(decodeURI(baseUrl + "?" + data.replace("#", "")));

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

        var brands = [
            url.searchParams.get("demon1brands"),
            url.searchParams.get("demon2brands"),
            url.searchParams.get("demon3brands"),
            url.searchParams.get("demon4brands")
        ];

        var edits = [
            [
                url.searchParams.get("demon1Edit1"),
                url.searchParams.get("demon1Edit2"),
                url.searchParams.get("demon1Edit3"),
                url.searchParams.get("demon1Edit4"),
                url.searchParams.get("demon1Edit5"),
                url.searchParams.get("demon1Edit6")
            ],
            [
                url.searchParams.get("demon2Edit1"),
                url.searchParams.get("demon2Edit2"),
                url.searchParams.get("demon2Edit3"),
                url.searchParams.get("demon2Edit4"),
                url.searchParams.get("demon2Edit5"),
                url.searchParams.get("demon2Edit6")
            ],
            [
                url.searchParams.get("demon3Edit1"),
                url.searchParams.get("demon3Edit2"),
                url.searchParams.get("demon3Edit3"),
                url.searchParams.get("demon3Edit4"),
                url.searchParams.get("demon3Edit5"),
                url.searchParams.get("demon3Edit6")
            ],
            [
                url.searchParams.get("demon4Edit1"),
                url.searchParams.get("demon4Edit2"),
                url.searchParams.get("demon4Edit3"),
                url.searchParams.get("demon4Edit4"),
                url.searchParams.get("demon4Edit5"),
                url.searchParams.get("demon4Edit6")
            ]
        ];

        var mitama = [
            [
                url.searchParams.get("demon1Mitama1"),
                url.searchParams.get("demon1Mitama2"),
                url.searchParams.get("demon1Mitama3"),
                url.searchParams.get("demon1Mitama4"),
                url.searchParams.get("demon1Mitama5")
            ],
            [
                url.searchParams.get("demon2Mitama1"),
                url.searchParams.get("demon2Mitama2"),
                url.searchParams.get("demon2Mitama3"),
                url.searchParams.get("demon2Mitama4"),
                url.searchParams.get("demon2Mitama5")
            ],
            [
                url.searchParams.get("demon3Mitama1"),
                url.searchParams.get("demon3Mitama2"),
                url.searchParams.get("demon3Mitama3"),
                url.searchParams.get("demon3Mitama4"),
                url.searchParams.get("demon3Mitama5")
            ],
            [
                url.searchParams.get("demon4Mitama1"),
                url.searchParams.get("demon4Mitama2"),
                url.searchParams.get("demon4Mitama3"),
                url.searchParams.get("demon4Mitama4"),
                url.searchParams.get("demon4Mitama5")
            ]
        ];

        for (var i = 0; i < demons.length; i++) {
            $(demonsSel[i]).selectpicker('val', demons[i] === null ? nullText : demons[i].replace(" 4", "").replace(" 5", "☆").replace(" 2", " A"));
            $(demonArchtype[i]).selectpicker('val', archtypes[i] === null ? "clear" : archtypes[i]);
            $(demonCustomSkill1[i]).selectpicker('val', customSkills1[i]);
            $(demonCustomSkill2[i]).selectpicker('val', customSkills2[i]);

            if (edits[i][0] != null) {
                var values = edits[i][0].split(";");
                $(demonEdit1[i]).selectpicker('val', values[0]);
                demonEditNumber[i * 6].value = values[1];
                demonEditPercent[i * 6].value = values[2];
                $(demonEdit1[i]).selectpicker('Refresh');
            }
            if (edits[i][1] != null) {
                var values = edits[i][1].split(";");
                $(demonEdit2[i]).selectpicker('val', values[0]);
                demonEditNumber[i * 6 + 1].value = values[1];
                demonEditPercent[i * 6 + 1].value = values[2];
                $(demonEdit2[i]).selectpicker('Refresh');
            }
            if (edits[i][2] != null) {
                var values = edits[i][2].split(";");
                $(demonEdit3[i]).selectpicker('val', values[0]);
                demonEditNumber[i * 6 + 2].value = values[1];
                demonEditPercent[i * 6 + 2].value = values[2];
                $(demonEdit3[i]).selectpicker('Refresh');
            }
            if (edits[i][3] != null) {
                var values = edits[i][3].split(";");
                $(demonEdit4[i]).selectpicker('val', values[0]);
                demonEditNumber[i * 6 + 3].value = values[1];
                demonEditPercent[i * 6 + 3].value = values[2];
                $(demonEdit4[i]).selectpicker('Refresh');
            }
            if (edits[i][4] != null) {
                var values = edits[i][4].split(";");
                $(demonEdit5[i]).selectpicker('val', values[0]);
                demonEditNumber[i * 6 + 4].value = values[1];
                demonEditPercent[i * 6 + 4].value = values[2];
                $(demonEdit5[i]).selectpicker('Refresh');
            }
            if (edits[i][5] != null) {
                var values = edits[i][5].split(";");
                $(demonEdit6[i]).selectpicker('val', values[0]);
                demonEditNumber[i * 6 + 5].value = values[1];
                demonEditPercent[i * 6 + 5].value = values[2];
                $(demonEdit6[i]).selectpicker('Refresh');
            }

            if (brands[i] != null) {
                var values = brands[i].split(",");
                $(demonBrands[i]).val(values);
                $(demonBrands[i]).selectpicker('refresh');
            }

            if (parseInt(mitama[i][0])) {
                $(demonMitamaStr[i]).val(parseInt(mitama[i][0]));
            }

            if (mitama[i][1] != null) {
                $(demonMitamaMag[i]).val(mitama[i][1]);
            }

            if (mitama[i][2] != null) {
                $(demonMitamaVit[i]).val(mitama[i][2]);
            }

            if (mitama[i][3] != null) {
                $(demonMitamaAgi[i]).val(mitama[i][3]);
            }

            if (mitama[i][4] != null) {
                $(demonMitamaLuck[i]).val(mitama[i][4]);
            }
        }

        $('div#demoncontent').removeClass("hidden");
        $('div#loading').addClass("hidden");

        blockUpdating = false;
        ReloadAll("All");

        TurnOrder();
    }
}

//Clones our Demon
function Clone(object, num) {
    //Create a clone
    var newClone = object.clone().attr("id", "demon" + num).addClass("order-" + num).appendTo('#demoncontent');
    var select = $(newClone).find('select').clone(true, true);
    var boostrap = $(newClone).find('.bootstrap-select');

    //Replace Bootstrap with the select statment as we initiate it later on
    for (var i = 0; i < select.length; i++) {
        boostrap[i].replaceWith(select[i]);
    }

    //Grab our Tabs and the Buttons for them
    var nav = $(newClone).find('a');
    var tabs = $(newClone).find('.tab-pane');

    //Ensure each tab has a unique name
    for (var j = 0; j < nav.length; j++) {
        var name = $(nav[j]).attr("href").replace("#", "").replace("1", "");
        $(nav[j]).attr("href", "#" + name + num);
        $(tabs[j]).attr("id", name + num);
    }
}

//Reads the URl upon load to see if we have a special build being loaded
function ReadURL() {
    if (window.location.href.indexOf("?") >= 0) {
        var data = window.location.href.split('?')[1]
        if (data.match("([a-z0-9]{6,})-([a-z0-9]{6,})"))
            ReadLinkData(data).then(function (d) {
                ParseURL(window.atob(d["base64"]));
            });
        else {
            ParseURL(window.atob(data));
        }
    }
    else {
        $('div#demoncontent').removeClass("hidden");
        $('div#loading').addClass("hidden");

        blockUpdating = false;
        ReloadAll("All");
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
            //Write Demon/Archetype
            parameters += "demon" + (i + 1) + "=" + demonsSel[i].value.replace("☆", " 5") + "&";
            parameters += "demon" + (i + 1) + "archtype=" + demonArchtype[i].value + "&";

            //Write Skills
            if (demonCustomSkill1[i].value !== nullText)
                parameters += "demon" + (i + 1) + "skill1=" + demonCustomSkill1[i].value + "&";
            if (demonCustomSkill2[i].value !== nullText)
                parameters += "demon" + (i + 1) + "skill2=" + demonCustomSkill2[i].value + "&";

            //Write Edits
            if (demonEdit1[i].value !== "hp" || demonEditPercent[i * 6].value !== "" || demonEditNumber[i*6].value !== "")
                parameters += "demon" + (i + 1) + "Edit1=" +
                    demonEdit1[i].value + ";" +
                    demonEditNumber[i * 6].value + ";" +
                    demonEditPercent[i * 6].value + "&";

            if (demonEdit2[i].value !== "physatk" || demonEditPercent[i *6+1].value !== "" || demonEditNumber[i*6+1].value !== "")
                parameters += "demon" + (i + 1) + "Edit2=" +
                    demonEdit2[i].value + ";" +
                    demonEditNumber[i * 6 +1].value + ";" +
                    demonEditPercent[i * 6 +1].value + "&";

            if (demonEdit3[i].value !== "magatk" || demonEditPercent[i * 6 +2].value !== "" || demonEditNumber[i * 6 +2].value !== "")
                parameters += "demon" + (i + 1) + "Edit3=" +
                    demonEdit3[i].value + ";" +
                    demonEditNumber[i * 6 +2].value + ";" +
                    demonEditPercent[i * 6 +2].value + "&";

            if (demonEdit4[i].value !== "magdef" || demonEditPercent[i * 6 +3].value !== "" || demonEditNumber[i * 6 +3].value !== "")
                parameters += "demon" + (i + 1) + "Edit4=" +
                    demonEdit4[i].value + ";" +
                    demonEditNumber[i * 6 +3].value + ";" +
                    demonEditPercent[i * 6 +3].value + "&";

            if (demonEdit5[i].value !== "physevasion" || demonEditPercent[i * 6 +4].value !== "" || demonEditNumber[i * 6 +4].value !== "")
                parameters += "demon" + (i + 1) + "Edit5=" +
                    demonEdit5[i].value + ";" +
                    demonEditNumber[i * 6 +4].value + ";" +
                    demonEditPercent[i * 6 +4].value + "&";

            if (demonEdit6[i].value !== "speed" || demonEditPercent[i * 6 +5].value !== "" || demonEditNumber[i * 6 +5].value !== "")
                parameters += "demon" + (i + 1) + "Edit6=" +
                    demonEdit6[i].value + ";" +
                    demonEditNumber[i * 6 +5].value + ";" +
                    demonEditPercent[i * 6 +5].value + "&";            

            //Write Brands
            var values = $(demonBrands[i]).val();
            var valuesStr = "";

            if (values != null) {
                for (var j = 0; j < values.length; j++)
                    valuesStr += values[j] + ",";

                if (valuesStr !== "")
                    parameters += "demon" + (i + 1) + "brands=" + valuesStr.substring(0, valuesStr.length - 1) + "&";
            }

            //Write Mitama
            var str = $(demonMitamaStr[i]).val();
            var mag = $(demonMitamaMag[i]).val();
            var vit = $(demonMitamaVit[i]).val();
            var agi = $(demonMitamaAgi[i]).val();
            var luck = $(demonMitamaLuck[i]).val();

            if (parseInt(str))
                parameters += "demon" + (i + 1) + "Mitama1=" + str + "&";
            else
                parameters += "demon" + (i + 1) + "Mitama1=0&";
            if (parseInt(mag))
                parameters += "demon" + (i + 1) + "Mitama2=" + mag + "&";
            else
                parameters += "demon" + (i + 1) + "Mitama2=0&";
            if (parseInt(vit))
                parameters += "demon" + (i + 1) + "Mitama3=" + vit + "&";
            else
                parameters += "demon" + (i + 1) + "Mitama3=0&";
            if (parseInt(agi))
                parameters += "demon" + (i + 1) + "Mitama4=" + agi + "&";
            else
                parameters += "demon" + (i + 1) + "Mitama4=0&";
            if (parseInt(luck))
                parameters += "demon" + (i + 1) + "Mitama5=" + luck + "&";
            else
                parameters += "demon" + (i + 1) + "Mitama5=0&";
        }
    }

    WriteLinkData(window.btoa(parameters.substring(0, parameters.length - 1)));
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

function JsonLoader4() {
    //Load Demons Info
    return $.getJSON("Data/DemonInfo.json", function (info) {
        demonInfoData = info;
    });
}

//Loads up a control with skills
function LoadSkillControls() {
    var select = document.getElementsByName('demonCustomSkill1');

    for (var x = 0; x < select.length; x++) {
        var option = document.createElement('option');
        option.text = nullText;
        option.value = nullText;
        option.title = "Select A Skill..";
        select[x].add(option, 0);

        for (var i = 0; i < skillData.length; i++) {

            if (parseInt(skillData[i]["Skill Points"]) >= 1) {
                var option = document.createElement('option');
                option.text = skillData[i].Name;
                option.value = skillData[i].Name;
                option.setAttribute("data-tokens", skillData[i].Element + " " + skillData[i].Target);
                var subText = skillData[i].Element.charAt(0).toUpperCase() + skillData[i].Element.slice(1);

                if (skillData[i].Cost !== "Passive")
                    subText += " | MP: " + skillData[i].Cost;

                subText += " | SP: " + skillData[i]["Skill Points"];

                option.setAttribute("data-subtext", subText);

                select[x].add(option, 0);
            }
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
        option.title = "Select A Demon..";
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
    if (!blockUpdating) {
        PruneArchetypes();
        ChangeLiberator();
        SetupDemonControls(control);
        UpdateAether();
        UpdateTooltips();
        UpdateMitama();
        CalculateTotalSpeed();
        CalculateSP();        
        CalculateStats();
        BuildResists();
        FilterDemons();
        FilterSkills();
        FilterBrands();
        FilterStats();        
    }
}

//Calculate our Stats from EVERYTHING WE HAVE SETUP!!!
function CalculateStats() {

    //Figure out Win Streak Bonus
    var streakBonus = document.getElementById('steakBonus').value;      

    //Loop through each demon....
    for (var i = 0; i < demonsSel.length; i++)
    {
        var demon = GetDemon(demonsSel[i].value);
        var brands = $(demonBrands[i]).val();
        var liberator = GetLiberator();

        if (demon !== null) {
            //Get our demons base stat values at 50..
            var demonHPStat = 0;
            var demonVitStat = demon["6★ Vitality"];
            var demonVitMitama = demonsSel[i].parentNode.parentNode.parentNode.children[4].children[3].children[0].children[2].children[1].value;
            var demonStrStat = demon["6★ Strength"];
            var demonStrMitama = demonsSel[i].parentNode.parentNode.parentNode.children[4].children[3].children[0].children[0].children[1].value;
            var demonAgiStat = demon["6★ Agility"];
            var demonAgiMitama = demonsSel[i].parentNode.parentNode.parentNode.children[4].children[3].children[0].children[3].children[1].value;
            var demonMagStat = demon["6★ Magic"];
            var demonMagMitama = demonsSel[i].parentNode.parentNode.parentNode.children[4].children[3].children[0].children[1].children[1].value;
            var demonLuStat = demon["6★ Luck"];
            var demonLuMitama = demonsSel[i].parentNode.parentNode.parentNode.children[4].children[3].children[0].children[4].children[1].value;
            var demonPhysAtkStat = 0;
            var demonMagAtkStat = 0;
            var demonPhysDefStat = 0;
            var demonMagDefStat = 0;
            var demonPhysAccuracyStat = 0;
            var demonPhysEvasionStat = 0;
            var demonAilmentInfictionStat = 0;
            var demonAilmentResistanceStat = 0;
            var demonCriticalStat = 0;
            var demonHealStat = 0;
            //Bonus Percents
            var physAtkPercent = 0;
            var physDefPercent = 0;
            var magAtkPercent = 0;
            var magDefPercent = 0;
            var hpPercent = 0;
            
            if (liberator != null && liberator !== nullText) {
                if (liberator.HP != "")
                    hpPercent += liberator.HP;                                                
                if (liberator.St != "")
                    demonStrStat += liberator.St;
                if (liberator.Ma != "")
                    demonMagStat += liberator.Ma;
                if (liberator.Vi != "")
                    demonVitStat += liberator.Vi;
                if (liberator.Lu != "")
                    demonLuStat += liberator.Lu;                
                if (liberator.Ag != "")
                    demonAgiStat += liberator.Ag;
            }

            GetDemon()

            demonsSel[0].value

            //Add standard stats
            if (demon.Name === "Ganesha")
                hpPercent += 10;

            //Critical
            if (demon.Name === "Shiva A")
                demonCriticalStat += 25;
            if (demonsSel[0].value === "Kartikeya" || demonsSel[1].value === "Kartikeya" || demonsSel[2].value === "Kartikeya" || demonsSel[3].value === "Kartikeya")
                demonCriticalStat += 20;
            if (demonsSel[0].value === "Asura Lord" || demonsSel[1].value === "Asura Lord" || demonsSel[2].value === "Asura Lord" || demonsSel[3].value === "Asura Lord")
                demonCriticalStat += 20;

            //Acc
            if (demon.Name === "Shiva A")
                demonPhysAccuracyStat += 25;
            if (demonsSel[0].value === "Kartikeya" || demonsSel[1].value === "Kartikeya" || demonsSel[2].value === "Kartikeya" || demonsSel[3].value === "Kartikeya")
                demonPhysAccuracyStat += 15;

            //Evasion
            if (demonsSel[0].value === "Nekomata A" || demonsSel[1].value === "Nekomata A" || demonsSel[2].value === "Nekomata A" || demonsSel[3].value === "Nekomata A")
                demonPhysEvasionStat += 20;

            //If we want to skill level stats
            if ($(enableSkillLevelsCheck).is(':checked')) {
                //Mag
                if (demon.Name === "Izanami" || demon.Name === "Seraph" || demon.Name === "Cybele")
                    demonMagStat += 20;
                if (demon.Name === "Vishnu" || demon.Name === "Mot" || demon.Name === "Ixtab")
                    demonMagStat += 10;

                //HP
                if (demon.Name === "Abaddon A")
                    hpPercent += 20;
                if (demon.Name === "Orcus" || demon.Name === "Vishnu" || demon.Name === "Mot")
                    hpPercent += 10;

                //Agi
                if (demon.Name === "Kartikeya" || demon.Name === "Nekomata A")
                    demonAgiStat += 20;

                //Vit
                if (demon.Name === "Gogmagog")
                    demonVitStat += 20;

                //Ailment Resist
                if (demon.Name === "Orcus")
                    demonAilmentResistanceStat += 10;

                //Ailment Infliction
                if (demon.Name === "Bayonetta☆")
                    demonAilmentInfictionStat += 20;
                if (demon.Name === "Ixtab" || demon.Name === "Man Eater")
                    demonAilmentInfictionStat += 10;

                //Evasion
                if (demon.Name === "Matador" || demon.Name === "Jeane☆" || demon.Name === "Bayonetta☆")
                    demonPhysEvasionStat += 20;

                //Critical
                if (demon.Name === "Bayonetta☆")
                    demonCriticalStat += 25;

                //Acc
                if (demon.Name === "Guan Yu")
                    demonPhysAccuracyStat += 20;
                if (demon.Name === "Siegfried")
                    demonPhysAccuracyStat += 10;
            }

            //If we want to Obey P3 rules then we get speed for some demons
            if ($(enableP3Check).is(':checked')) {

            }

            //Add Mitama Stats
            if (parseInt(demonVitMitama))
                demonVitStat += parseInt(demonVitMitama);
            if (parseInt(demonStrMitama))
                demonStrStat += parseInt(demonStrMitama);
            if (parseInt(demonMagMitama))
                demonMagStat += parseInt(demonMagMitama);
            if (parseInt(demonAgiMitama))
                demonAgiStat += parseInt(demonAgiMitama);
            if (parseInt(demonLuMitama))
                demonLuStat += parseInt(demonLuMitama);

            //Get our Edit Stat Bonus values
            var types = [
                $(demonEdit1[i]).selectpicker('val'),
                $(demonEdit2[i]).selectpicker('val'),
                $(demonEdit3[i]).selectpicker('val'),
                $(demonEdit4[i]).selectpicker('val'),
                $(demonEdit5[i]).selectpicker('val'),
                $(demonEdit6[i]).selectpicker('val')
            ];
            var numbers = [
                new Number(demonEditNumber[i * 6].value),
                new Number(demonEditNumber[i * 6 + 1].value),
                new Number(demonEditNumber[i * 6 + 2].value),
                new Number(demonEditNumber[i * 6 + 3].value),
                new Number(demonEditNumber[i * 6 + 4].value),
                new Number(demonEditNumber[i * 6 + 5].value)

            ];
            var percents = [
                new Number(demonEditPercent[i * 6].value),
                new Number(demonEditPercent[i * 6 + 1].value),
                new Number(demonEditPercent[i * 6 + 2].value),
                new Number(demonEditPercent[i * 6 + 3].value),
                new Number(demonEditPercent[i * 6 + 4].value),
                new Number(demonEditPercent[i * 6 + 5].value)
            ];

            //Add values to above number/percents
            for (var k = 0; k < types.length; k++) {
                switch (types[k]) {
                    case "ailmentinfliction":
                        demonAilmentInfictionStat += percents[k];
                        break;
                    case "ailmentresistance":
                        demonAilmentResistanceStat += percents[k];
                        break;
                    case "critical":
                        demonCriticalStat += percents[k];
                        break;
                    case "heal":
                        demonHealStat += percents[k];
                        break;
                    case "hp":
                        demonHPStat += numbers[k];
                        hpPercent += percents[k];
                        break;
                    case "magatk":
                        demonMagAtkStat += numbers[k];
                        magAtkPercent += percents[k]; 
                        break;
                    case "magdef":
                        demonMagDefStat += numbers[k];
                        magDefPercent += percents[k];
                        break;
                    case "physaccuracy":
                        demonPhysAccuracyStat += percents[k];
                        break;
                    case "physatk":
                        demonPhysAtkStat += numbers[k];
                        physAtkPercent += percents[k];
                        break;
                    case "physdef":
                        demonPhysDefStat += numbers[k];
                        physDefPercent += percents[k];
                        break;
                    case "physevasion":
                        demonPhysEvasionStat += percents[k];
                        break;
                }
            }

            //Get our Brand Stat Bonuses..
            if (brands !== null) {
                for (var x = 0; x < brands.length; x++) {
                    switch (brands[x]) {
                        case "aim":
                            demonPhysAccuracyStat += 10;
                            break; 
                        case "aim2":
                            demonPhysAccuracyStat += 20;
                            break;   
                        case "dodge":
                            demonPhysEvasionStat += 10;
                            break;  
                        case "dodge2":
                            demonPhysEvasionStat += 20;
                            break;  
                        case "guard":
                            physDefPercent += 30;
                            break;  
                        case "guard2":
                            physDefPercent += 60;
                            break;  
                        case "shield":
                            magDefPercent += 30;
                            break;  
                        case "shield2":
                            magDefPercent += 60;
                            break;  
                        case "heal":
                            demonHealStat += 10;
                            break;  
                        case "heal2":
                            demonHealStat += 20;
                            break;  
                        case "life":
                            hpPercent += 50;
                            break;  
                        case "sick":
                            demonAilmentInfictionStat += 20;
                            break;  
                        case "spell":
                            magAtkPercent += 20;
                            break;  
                        case "war":
                            physAtkPercent += 20;
                            break;  
                    }
                }
            }
            
            //Apply Win Streak Bonus to appropriate stats..
            switch (streakBonus) {                
                case "2":
                case "3":
                case "4":
                    hpPercent += 4;
                    break;
                case "5":
                case "6":
                case "7":
                    hpPercent += 8;
                    break;
                case "8":
                case "9":
                case "10":
                    hpPercent += 12;
                    break;
            }

            //Apply Percents to number values
            demonPhysAtkStat += ((demonStrStat * 2.1 + 50 * 5.6 + 50) * (1 + physAtkPercent / 100));
            demonMagAtkStat += ((demonMagStat * 2.1 + 50 * 5.6 + 50) * (1 + magAtkPercent / 100));
            demonHPStat += ((demonVitStat * 4.7 + 50 * 7.4) * (1 + hpPercent / 100));
            demonMagDefStat += ((demonVitStat * 1.1 + demonMagStat * 0.5 + 50 * 5.6 + 50) * (1 + magDefPercent / 100));
            demonPhysDefStat += ((demonVitStat * 1.1 + demonStrStat * 0.5 + 50 * 5.6 + 50) * (1 + physDefPercent / 100));

            //Write our stat values to Controls
            demonHP[i].innerHTML = "HP: " + Math.floor(demonHPStat);
            demonVit[i].innerHTML = "Vitality: " + demonVitStat;
            demonStr[i].innerHTML = "Strength: " + demonStrStat;
            demonAgi[i].innerHTML = "Agility: " + demonAgiStat;
            demonMag[i].innerHTML = "Magic: " + demonMagStat;
            demonLu[i].innerHTML = "Luck: " + demonLuStat;
            demonPAtk[i].innerHTML = "Phys Atk: " + Math.floor(demonPhysAtkStat);
            demonMAtk[i].innerHTML = "Magic Atk: " + Math.floor(demonMagAtkStat);
            demonPDef[i].innerHTML = "Phys Def: " + Math.floor(demonPhysDefStat);
            demonMDef[i].innerHTML = "Magic Def: " + Math.floor(demonMagDefStat);
            demonPhysEvasion[i].innerHTML = "Phys Evasion: +" + demonPhysEvasionStat + "%";
            demonPhysAccuracy[i].innerHTML = "Phys Accuracy: +" + demonPhysAccuracyStat + "%";
            demonAilmentInfiction[i].innerHTML = "Ailment Infliction: +" + demonAilmentInfictionStat + "%";
            demonAilmentResistance[i].innerHTML = "Ailment Resistance: +" + demonAilmentResistanceStat + "%";
            demonCritical[i].innerHTML = "Critical: +" + demonCriticalStat + "%";
            demonHeal[i].innerHTML = "Heal: +" + demonHealStat + "%";
        } else {
            demonHP[i].innerHTML = "HP:";
            demonVit[i].innerHTML = "Vitality:";
            demonStr[i].innerHTML = "Strength:";
            demonAgi[i].innerHTML = "Agility:";
            demonMag[i].innerHTML = "Magic:";
            demonLu[i].innerHTML = "Luck:";
            demonPAtk[i].innerHTML = "Phys Atk:";
            demonMAtk[i].innerHTML = "Magic Atk:";
            demonPDef[i].innerHTML = "Phys Def:";
            demonMDef[i].innerHTML = "Magic Def:";
            demonPhysEvasion[i].innerHTML = "Phys Evasion:";
            demonPhysAccuracy[i].innerHTML = "Phys Accuracy:";
            demonAilmentInfiction[i].innerHTML = "Ailment Infliction:";
            demonAilmentResistance[i].innerHTML = "Ailment Resistance:";
            demonCritical[i].innerHTML = "Critical:";
            demonHeal[i].innerHTML = "Heal";
        }
    }
}

//Updates all places that need brand info 
function UpdateBrandInfo() {    
    CalculateTotalSpeed();
    FilterBrands();
    CalculateStats();
}

//Calculates and sets our Total SP
function CalculateSP() {
    for (var i = 0; i < demonsSel.length; i++) {
        var demon = GetDemon(demonsSel[i].value);
        var sp = 0;

        if (demon != null && demon !== nullText) {
            var skill1 = GetSkill(demonCustomSkill1[i].value);
            var skill2 = GetSkill(demonCustomSkill2[i].value);

            if (skill1 != null)
                sp += skill1["Skill Points"];

            if (skill2 != null)
                sp += skill2["Skill Points"];

            demonSP[i].style.visibility = 'visible';
            demonSP[i].innerHTML = "SP Required: " + sp;
        } else {
            demonSP[i].style.visibility = 'hidden';
        }
    }
}

//Prunes archetypes not needed from our demons and sets them to first available
function PruneArchetypes() {
    for (var i = 0; i < demonsSel.length; i++) {
        var demon = GetDemon(demonsSel[i].value);

        if (demon != null) {
            $(demonArchtype[i]).prop('disabled', false);
            var options = $(demonArchtype[i]).find("option");
            for (var x = 0; x < options.length; x++) {
                switch (demon.Name) {
                    case "Kama":
                    case "Kanbari":
                    case "Kinmamon":
                    case "Attis":
                    case "Dionysus":
                    case "Alilat":
                    case "Chupacabra":
                    case "Hare of Inaba":
                    case "Kamiotoko":
                    case "Reiko Kashima":
                    case "Parvati":
                    case "Cybele":
                    case "Kabuso":
                    case "Kartikeya":
                    case "Seraph":
                    case "Neko Shogun":
                    case "Lucifuge":
                        if (options[x].value === "yellow" ||
                            options[x].value === "purple" ||
                            options[x].value === "teal" ||
                            options[x].value === "red") {
                            $(options[x]).prop('disabled', true);
                            if (demonArchtype[i].value !== 'clear') {
                                blockUpdating = true;
                                $(demonArchtype[i]).selectpicker('val', 'clear');
                                blockUpdating = false;
                            }
                        } else {
                            $(options[x]).prop('disabled', false);
                        }
                        break;
                    case "Alice":
                    case "Hell Biker":
                    case "Mother Harlot":
                    case "Trumpeter":
                    case "White Rider":
                    case "Huang Di":
                    case "Rama":
                    case "Jeanne d'Arc":
                    case "Siegfried":
                    case "Yoshitsune":
                    case "Masakado":
                    case "Bayonetta☆":
                    case "Jeanne☆":
                    case "Abaddon A":
                    case "Nekomata A":
                    case "Shiva A":
                    case "Nero☆":
                    case "V☆":
                    case "Dante☆":
                    case "Matador": 
                    case "Orcus":
                    case "Matador":
                    case "Daisoujou":
                    case "Guan Yu":
                    case "Yama":
                    case "Asura":
                    case "Agni":
                    case "Mahakala":
                    case "Raphael":
                    case "Gabrael":
                    case "Uriel":
                    case "Red Rider":
                    case "Black Rider":
                    case "Pale Rider":
                    case "Susano-o A":
                    case "Garuda A":
                    case "Masakado A":
                    case "Asura Lord":
                    case "Cu Chulainn A":
                    case "Quetzalcoatl A":
                    case "Vairocana":
                    case "Atavaka":
                    case "Tokisada":
                    case "Anat":
                    case "Schierke":
                    case "Skull Knight":
                    case "Mozgus":
                    case "Hecate":
                        if (demon.Name != "Nekomata" && demon.Name != "Abaddon") {
                            $(options[x]).prop('disabled', false);
                            if (options[x].value === "clear") {
                                $(options[x]).prop('disabled', true);
                                if (demonArchtype[i].value === 'clear') {
                                    blockUpdating = true;
                                    $(demonArchtype[i]).selectpicker('val', 'red');
                                    blockUpdating = false;
                                }
                            }
                        }
                        else
                            $(options[x]).prop('disabled', false);
                        break;
                    default:
                        $(options[x]).prop('disabled', false);
                        break;
                }
            }
        } else {
            $(demonArchtype[i]).prop('disabled', true);
        }

        $(demonArchtype[i]).selectpicker('refresh');
    }
}

//Sets up our demon controls
function SetupDemonControls(control) {
    for (var i = 0; i < demonsSel.length; i++) {

        if (control !== "All" && (control !== demonsSel[i] && control !== demonArchtype[i]))
            continue;

        var demon = GetDemon(demonsSel[i].value);

        if (demon != null) {

            demonImages[i].src = "Images/Demons/" + demon.Name.replace("☆", "") + ".jpg";
            demonImages[i].style.visibility = 'visible';

            var di = GetDemonInfo(demon.Name);
            var panelStats = "";

            if (demon["Panel 1"] != "")
                panelStats = "Panel 1: " + demon["Panel 1"] + " " + demon["Panel 1 Stats"] + "\nPanel 2: " + demon["Panel 2"] + " " + demon["Panel 2 Stats"] + "\nPanel 3: " + demon["Panel 3"] + " " + demon["Panel 3 Stats"] + "\n\n";            

            if (di != null) {
                $(demonImages[i]).attr('data-original-title', panelStats + di.Description + "\n\n" + di.RecommendedSkills + "\n\n" + di.Brands);
                $(demonImgArchtype[i]).attr('data-original-title', GetDemonInfoByAchtype(di, $(demonArchtype[i]).val()));
            }
            else {
                $(demonImages[i]).attr('data-original-title', panelStats);
                $(demonImgArchtype[i]).attr('data-original-title', "");
            }

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
            demonAwakenSkill[i].innerHTML = GetSkillByArchtype(demon, $(demonArchtype[i]).val());

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

//Update Aether Cost
function UpdateAether() {
    for (var i = 0; i < demonsSel.length; i++) {
        var demon = GetDemon(demonsSel[i].value);
        if (demon != null) {
            var aether = [];
            var aetherTypes = [];

            AddAether(demon, aether, aetherTypes, "Light");
            AddAether(demon, aether, aetherTypes, "Lawful");
            AddAether(demon, aether, aetherTypes, "Neutral");
            AddAether(demon, aether, aetherTypes, "Dark");
            AddAether(demon, aether, aetherTypes, "Chaotic");
            AddAether(demon, aether, aetherTypes, "Witch");
            AddAether(demon, aether, aetherTypes, "Soul");

            if (aether[0] != null) {
                aether1Img[i].src = "Images/Awakening/" + aetherTypes[0] + ".jpg";
                aether1[i].innerHTML = demon[aetherTypes[0]];
                aether1Img[i].setAttribute('data-original-title', aetherTypes[0]);
                aether1[i].style.visibility = 'visible';
            } else {
                aether1[i].style.visibility = 'hidden';
            }

            if (aether[1] != null) {
                aether2Img[i].src = "Images/Awakening/" + aetherTypes[1] + ".jpg";
                aether2[i].innerHTML = demon[aetherTypes[1]];
                aether2Img[i].setAttribute('data-original-title', aetherTypes[1]);
                aether2[i].style.visibility = 'visible';
            } else {
                aether2[i].style.visibility = 'hidden';
            }

            if (aether[2] != null) {
                aether3Img[i].src = "Images/Awakening/" + aetherTypes[2] + ".jpg";
                aether3[i].innerHTML = demon[aetherTypes[2]];
                aether3Img[i].setAttribute('data-original-title', aetherTypes[2]);
                aether3[i].style.visibility = 'visible';
            } else {
                aether3[i].style.visibility = 'hidden';
            }

            if (aether[3] != null) {
                aether4Img[i].src = "Images/Awakening/" + aetherTypes[3] + ".jpg";
                aether4[i].innerHTML = demon[aetherTypes[3]];
                aether4Img[i].setAttribute('data-original-title', aetherTypes[3]);
                aether4[i].style.visibility = 'visible';
            } else {
                aether4[i].style.visibility = 'hidden';
            }
        } else {
            aether1[i].style.visibility = 'hidden';
            aether1Img[i].src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
            aether2[i].style.visibility = 'hidden';
            aether2Img[i].src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
            aether3[i].style.visibility = 'hidden';
            aether3Img[i].src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
            aether4[i].style.visibility = 'hidden';
            aether4Img[i].src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        }
    }
}

//Checks if Aether is null or not and adds whats needed to our array
function AddAether(demon, aether, aetherTypes, name) {
    if (demon["S " + name] !== "") {
        aether.push(demon["S " + name]);
        aetherTypes.push("S " + name);
    }
    if (demon["M " + name] !== "") {
        aether.push(demon["M " + name]);
        aetherTypes.push("M " + name);
    }
    if (demon["L " + name] !== "") {
        aether.push(demon["L " + name]);
        aetherTypes.push("L " + name);
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

        //Add Mitama Agi        
        if (demon.MitamaAgi != null)
            extraAgi += demon.MitamaAgi;

        //Calculate Extra Agi
        if (GetSkillByArchtype(demon, $(demonArchtype[num]).val()) === "Agility Amp I" ||
            demonCustomSkill1[num].value === "Agility Amp I" ||
            demonCustomSkill2[num].value === "Agility Amp I")
            extraAgi += 5;

        if (GetSkillByArchtype(demon, $(demonArchtype[num]).val()) === "Agility Amp II" ||
            demonCustomSkill1[num].value === "Agility Amp II" ||
            demonCustomSkill2[num].value === "Agility Amp II")
            extraAgi += 10;

        if (GetSkillByArchtype(demon, $(demonArchtype[num]).val()) === "Agility Amp III" ||
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

        if (demon["Skill 1"] === "Epitome of Swiftness" ||
            demon["Skill 2"] === "Epitome of Swiftness" ||
            demon["Skill 3"] === "Epitome of Swiftness" ||
            GetSkillByArchtype(demon, $(demonArchtype[num]).val()) === "Epitome of Swiftness" ||
            demonCustomSkill1[num].value === "Epitome of Swiftness" ||
            demonCustomSkill2[num].value === "Epitome of Swiftness")
            extraPercent += .25;

        //If we want to Obey P3 rules then we get speed for some demons
        if ($(enableP3Check).is(':checked')) {
            if (demon.Name === "Garuda" || demon.Name === "Hresvelgr")
                extraPercent += .2;
            if (demon.Name === "Kartikeya")
                extraPercent += .3;
        }

        //If we want to obey skill level ups then we get agi for some demons
        if ($(enableSkillLevelsCheck).is(':checked')) {
            if (demon.Name === "Kartikeya" || demon.Name === "Nekomata A")
                extraAgi += 20;
        }

        //Check Brands for speed brands
        var brands = $(demonBrands[num]).val();

        if (brands !== null) {
            for (var i = 0; i < brands.length; i++) {
                if (brands[i] === "speed2")
                    extraPercent += .5;
                else if (brands[i] === "speed")
                    extraPercent += .25;
            }
        }

        if (demonEdit1[num].value == "speed")
            extraPercent += demonEditPercent[num * 6].value / 100;        

        if (demonEdit2[num].value == "speed")
            extraPercent += demonEditPercent[num * 6 + 1].value / 100;
        
        if (demonEdit3[num].value == "speed")
            extraPercent += demonEditPercent[num * 6 + 2].value / 100;        

        if (demonEdit4[num].value == "speed")
            extraPercent += demonEditPercent[num * 6 + 3].value / 100;        

        if (demonEdit5[num].value == "speed")
            extraPercent += demonEditPercent[num * 6 + 4].value / 100;        

        if (demonEdit6[num].value == "speed")
            extraPercent += demonEditPercent[num * 6 + 5].value / 100;        

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
                demon["Skill 3"], GetSkillByArchtype(demon, demonArchtype[i].value), demonCustomSkill1[i].value, demonCustomSkill2[i].value
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

//Returns proper Resist by name
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

    if (result === "")
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

//Gets demon infoby name
function GetDemonInfo(name) {
    var foundDemon = null;
    demonInfoData.forEach(function (info) {
        if (info.Name === name) {
            foundDemon = info;
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

//Get Skill by name
function GetSkill(name) {
    var foundSkill = null;
    skillData.forEach(function (skill) {
        if (skill.Name === name) {
            foundSkill = skill;
        }
    });

    return foundSkill;
}

//Returns skill descriptions by skill name
function GetSkillInfo(skillName) {
    for (var i = 0; i < skillData.length; i++) {
        if (skillName === nullText)
            return "";
        else if (skillData[i].Name === skillName) {
            skillInfo = skillData[i].Description + "\n\n"

            if (skillData[i].Element != "")
                skillInfo = skillInfo + skillData[i].Element.charAt(0).toUpperCase() + skillData[i].Element.slice(1) + " | ";

            if (skillData[i]["Skill Points"] != "")
                skillInfo = skillInfo + skillData[i]["Skill Points"] + " SP | ";

            if (skillData[i].Cost != "")
                skillInfo = skillInfo + skillData[i].Cost.replace("Passive", "0 MP") + " | ";

            if (skillData[i].Target != "")
                skillInfo = skillInfo + skillData[i].Target.charAt(0).toUpperCase() + skillData[i].Target.slice(1) + " | ";

            if (skillData[i]["Skill Points"] != "" || skillData[i].Target != "" || skillData[i].Cost != "" || skillData[i].Element != "")
                skillInfo = skillInfo.slice(0, -3);

            skillInfo = skillInfo.replace(/\\n/g, "<br/>");

            return skillInfo
        }

    }

    return "";
}

function GetDemonInfoByAchtype(demon, archtype) {
    switch (archtype) {
        case "clear":
            return demon["Common"];
        case "red":
            return demon["Red"];
        case "teal":
            return demon["Teal"];
        case "purple":
            return demon["Purple"];
        case "yellow":
            return demon["Yellow"];
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
    if (text == null || text === "")
        return nullText;
    else
        return text;
}

//Reset our page by loading our base url
function Reset() {
    window.location.href = baseUrl;
}

//Swap our Liberator info out
function ChangeLiberator() {
    var liberator = $('#liberators').val();

    if (liberator === nullText)
        document.getElementById("liberatorimage").style.visibility = 'hidden';
    else {
        var lib = GetLiberator(liberator);

        document.getElementById("liberatorimage").setAttribute('data-original-title', lib["Skills"]);
        document.getElementById("liberatorimage").style.visibility = 'visible';
        document.getElementById("liberatorimage").src = "Images/Liberators/" + liberator + ".png";
    }

    $('#liberators').blur();
}

//Swaps demons by turn order
function TurnOrder() {
    CalculateTotalSpeed();

    var cols = document.getElementsByName("demon");
    var demons = [];

    for (var i = 0; i < demonsSel.length; i++) {
        demons.push(GetDemon(demonsSel[i].value));

        if (demons[i] != null) {            
            var tempBrands = $(demonBrands[i]).val();
            demons[i].hasLeadBrand = false;
            demons[i].hasLeadBrand2 = false;
            demons[i].index = i;

            if (tempBrands !== null) {
                for (var j = 0; j < tempBrands.length; j++) {
                    if (tempBrands[j] === "lead") {
                        demons[i].hasLeadBrand = true;       
                    }
                    if (tempBrands[j] === "lead2") {
                        demons[i].hasLeadBrand2 = true;       
                    }
                }
            }
        }
    }

    //Sorts our demons by agi only
    var sorter = function() {
        return function (a, b) {
            if (a == null) {
                return 1;
            } else if (b == null) {
                return -1;
            } else if (a === b) {
                return 0;
            }

            var demonAAgi = a["6★ Agility"];
            var demonBAgi = b["6★ Agility"];
            if (parseInt(a.MitamaAgi))
                demonAAgi += parseInt(a.MitamaAgi);
            if (parseInt(b.MitamaAgi))
                demonBAgi += parseInt(b.MitamaAgi);

            return demonAAgi < demonBAgi ? 1 : -1;            
        }
    };

    var newTurnOrder = demons.slice().sort(sorter());

    //Sorts by if they have lead brands or not
    var sorter2 = function () {
        return function (a, b) {
            if (a == null) {
                return 1;
            } else if (b == null) {
                return -1;
            } else if (a === b) {
                return 0;
            }

            if (newTurnOrder.indexOf(a) == newTurnOrder.indexOf(b) + 1) {
                if (a.hasLeadBrand == true && b.hasLeadBrand == false)
                    return -1;
                if (a.hasLeadBrand == false && b.hasLeadBrand == true)
                    return 1;                
                if (a.hasLeadBrand2 == true && b.hasLeadBrand2 == false)
                    return -1;
                if (a.hasLeadBrand2 == false && b.hasLeadBrand2 == true)
                    return 1;
            }

            if (newTurnOrder.indexOf(a) == newTurnOrder.indexOf(b) + 2) {
                if (a.hasLeadBrand2 == true && b.hasLeadBrand2 == false)
                    return -1;
                if (a.hasLeadBrand2 == false && b.hasLeadBrand2 == true)
                    return 1;
            }

            var demonAAgi = a["6★ Agility"];
            var demonBAgi = b["6★ Agility"];
            if (parseInt(a.MitamaAgi))
                demonAAgi += parseInt(a.MitamaAgi);
            if (parseInt(b.MitamaAgi))
                demonBAgi += parseInt(b.MitamaAgi);

            return demonAAgi < demonBAgi ? 1 : -1; 
        }
    }

    newTurnOrder = newTurnOrder.sort(sorter2());

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

    //Deselect our button
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
            var object = $(demonsSel[x]).find("option");
                for (var j = 0; j < object.length; j++) {
                    if (object[j].value === nullText)
                        $(object[j]).prop('disabled', false);
                    else if (disabledDemons.indexOf(object[j].value) >= 0)
                        $(object[j]).prop('disabled', true);
                    else
                        $(object[j]).prop('disabled', false);
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
            GetSkillInfo(demonCustomSkill1[i].value));
        $(demonCustomSkill2[i]).next().find("div")[0].setAttribute('data-original-title',
            GetSkillInfo(demonCustomSkill2[i].value));
    }
}

//Disable uneeded values in stats
function FilterStats() {
    for (var i = 0; i < demonsSel.length; i++) {
        var types = [
            $(demonEdit1[i]).selectpicker('val'),
            $(demonEdit2[i]).selectpicker('val'),
            $(demonEdit3[i]).selectpicker('val'),
            $(demonEdit4[i]).selectpicker('val'),
            $(demonEdit5[i]).selectpicker('val'),
            $(demonEdit6[i]).selectpicker('val')
        ];
        var numbers = [
            demonEditNumber[i * 6],
            demonEditNumber[i * 6 + 1],
            demonEditNumber[i * 6 + 2],
            demonEditNumber[i * 6 + 3],
            demonEditNumber[i * 6 + 4],
            demonEditNumber[i * 6 + 5]
        ];

        for (var x = 0; x < types.length; x++) {
            switch (types[x]) {
                case "ailmentinfliction":
                case "ailmentresistance":
                case "critical":
                case "heal":
                case "physaccuracy":
                case "physevasion":
                case "speed":
                    $(numbers[x]).attr('disabled', true);
                    break;
                default:
                    $(numbers[x]).attr('disabled', false);
                    break;
            }
        }
    }
}

//Disables brands we cant use
function FilterBrands() {
    for (var j = 0; j < demonsSel.length; j++) {
        var brands = $(demonBrands[j]).val();
        var options = $(demonBrands[j]).find('option');

        if (brands !== null) {
            var totalCost = 0;

            for (var i = 0; i < brands.length; i++) {
                totalCost += GetBrandCost(brands[i]);
            }

            for (var l = 0; l < options.length; l++) {
                //Skip thhis brand if its checked
                if (brands.indexOf(options[l].value) >= 0)
                    continue;

                var cost = GetBrandCost(options[l].value);

                //Disable everything over 2 cost
                if (totalCost === 2) {
                    if (cost === 4)
                        $(options[l]).attr('disabled', true);
                    else
                        $(options[l]).attr('disabled', false);
                } else if (totalCost === 3) { //Disable any 4 cost
                    if (cost >= 3)
                        $(options[l]).attr('disabled', true);
                    else
                        $(options[l]).attr('disabled', false);
                } else { //Disable everything else
                    $(options[l]).attr('disabled', true);
                }
            }
        } else { //Else enable all none are selected
            for (var l = 0; l < options.length; l++) {
                $(options[l]).attr('disabled', false);
            }
        }

        $(demonBrands[j]).selectpicker('refresh');
    }
}

//Returns cost of brands by name
function GetBrandCost(brandName)
{
    switch (brandName) {
        case "ward":
        case "shield":
        case "guard":
        case "speed":
        case "dodge":
        case "lead":
        case "aim":
        case "heal":
            return 2;
        case "life":
        case "divine":
        case "war":
        case "spell":
        case "sick":
            return 3;
        case "shield2":
        case "guard2":
        case "speed2":
        case "dodge2":
        case "aim2":
        case "heal2":
        case "lead2":
            return 4;
        default:
            return 0;
    }
}

//Writes a url to db and returns a short URl for it
function WriteLinkData(url) {
    var db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    var redirectUrl;

    FindByBase64(url).then(function (id) {
        if (id == null)
            redirectUrl = GenerateUUID();
        else
            redirectUrl = id;

        db.collection("url").doc(redirectUrl).set({
            base64: url
        }).finally(function () {
            window.location.href = baseUrl + "?" + redirectUrl;
        });
    }).catch(function (error) {
        console.log(error);
        //Revert to standard long URl if error occurs
        window.location.href = baseUrl + "?" + url;
    });
}

//Reads a GUID and spits back data from the DB
function ReadLinkData(guid) {
    var db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    var doc = db.collection("url").doc(guid);

    return doc.get().then(function (doc) {
        if (doc.exists) {
            return doc.data();
        } else {
            return null;
        }
    });    
}

//Checks to see if a base64 is already in use and if so returns its id, else returns null
function FindByBase64(url) {
    var db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    var doc = db.collection("url");

    return doc.get().then(function (querySnapshot) {
        var id = null;
        querySnapshot.forEach(function (doc) {
            
            var data = doc.data();
            if (data["base64"] == url)
                id = doc.id;
        });
        return id;
    });
}

//Returns a GUID
function GenerateUUID() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now();
    }
    return 'xxxxxx-xxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

//Loads our links to Builds page
function LoadLinks() {
    var db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    var doc = db.collection("url");
    var ul = document.getElementById("buildList");
    
    doc.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {

            var name = GetDemonsFromUrl(doc.data()["base64"]);

            if (name != "" && name.split(",").length -1 >= 3) {
                var li = document.createElement("li");
                li.classList.add("list-group-item");
                var a = document.createElement("a");
                a.href = baseUrl + "/?" + doc.id;
                a.appendChild(document.createTextNode(name));
                li.appendChild(a);
                ul.appendChild(li);
            }
        });
    });
}

//Returns the demons in our url by string
function GetDemonsFromUrl(data) {
    var demonNames = "";

    var data = window.atob(data)
    var url = new URL(decodeURI(baseUrl + "?" + data.replace("#", "")));

    var demons = [
        url.searchParams.get("demon1"),
        url.searchParams.get("demon2"),
        url.searchParams.get("demon3"),
        url.searchParams.get("demon4")
    ];

    if (demons[0] != null)
        demonNames += demons[0] + ", ";
    if (demons[1] != null)
        demonNames += demons[1] + ", ";
    if (demons[2] != null)
        demonNames += demons[2] + ", ";
    if (demons[3] != null)
        demonNames += demons[3] + ", ";

    if (demonNames != "")
        demonNames = demonNames.substring(0, demonNames.length - 2);

    return demonNames;
}

//Returns Maxes out the mitama control located near the control passed
function Max(control) {

    var demon = GetDemon(control.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[0].value)

    if (demon != null) {
        var totalMitama = GetCurrentMitama(control);
        var maxMitama = GetMaxMitama(demon);

        if (totalMitama + 20 <= maxMitama)
            control.parentNode.children[1].value = "20";
        else if (parseInt(control.parentNode.children[1].value))
            control.parentNode.children[1].value = parseInt(control.parentNode.children[1].value) + (maxMitama - GetCurrentMitama(control))
        else
            control.parentNode.children[1].value = (maxMitama - GetCurrentMitama(control))
    }

    ReloadAll();
}

//Update all mitama for all demons
function UpdateMitama() {
    for (var i = 0; i < demonsSel.length; i++) {

        var demon = GetDemon(demonsSel[i].value)

        if (demon != null) {
            var maxMitama = GetMaxMitama(demon);
            demonsSel[i].parentNode.parentNode.parentNode.children[4].children[3].children[0].children[5].children[1].innerHTML = maxMitama - GetCurrentMitama(demonsSel[i].parentNode.parentNode.parentNode.children[4].children[3].children[0].children[4].children[3]);
            var mitamaAgi = demonsSel[i].parentNode.parentNode.parentNode.children[4].children[3].children[0].children[3].children[1].value;
            if (parseInt(mitamaAgi))
                demon.MitamaAgi = parseInt(mitamaAgi);
            else
                demon.MitamaAgi = 0;
        }
        else { 
            demonsSel[i].parentNode.parentNode.parentNode.children[4].children[3].children[0].children[5].children[1].innerHTML = "0";            
        }
    }
}

//Get max mitama allowed for a demon
function GetMaxMitama(demon) {

    if (demon != null) {
        switch (demon.Rarity) {
            case 5:
                return max5Mitama;
            case 4:
                return max4Mitama;
            case 3:
                return max3Mitama;
            case 2:
                return max2Mitama;
            case 1:
                return max1Mitama;
        }
    }

    return 0;
}

//Calculate current mitama based off a control
function GetCurrentMitama(control) {
    var total = 0;

    var owner = control.parentNode.parentNode;
    if (parseInt(owner.children[0].children[1].value))
        total += parseInt(owner.children[0].children[1].value);
    if (parseInt(owner.children[1].children[1].value))
        total += parseInt(owner.children[1].children[1].value);
    if (parseInt(owner.children[2].children[1].value))
        total += parseInt(owner.children[2].children[1].value);
    if (parseInt(owner.children[3].children[1].value))
        total += parseInt(owner.children[3].children[1].value);
    if (parseInt(owner.children[4].children[1].value))
        total += parseInt(owner.children[4].children[1].value);

    return total;
}

//Clears our mitama count for the local mitama
function Clear(control) {
    control.parentNode.children[1].value = 0;
    ReloadAll();
}