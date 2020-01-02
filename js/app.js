const myParty1 = [
    {
        name: 'Uriel',
        ag: 156,
        brandSets: ['Speed', 'Speed']
    },
    {
        name: 'Raphael',
        ag: 168,
        brandSets: ['Lead', 'Speed']
    },
    {
        name: 'Garuda',
        ag: 256,
        brandSets: ['Speed', 'Speed']
    },
    {
        name: 'Gabriel',
        ag: 157,
        brandSets: ['Lead', 'Speed']
    }
];

const myParty2 = [
    {
        name: 'Baal',
        ag: 159,
        brandSets: ['Divine', 'Lead']
    },
    {
        name: 'Garuda',
        ag: 259,
        brandSets: ['Spell', 'Speed']
    },
    {
        name: 'Garuda A',
        ag: 211,
        brandSets: ['Spell', 'Speed']
    },
    {
        name: 'Susano A',
        ag: 157,
        brandSets: ['Divine', 'Lead']
    }
];

// Function for sorting party by agility stat, in descending order
function sortByAgility(party) {
    party.sort(function (a, b) {
        if (a.ag > b.ag) {
            return -1;
        }
        if (a.ag < b.ag) {
            return 1;
        }
    });
    return party;
}

// Function for sorting party by presence of lead brands
function sortByLead(party) {
    party.sort(function (a, b) {

        if (a.leadCount > 0) {
            a.leadCount--;
            return -1;
        }

        // If lead brands are present, move up in turn order
        if (b.leadCount > 0) {
            b.leadCount--; // Decrement leadCount counter, as current set of lead brands is accounted for
            return 1
        }
    });
    // Delete `leadCount` property from each item in array, now that sorting is complete
    party.forEach(function (p) {
        delete p.leadCount
    });
    return party;
}

//Helper function to perform the sort
function sortParty(myParty, labelId) {

    myParty.map(function (demon) {
        demon.leadCount = 0;
        for (let i = 0; i < demon.brandSets.length; i++) {
            if (demon.brandSets[i] === 'Lead') {
                demon.leadCount++;
            }
        }
        return demon;
    });

    var turnOrder = sortByLead(sortByAgility(myParty));
    document.getElementById(labelId).innerText = JSON.stringify(turnOrder);
    console.log(turnOrder);
}