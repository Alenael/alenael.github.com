var demonData;
var skillData;
var nullText = "-----------";

function LoadData() {

    //Load Skills
    $.getJSON("https://alenael.github.io/TeamBuilder/Data/Skills.json", function (skills) {
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

    //Load Demons
    $.getJSON("https://alenael.github.io/TeamBuilder/Data/Demons.json", function(demons) {
        demonData = demons;

        LoadDemonControl("demonSel1");
        LoadDemonControl("demonSel2");
        LoadDemonControl("demonSel3");
        LoadDemonControl("demonSel4");
    });
}

//Loads up a control with skills
function LoadSkillControl(control) {
    var select = document.getElementById(control);
    var option = document.createElement('option');
    option.text = nullText;
    select.add(option, 0);

    for (var i = 0; i <= skillData.length - 1; i++) {
        //Load all the demons and add them to our list
        var option = document.createElement('option');
        option.text = skillData[i].Name;
        select.add(option, 0);
    }

    SortByABC(control);
}

//Loads up a control with our demon info
function LoadDemonControl(control) {
    var select = document.getElementById(control);
    var option = document.createElement('option');
    option.text = nullText;
    select.add(option, 0);

    for (var i = 0; i <= demonData.length - 1; i++) {
        //Load all the demons and add them to our list
        var option = document.createElement('option');
        option.text = demonData[i].Name;
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
    demonData.forEach(function (demon) {
        if (demon.Name == sel) {
            document.getElementById("demon" + controlNum + "skill1").innerHTML = demon["Skill 1"];
            document.getElementById("demon" + controlNum + "skill2").innerHTML = demon["Skill 2"];
            document.getElementById("demon" + controlNum + "skill3").innerHTML = demon["Skill 3"];
            document.getElementById("demon" + controlNum + "awakenskill1").innerHTML =
                GetSkillByArchtype(demon, $('#demon1archtype').val());
            if (document.getElementById("demon" + controlNum + "gachalock").checked == false) {
                document.getElementById("demon" + controlNum + "customskill1").value =
                    GetGachaSkillByArchtype(demon, $('#demon' + controlNum + 'archtype').val());
            }

            //demon1customskill1
        }
    });
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