(function(){

// The _.map function takes an array and returns another array or an object
// It "maps" frome one value to another 
// Actors who have playe Doctor Who 

    var doctors = [
        { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
        { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
        { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
        { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
        { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
        { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
        { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
        { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
        { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
        { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
        { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
        { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }    
    ];
    
    doctors = doctors.filter(function(doctor) {
        return doctor.begin > 2000; 
        // filtered list of doctors to include just the ones start after 2000
    
    })

    var doctorsobject = _.map(doctors, function(doctor){
        return { 
        // return what new object will look like
            "Started": doctor.begin,
            "Played by": doctor.actor,
            "How many years": doctor.end - doctor.begin + 1
        };
    });

console.log(doctorsobject);

}).call(this);

