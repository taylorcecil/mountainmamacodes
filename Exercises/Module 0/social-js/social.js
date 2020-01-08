var mountainMama = {
    name: 'Taylor',
    age: 22,
    spareTime: ['gardening', 'reading', 'cooking', 'yoga'],
    female: true,
    taylorGender: function() {
        var gender = this.female ? 'Taylor is female' : 'Taylor is male';
        console.log(gender)
    },
    yogaFriends: [
        {
            name: 'Olivia',
            age: 25,
            practices: 'Yoga Sculpt'
        },
        {
            name: 'Leslie',
            age: 42,
            practices: 'Power Vinyasa'
        }
    ]

}
mountainMama.taylorGender()
mountainMama.isSingle = true
mountainMama.yogaFriends[0].isFemale = true
mountainMama.spareTime.push('hiking', 'camping')
console.log(mountainMama)
var mountainMamaDogs = [{
    name: 'Jade',
    age: 4,
    enjoys: ['hiking', 'fetch', 'cuddling'],
    isLabrador: true
    },
    {
    name: 'Willow',
    age: 1,
    isAPainInTheAss: true,
    enjoys: ['annoying mom', 'jumping', 'giving sweet eyes', 'eating socks'],
    isLabrador: true
    }]
for(var i = 0; i < mountainMamaDogs.length; i++){
    if(mountainMamaDogs[i].isLabrador){
        console.log('I am the best dog')
    }
    else {
        console.log('Beta dog')
    }
}
