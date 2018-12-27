var demonData;
var skillData;
var nullText = "-----------";

function LoadData() {

    //Load Skills
    $.getJSON("https://alenael.github.io/TeamBuilder/Data/Skills.json", function (skills) {
        skillData = skills;

        LoadSkillControl("demon1customskill1");
        LoadSkillControl("demon1customskill2");
    });

    //Load Demons
    $.getJSON("https://alenael.github.io/TeamBuilder/Data/Demons.json", function(demons) {
        demonData = demons;

        //Load our Controls
        LoadDemonControl("demonSel1");
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
        var sel = $('#demonSel1').val();
        demonData.forEach(function(demon) {
            if (demon.Name == sel) {
                document.getElementById("demon1skill1").innerHTML = demon["Skill 1"];
                document.getElementById("demon1skill2").innerHTML = demon["Skill 2"];
                document.getElementById("demon1skill3").innerHTML = demon["Skill 3"];
                document.getElementById("demon1awakenskill1").innerHTML = GetSkillByArchtype(demon, $('#demon1archtype').val());
                //document.getElementById("demon1awakenskill2").innerHTML = GetGachaSkillByArchtype(demon, $('#demon1archtype').val());

                //demon1customskill1
            }
        });
        break;
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