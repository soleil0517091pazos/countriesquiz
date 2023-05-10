var score = 0;
var guessedCountries = [];

function processGuess(){
    var guess = document.getElementById('countryInput').value;
    guess = guess.toLowerCase();

    if(guessedCountries.includes(guess)){
        document.getElementById('check').style.backgroundColor = 'rgba(247, 247, 31, 0.918)';
    }

    //first row
    else if(guess === 'afghanistan'){
        document.getElementById('afghanistan').innerHTML = 'Afghanistan';
        document.getElementById('afghanistanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'albania'){
        document.getElementById('albania').innerHTML = 'Albania';
        document.getElementById('albaniaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'algeria'){
        document.getElementById('algeria').innerHTML = 'Algeria';
        document.getElementById('algeriaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'andorra'){
        document.getElementById('andorra').innerHTML = 'Andorra';
        document.getElementById('andorraTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'angola'){
        document.getElementById('angola').innerHTML = 'Angola';
        document.getElementById('angolaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'antiguaandbarbuda' || guess === 'antigua' || guess === 'barbuda' || guess === 'antigua and barbuda'){
        document.getElementById('antiguaandbarbuda').innerHTML = 'Antigua and Barbuda';
        document.getElementById('antiguaandbarbudaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('antiguaandbarbuda', 'antigua and barbuda', 'antigua', 'barbuda');

        score++;
   
    }
    else if(guess === 'argentina'){
        document.getElementById('argentina').innerHTML = 'Argentina';
        document.getElementById('argentinaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'armenia'){
        document.getElementById('armenia').innerHTML = 'Armenia';
        document.getElementById('armeniaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'australia'){
        document.getElementById('australia').innerHTML = 'Australia';
        document.getElementById('australiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'austria'){
        document.getElementById('austria').innerHTML = 'Austria';
        document.getElementById('austriaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'azerbaijan'){
        document.getElementById('azerbaijan').innerHTML = 'Azerbaijan';
        document.getElementById('azerbaijanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'bahamas'){
        document.getElementById('bahamas').innerHTML = 'Bahamas';
        document.getElementById('bahamasTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'bahrain'){
        document.getElementById('bahrain').innerHTML = 'Bahrain';
        document.getElementById('bahrainTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'bangladesh'){
        document.getElementById('bangladesh').innerHTML = 'Bangladesh';
        document.getElementById('bangladeshTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //second row
    else if(guess === 'barbados'){
        document.getElementById('barbados').innerHTML = 'Barbados';
        document.getElementById('barbadosTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'belarus'){
        document.getElementById('belarus').innerHTML = 'Belarus';
        document.getElementById('belarusTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'belgium'){
        document.getElementById('belgium').innerHTML = 'Belgium';
        document.getElementById('belgiumTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'belize'){
        document.getElementById('belize').innerHTML = 'Belize';
        document.getElementById('belizeTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'benin'){
        document.getElementById('benin').innerHTML = 'Benin';
        document.getElementById('beninTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'bhutan'){
        document.getElementById('bhutan').innerHTML = 'Bhutan';
        document.getElementById('bhutanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'bolivia'){
        document.getElementById('bolivia').innerHTML = 'Bolivia';
        document.getElementById('boliviaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'bosniaandherzegovina' || guess === 'bosnia and herzegovina' || guess === 'bosnia' || guess === 'herzegovina'){
        document.getElementById('bosniaandherzegovina').innerHTML = 'Bosnia and Herzegovina';
        document.getElementById('bosniaandherzegovinaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('bosniaandherzegovina', 'bosnia and herzegovina', 'bosnia', 'herzegovina');

        score++;
   
    }
    else if(guess === 'botswana'){
        document.getElementById('botswana').innerHTML = 'Botswana';
        document.getElementById('botswanaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'brazil'){
        document.getElementById('brazil').innerHTML = 'Brazil';
        document.getElementById('brazilTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'brunei'){
        document.getElementById('brunei').innerHTML = 'Brunei';
        document.getElementById('bruneiTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'bulgaria'){
        document.getElementById('bulgaria').innerHTML = 'Bulgaria';
        document.getElementById('bulgariaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'burkinafaso' || guess === 'burkina faso'){
        document.getElementById('burkinafaso').innerHTML = 'Burkina Faso';
        document.getElementById('burkinafasoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('burkinafaso', 'burkina faso');

        score++;
   
    }
    else if(guess === 'burundi'){
        document.getElementById('burundi').innerHTML = 'Beurundi';
        document.getElementById('burundiTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //third row
    else if(guess === 'cotedivoire' || guess === "coted'ivoire" || guess === 'cote divoire' || guess === 'ivorycoast' || guess === 'ivory coast'){
        document.getElementById('cotedivoire').innerHTML = "Côte d'Ivoire";
        document.getElementById('cotedivoireTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('cotedivoire', "coted'ivoire", 'cote divoire', 'ivorycoast', 'ivory coast');

        score++;
   
    }
    else if(guess === 'caboverde' || guess === 'cabo verde' || guess === 'cape verde' || guess === 'capeverde'){
        document.getElementById('caboverde').innerHTML = 'Cabo Verde';
        document.getElementById('caboverdeTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('caboverde', 'cabo verde', 'capeverde', 'cape verde');

        score++;
   
    }
    else if(guess === 'cambodia'){
        document.getElementById('cambodia').innerHTML = 'Cambodia';
        document.getElementById('cambodiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'cameroon'){
        document.getElementById('cameroon').innerHTML = 'Cameroon';
        document.getElementById('cameroonTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'canada'){
        document.getElementById('canada').innerHTML = 'Canada';
        document.getElementById('canadaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'centralafricanrepublic' || guess === 'central african republic' || guess === 'cenafrrep' || guess === 'cen afr rep'){
        document.getElementById('centralafricanrepublic').innerHTML = 'Central African Republic';
        document.getElementById('centralafricanrepublicTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('centralafricanrepublic', 'central african republic', 'cenafrrep', 'cen afr rep');

        score++;
   
    }
    else if(guess === 'chad'){
        document.getElementById('chad').innerHTML = 'Chad';
        document.getElementById('chadTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'chile'){
        document.getElementById('chile').innerHTML = 'Chile';
        document.getElementById('chileTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'china'){
        document.getElementById('china').innerHTML = 'China';
        document.getElementById('chinaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'colombia'){
        document.getElementById('colombia').innerHTML = 'Colombia';
        document.getElementById('colombiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'comoros'){
        document.getElementById('comoros').innerHTML = 'Comoros';
        document.getElementById('comorosTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'congo'){
        document.getElementById('congo').innerHTML = 'Congo';
        document.getElementById('congoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'costarica' || guess === 'costa rica'){
        document.getElementById('costarica').innerHTML = 'Costa Rica';
        document.getElementById('costaricaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('costarica', 'costa rica');

        score++;
   
    }
    else if(guess === 'croatia'){
        document.getElementById('croatia').innerHTML = 'Croatia';
        document.getElementById('croatiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //fourth row
    else if(guess === 'cuba'){
        document.getElementById('cuba').innerHTML = 'Cuba';
        document.getElementById('cubaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'cyprus'){
        document.getElementById('cyprus').innerHTML = 'Cyprus';
        document.getElementById('cyprusTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'czechia' || guess === 'czechrepublic' || guess === 'czech republic' || guess === 'czechrep' || guess === 'czech rep'){
        document.getElementById('czechia').innerHTML = 'Czechia';
        document.getElementById('czechiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('czechia', 'czechrepublic', 'czech republic', 'czechrep', 'czech rep');

        score++;
   
    }
    else if(guess === 'democraticrepublicofthecongo' || guess === 'democratic republic of the congo' || guess === 'demrepcongo' || guess === 'dem rep congo' || guess === 'demrepofthecongo' || guess === 'dem rep of the congo'){
        document.getElementById('democraticrepublicofthecongo').innerHTML = 'Democratic Republic of the Congo';
        document.getElementById('democraticrepublicofthecongoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('democraticrepublicofthecongo', 'democratic republic of the congo', 'demrepcongo', 'dem rep congo', 'demrepofthecongo', 'dem rep of the congo');

        score++;
   
    }
    else if(guess === 'denmark'){
        document.getElementById('denmark').innerHTML = 'Denmark';
        document.getElementById('denmarkTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'djibouti'){
        document.getElementById('djibouti').innerHTML = 'Djibouti';
        document.getElementById('djiboutiTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'dominica'){
        document.getElementById('dominica').innerHTML = 'Dominica';
        document.getElementById('dominicaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
           document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'dominicanrepublic' || guess === 'dominican republic' || guess === 'dominicanrep' || guess === 'dominican rep'){
        document.getElementById('dominicanrepublic').innerHTML = 'Dominican Republic';
        document.getElementById('dominicanrepublicTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
           document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'ecuador'){
        document.getElementById('ecuador').innerHTML = 'Ecuador';
        document.getElementById('ecuadorTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'egypt'){
        document.getElementById('egypt').innerHTML = 'Egypt';
        document.getElementById('egyptTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'elsalvador' || guess === 'el salvador'){
        document.getElementById('elsalvador').innerHTML = 'El Salvador';
        document.getElementById('elsalvadorTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('elsalvador', 'el salvador');

        score++;
   
    }
    else if(guess === 'equatorialguinea' || guess === 'equatorial guinea'){
        document.getElementById('equatorialguinea').innerHTML = 'Equatorial Guinea';
        document.getElementById('equatorialguineaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('equatorialguinea', 'equatorial guinea');

        score++;
   
    }
    else if(guess === 'eritrea'){
        document.getElementById('eritrea').innerHTML = 'Eritrea';
        document.getElementById('eritreaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'estonia'){
        document.getElementById('estonia').innerHTML = 'Estonia';
        document.getElementById('estoniaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //fifth row
    else if(guess === 'eswatini'){
        document.getElementById('eswatini').innerHTML = 'Eswatini';
        document.getElementById('eswatiniTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'ethiopia'){
        document.getElementById('ethiopia').innerHTML = 'Ethiopia';
        document.getElementById('ethiopiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'fiji'){
        document.getElementById('fiji').innerHTML = 'Fiji';
        document.getElementById('fijiTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'finland'){
        document.getElementById('finland').innerHTML = 'Finland';
        document.getElementById('finlandTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'france'){
        document.getElementById('france').innerHTML = 'France';
        document.getElementById('franceTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'gabon'){
        document.getElementById('gabon').innerHTML = 'Gabon';
        document.getElementById('gabonTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'gambia'){
        document.getElementById('gambia').innerHTML = 'Gambia';
        document.getElementById('gambiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'georgia'){
        document.getElementById('georgia').innerHTML = 'Georgia';
        document.getElementById('georgiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'germany'){
        document.getElementById('germany').innerHTML = 'Germany';
        document.getElementById('germanyTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'ghana'){
        document.getElementById('ghana').innerHTML = 'Ghana';
        document.getElementById('ghanaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'greece'){
        document.getElementById('greece').innerHTML = 'Greece';
        document.getElementById('greeceTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'grenada'){
        document.getElementById('grenada').innerHTML = 'Grenada';
        document.getElementById('grenadaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'guatemala'){
        document.getElementById('guatemala').innerHTML = 'Guatemala';
        document.getElementById('guatemalaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'guinea'){
        document.getElementById('guinea').innerHTML = 'Guinea';
        document.getElementById('guineaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //sixth row
    else if(guess === 'guinea-bissau' || guess === 'guineabissau' || guess === 'guinea bissau'){
        document.getElementById('guinea-bissau').innerHTML = 'Guinea-Bissau';
        document.getElementById('guinea-bissauTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('guinea-bissau', 'guineabissau', 'guinea bissau');

        score++;
   
    }
    else if(guess === 'guyana'){
        document.getElementById('guyana').innerHTML = 'Guyana';
        document.getElementById('guyanaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'haiti'){
        document.getElementById('haiti').innerHTML = 'Haiti';
        document.getElementById('haitiTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'holysee' || guess === 'holy see'){
        document.getElementById('holysee').innerHTML = 'Holy See';
        document.getElementById('holyseeTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('holysee', 'holy see');

        score++;
   
    }
    else if(guess === 'honduras'){
        document.getElementById('honduras').innerHTML = 'Honduras';
        document.getElementById('hondurasTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'hungary'){
        document.getElementById('hungary').innerHTML = 'Hungary';
        document.getElementById('hungaryTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'iceland'){
        document.getElementById('iceland').innerHTML = 'Iceland';
        document.getElementById('icelandTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'india'){
        document.getElementById('india').innerHTML = 'India';
        document.getElementById('indiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'indonesia'){
        document.getElementById('indonesia').innerHTML = 'Indonesia';
        document.getElementById('indonesiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'iran'){
        document.getElementById('iran').innerHTML = 'Iran';
        document.getElementById('iranTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'iraq'){
        document.getElementById('iraq').innerHTML = 'Iraq';
        document.getElementById('iraqTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'ireland'){
        document.getElementById('ireland').innerHTML = 'Ireland';
        document.getElementById('irelandTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'israel'){
        document.getElementById('israel').innerHTML = 'Israel';
        document.getElementById('israelTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'italy'){
        document.getElementById('italy').innerHTML = 'Italy';
        document.getElementById('italyTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //seventh row
    else if(guess === 'jamaica'){
        document.getElementById('jamaica').innerHTML = 'Jamaica';
        document.getElementById('jamaicaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'japan'){
        document.getElementById('japan').innerHTML = 'Japan';
        document.getElementById('japanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'jordan'){
        document.getElementById('jordan').innerHTML = 'Jordan';
        document.getElementById('jordanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'kazakhstan'){
        document.getElementById('kazakhstan').innerHTML = 'Kazakhstan';
        document.getElementById('kazakhstanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'kenya'){
        document.getElementById('kenya').innerHTML = 'Kenya';
        document.getElementById('kenyaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'kiribati'){
        document.getElementById('kiribati').innerHTML = 'Kiribati';
        document.getElementById('kiribatiTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'kosovo'){
        document.getElementById('kosovo').innerHTML = 'Kosovo';
        document.getElementById('kosovoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'kuwait'){
        document.getElementById('kuwait').innerHTML = 'Kuwait';
        document.getElementById('kuwaitTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'kyrgyzstan'){
        document.getElementById('kyrgyzstan').innerHTML = 'Kyrgyzstan';
        document.getElementById('kyrgyzstanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'laos'){
        document.getElementById('laos').innerHTML = 'Laos';
        document.getElementById('laosTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'latvia'){
        document.getElementById('latvia').innerHTML = 'Latvia';
        document.getElementById('latviaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'lebanon'){
        document.getElementById('lebanon').innerHTML = 'Lebanon';
        document.getElementById('lebanonTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'lesotho'){
        document.getElementById('lesotho').innerHTML = 'Lesotho';
        document.getElementById('lesothoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'liberia'){
        document.getElementById('liberia').innerHTML = 'Liberia';
        document.getElementById('liberiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }

    //eigth row
    else if(guess === 'libya'){
        document.getElementById('libya').innerHTML = 'Libya';
        document.getElementById('libyaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'liechtenstein'){
        document.getElementById('liechtenstein').innerHTML = 'Liechtenstein';
        document.getElementById('liechtensteinTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
           document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'lithuania'){
        document.getElementById('lithuania').innerHTML = 'Lithuania';
        document.getElementById('lithuaniaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'luxembourg'){
        document.getElementById('luxembourg').innerHTML = 'Luxembourg';
        document.getElementById('luxembourgTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'madagascar'){
        document.getElementById('madagascar').innerHTML = 'Madagascar';
        document.getElementById('madagascarTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'malawi'){
        document.getElementById('malawi').innerHTML = 'Malawi';
        document.getElementById('malawiTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'malaysia'){
        document.getElementById('malaysia').innerHTML = 'Malaysia';
        document.getElementById('malaysiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'maldives'){
        document.getElementById('maldives').innerHTML = 'Maldives';
        document.getElementById('maldivesTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'mali'){
        document.getElementById('mali').innerHTML = 'Mali';
        document.getElementById('maliTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'malta'){
        document.getElementById('malta').innerHTML = 'Malta';
        document.getElementById('maltaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'marshallislands' || guess === 'marshall islands'){
        document.getElementById('marshallislands').innerHTML = 'Marshall Islands';
        document.getElementById('marshallislandsTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('marshallislands', 'marshall islands');

        score++;
   
    }
    else if(guess === 'mauritania'){
        document.getElementById('mauritania').innerHTML = 'Mauritania';
        document.getElementById('mauritaniaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'mauritius'){
        document.getElementById('mauritius').innerHTML = 'Mauritius';
        document.getElementById('mauritiusTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'mexico'){
        document.getElementById('mexico').innerHTML = 'Mexico';
        document.getElementById('mexicoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //ninth row
    else if(guess === 'micronesia'){
        document.getElementById('micronesia').innerHTML = 'Micronesia';
        document.getElementById('micronesiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'moldova'){
        document.getElementById('moldova').innerHTML = 'Moldova';
        document.getElementById('moldovaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'monaco'){
        document.getElementById('monaco').innerHTML = 'Monaco';
        document.getElementById('monacoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'mongolia'){
        document.getElementById('mongolia').innerHTML = 'Mongolia';
        document.getElementById('mongoliaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'montenegro'){
        document.getElementById('montenegro').innerHTML = 'Montenegro';
        document.getElementById('montenegroTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'morocco'){
        document.getElementById('morocco').innerHTML = 'Morocco';
        document.getElementById('moroccoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'mozambique'){
        document.getElementById('mozambique').innerHTML = 'Mozambique';
        document.getElementById('mozambiqueTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'myanmar'){
        document.getElementById('myanmar').innerHTML = 'Myanmar';
        document.getElementById('myanmarTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'namibia'){
        document.getElementById('namibia').innerHTML = 'Namibia';
        document.getElementById('namibiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'nauru'){
        document.getElementById('nauru').innerHTML = 'Nauru';
        document.getElementById('nauruTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'nepal'){
        document.getElementById('nepal').innerHTML = 'Nepal';
        document.getElementById('nepalTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'netherlands'){
        document.getElementById('netherlands').innerHTML = 'Netherlands';
        document.getElementById('netherlandsTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'newzealand' || guess === 'new zealand'){
        document.getElementById('newzealand').innerHTML = 'New Zealand';
        document.getElementById('newzealandTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('newzealand', 'new zealand');

        score++;
   
    }
    else if(guess === 'nicaragua'){
        document.getElementById('nicaragua').innerHTML = 'Nicaragua';
        document.getElementById('nicaraguaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //tenth row
    else if(guess === 'niger'){
        document.getElementById('niger').innerHTML = 'Niger';
        document.getElementById('nigerTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'nigeria'){
        document.getElementById('nigeria').innerHTML = 'Nigeria';
        document.getElementById('nigeriaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'northkorea' || guess === 'north korea'){
        document.getElementById('northkorea').innerHTML = 'North Korea';
        document.getElementById('northkoreaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('northkorea', 'north korea');

        score++;
   
    }
    else if(guess === 'northmacedonia' || guess === 'north macedonia'){
        document.getElementById('northmacedonia').innerHTML = 'North Macedonia';
        document.getElementById('northmacedoniaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('northmacedonia', 'north macedonia');

        score++;
   
    }
    else if(guess === 'norway'){
        document.getElementById('norway').innerHTML = 'Norway';
        document.getElementById('norwayTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'oman'){
        document.getElementById('oman').innerHTML = 'Oman';
        document.getElementById('omanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'pakistan'){
        document.getElementById('pakistan').innerHTML = 'Pakistan';
        document.getElementById('pakistanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'palau'){
        document.getElementById('palau').innerHTML = 'Palau';
        document.getElementById('palauTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'palestinestate' || guess === 'palestine state'){
        document.getElementById('palestinestate').innerHTML = 'Palestine State';
        document.getElementById('palestinestateTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('palestinestate', 'palestine state');

        score++;
   
    }
    else if(guess === 'panama'){
        document.getElementById('panama').innerHTML = 'Panama';
        document.getElementById('panamaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'papuanewguinea' || guess === 'papua new guinea'){
        document.getElementById('papuanewguinea').innerHTML = 'Papua New Guinea';
        document.getElementById('papuanewguineaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('papuanewguinea', 'papua new guinea');

        score++;
   
    }
    else if(guess === 'paraguay'){
        document.getElementById('paraguay').innerHTML = 'Paraguay';
        document.getElementById('paraguayTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'peru'){
        document.getElementById('peru').innerHTML = 'Peru';
        document.getElementById('peruTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'philippines'){
        document.getElementById('philippines').innerHTML = 'Philippines';
        document.getElementById('philippinesTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //eleventh row
    else if(guess === 'poland'){
        document.getElementById('poland').innerHTML = 'Poland';
        document.getElementById('polandTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'portugal'){
        document.getElementById('portugal').innerHTML = 'Portugal';
        document.getElementById('portugalTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'qatar'){
        document.getElementById('qatar').innerHTML = 'Qatar';
        document.getElementById('qatarTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'romania'){
        document.getElementById('romania').innerHTML = 'Romania';
        document.getElementById('romaniaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'russia'){
        document.getElementById('russia').innerHTML = 'Russia';
        document.getElementById('russiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'rwanda'){
        document.getElementById('rwanda').innerHTML = 'Rwanda';
        document.getElementById('rwandaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'saintkittsandnevis' || guess === 'saint kitts and nevis' || guess === 'stkittsandnevis' || guess === 'st kitts and nevis'){
        document.getElementById('saintkittsandnevis').innerHTML = 'Saint Kitts and Nevis';
        document.getElementById('saintkittsandnevisTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('saintkittsandnevis', 'saint kitts and nevis', 'stkittsandnevis', 'st kitts and nevis');

        score++;
   
    }
    else if(guess === 'saintlucia' || guess === 'saint lucia' || guess === 'stlucia' || guess === 'st lucia'){
        document.getElementById('saintlucia').innerHTML = 'Saint Lucia';
        document.getElementById('saintluciaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('saintlucia', 'saint lucia', 'stlucia', 'st lucia');
        
        score++;
   
    }
    else if(guess === 'saintvincentandthegrenadines' || guess === 'saint vincent and the grenadines' || guess === 'stvincentandthegrenadines' || guess === 'st vincent and the grenadines'){
        document.getElementById('saintvincentandthegrenadines').innerHTML = 'Saint Vincent and the Grenadines';
        document.getElementById('saintvincentandthegrenadinesTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('saintvincentandthegrenadines', 'saint vincent and the grenadines', 'stvincentandthegrenadines', 'st vincent and the grenadines');
        
        score++;
   
    }
    else if(guess === 'samoa'){
        document.getElementById('samoa').innerHTML = 'Samoa';
        document.getElementById('samoaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'sanmarino' || guess === 'san marino'){
        document.getElementById('sanmarino').innerHTML = 'San Marino';
        document.getElementById('sanmarinoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('sanmarino', 'san marino');

        score++;
   
    }
    else if(guess === 'saotomeandprincipe' || guess === 'sao tome and principe'){
        document.getElementById('saotomeandprincipe').innerHTML = 'Sao Tome and Principe';
        document.getElementById('saotomeandprincipeTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('saotomeandprincipe', 'sao tome and principe');

        score++;
   
    }
    else if(guess === 'saudiarabia' || guess === 'saudi arabia'){
        document.getElementById('saudiarabia').innerHTML = 'Saudi Arabia';
        document.getElementById('saudiarabiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('saudiarabia', 'saudi arabia'); 

        score++;
   
    }
    else if(guess === 'senegal'){
        document.getElementById('senegal').innerHTML = 'Senegal';
        document.getElementById('senegalTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //twelfth row
    else if(guess === 'serbia'){
        document.getElementById('serbia').innerHTML = 'Serbia';
        document.getElementById('serbiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'seychelles'){
        document.getElementById('seychelles').innerHTML = 'Seychelles';
        document.getElementById('seychellesTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'sierraleone' || guess === 'sierra leone'){
        document.getElementById('sierraleone').innerHTML = 'Sierra Leone';
        document.getElementById('sierraleoneTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('sierraleone', 'sierra leone');

        score++;
   
    }
    else if(guess === 'singapore'){
        document.getElementById('singapore').innerHTML = 'Singapore';
        document.getElementById('singaporeTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'slovakia'){
        document.getElementById('slovakia').innerHTML = 'Slovakia';
        document.getElementById('slovakiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'slovenia'){
        document.getElementById('slovenia').innerHTML = 'Slovenia';
        document.getElementById('sloveniaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'solomonislands' || guess === 'solomon islands'){
        document.getElementById('solomonislands').innerHTML = 'Solomon Islands';
        document.getElementById('solomonislandsTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('solomonislands', 'solomon islands')
        
        score++;
   
    }
    else if(guess === 'somalia'){
        document.getElementById('somalia').innerHTML = 'Somalia';
        document.getElementById('somaliaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'southafrica' || guess === 'south africa'){
        document.getElementById('southafrica').innerHTML = 'South Africa';
        document.getElementById('southafricaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('southafrica', 'south africa')
        
        score++;
   
    }
    else if(guess === 'southkorea' || guess === 'south korea'){
        document.getElementById('southkorea').innerHTML = 'South Korea';
        document.getElementById('southkoreaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('southkorea', 'south korea')
        
        score++;
   
    }
    else if(guess === 'southsudan' || guess === 'south sudan'){
        document.getElementById('southsudan' || guess === 'south sudan').innerHTML = 'South Sudan';
        document.getElementById('southsudanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('southsudan', 'south sudan')
        
        score++;
   
    }
    else if(guess === 'spain'){
        document.getElementById('spain').innerHTML = 'Spain';
        document.getElementById('spainTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'srilanka' || guess === 'sri lanka'){
        document.getElementById('srilanka').innerHTML = 'Sri Lanka';
        document.getElementById('srilankaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('srilanka', 'sri lanka')
        
        score++;
   
    }
    else if(guess === 'sudan'){
        document.getElementById('sudan').innerHTML = 'Sudan';
        document.getElementById('sudanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //13th row
    else if(guess === 'suriname'){
        document.getElementById('suriname').innerHTML = 'Suriname';
        document.getElementById('surinameTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'sweden'){
        document.getElementById('sweden').innerHTML = 'Sweden';
        document.getElementById('swedenTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'switzerland'){
        document.getElementById('switzerland').innerHTML = 'Switzerland';
        document.getElementById('switzerlandTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'syria'){
        document.getElementById('syria').innerHTML = 'Syria';
        document.getElementById('syriaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'tajikistan'){
        document.getElementById('tajikistan').innerHTML = 'Tajikistan';
        document.getElementById('tajikistanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'tanzania'){
        document.getElementById('tanzania').innerHTML = 'Tanzania';
        document.getElementById('tanzaniaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'thailand'){
        document.getElementById('thailand').innerHTML = 'Thailand';
        document.getElementById('thailandTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'timor-leste' || guess === 'timorleste' || guess === 'timor leste'){
        document.getElementById('timor-leste').innerHTML = 'Timor-Leste';
        document.getElementById('timor-lesteTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('timor-leste', 'timorleste', 'timor leste')
        
        score++;
   
    }
    else if(guess === 'togo'){
        document.getElementById('togo').innerHTML = 'Togo';
        document.getElementById('togoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'tonga'){
        document.getElementById('tonga').innerHTML = 'Tonga';
        document.getElementById('tongaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'trinidadandtobago' || guess === 'trinidad and tobago'){
        document.getElementById('trinidadandtobago').innerHTML = 'Trinidad and Tobago';
        document.getElementById('trinidadandtobagoTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('trinidadandtobago', 'trinidad and tobago')
        
        score++;
   
    }
    else if(guess === 'tunisia'){
        document.getElementById('tunisia').innerHTML = 'Tunisia';
        document.getElementById('tunisiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'turkey'){
        document.getElementById('turkey').innerHTML = 'Turkey';
        document.getElementById('turkeyTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'turkmenistan'){
        document.getElementById('turkmenistan').innerHTML = 'Turkmenistan';
        document.getElementById('turkmenistanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }


    //14th row
    else if(guess === 'tuvalu'){
        document.getElementById('tuvalu').innerHTML = 'Tuvalu';
        document.getElementById('tuvaluTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'uganda'){
        document.getElementById('uganda').innerHTML = 'Uganda';
        document.getElementById('ugandaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'ukraine'){
        document.getElementById('ukraine').innerHTML = 'Ukraine';
        document.getElementById('ukraineTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'unitedarabemirates' || guess === 'united arab emirates'){
        document.getElementById('unitedarabemirates').innerHTML = 'United Arab Emirates';
        document.getElementById('unitedarabemiratesTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('unitedarabemirates', 'united arab emirates');
        
        score++;
   
    }
    else if(guess === 'unitedkingdom' || guess === 'united kingdom' || guess === 'uk'){
        document.getElementById('unitedkingdom').innerHTML = 'United Kingdom';
        document.getElementById('unitedkingdomTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('unitedkingdom', 'united kingdom', 'uk');

        score++;
   
    }
    else if(guess === 'unitedstatesofamerica' || guess === 'united states of america' || guess === 'unitedstates' || guess === 'united states' || guess === 'usa' || guess === 'us'){
        document.getElementById('unitedstatesofamerica').innerHTML = 'United States of America';
        document.getElementById('unitedstatesofamericaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        guessedCountries.push('unitedstatesofamerica', 'united states of america', 'unitedstates', 'united states', 'usa', 'us');
        
        score++;
   
    }
    else if(guess === 'uruguay'){
        document.getElementById('uruguay').innerHTML = 'Uruguay';
        document.getElementById('uruguayTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'uzbekistan'){
        document.getElementById('uzbekistan').innerHTML = 'Uzbekistan';
        document.getElementById('uzbekistanTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'vanuatu'){
        document.getElementById('vanuatu').innerHTML = 'Vanuatu';
        document.getElementById('vanuatuTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'venezuela'){
        document.getElementById('venezuela').innerHTML = 'Venezuela';
        document.getElementById('venezuelaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'vietnam'){
        document.getElementById('vietnam').innerHTML = 'Vietnam';
        document.getElementById('vietnamTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'yemen'){
        document.getElementById('yemen').innerHTML = 'Yemen';
        document.getElementById('yemenTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'zambia'){
        document.getElementById('zambia').innerHTML = 'Zambia';
        document.getElementById('zambiaTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else if(guess === 'zimbabwe'){
        document.getElementById('zimbabwe').innerHTML = 'Zimbabwe';
        document.getElementById('zimbabweTD').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';
        document.getElementById('check').style.backgroundColor = 'rgba(0, 255, 0, 0.726)';

        score++;
   
    }
    else{
        document.getElementById('check').style.backgroundColor = 'rgba(175, 21, 21, 0.842)';

    }

    document.getElementById('countryInput').value = ''
    document.getElementById('score').innerHTML = score;
    guessedCountries.push(guess);

}

function showAnswers(){
    document.getElementById('afghanistan').innerHTML = 'Afghanistan';
    document.getElementById('albania').innerHTML = 'Albania';
    document.getElementById('algeria').innerHTML = 'Algeria';
    document.getElementById('andorra').innerHTML = 'Andorra';
    document.getElementById('angola').innerHTML = 'Angola';
    document.getElementById('antiguaandbarbuda').innerHTML = 'Antigua and Barbuda';
    document.getElementById('argentina').innerHTML = 'Argentina';
    document.getElementById('armenia').innerHTML = 'Armenia';
    document.getElementById('australia').innerHTML = 'Australia';
    document.getElementById('austria').innerHTML = 'Austria';
    document.getElementById('azerbaijan').innerHTML = 'Azerbaijan';
    document.getElementById('bahamas').innerHTML = 'Bahamas';
    document.getElementById('bahrain').innerHTML = 'Bahrain';
    document.getElementById('bangladesh').innerHTML = 'Bangladesh';

    document.getElementById('barbados').innerHTML = 'Barbados';
    document.getElementById('belarus').innerHTML = 'Belarus';
    document.getElementById('belgium').innerHTML = 'Belgium';
    document.getElementById('belize').innerHTML = 'Belize';
    document.getElementById('benin').innerHTML = 'Benin';
    document.getElementById('bhutan').innerHTML = 'Bhutan';
    document.getElementById('bolivia').innerHTML = 'Bolivia';
    document.getElementById('bosniaandherzegovina').innerHTML = 'Bosnia and Herzegovina';
    document.getElementById('botswana').innerHTML = 'Botswana';
    document.getElementById('brazil').innerHTML = 'Brazil';
    document.getElementById('brunei').innerHTML = 'Brunei';
    document.getElementById('bulgaria').innerHTML = 'Bulgaria';
    document.getElementById('burkinafaso').innerHTML = 'Burkina Faso';
    document.getElementById('burundi').innerHTML = 'Beurundi';

    document.getElementById('cotedivoire').innerHTML = "Cote d'Ivoire";
    document.getElementById('caboverde').innerHTML = 'Cabo Verde';
    document.getElementById('cambodia').innerHTML = 'Cambodia';
    document.getElementById('cameroon').innerHTML = 'Cameroon';
    document.getElementById('canada').innerHTML = 'Canada';
    document.getElementById('centralafricanrepublic').innerHTML = 'Central African Republic';
    document.getElementById('chad').innerHTML = 'Chad';
    document.getElementById('chile').innerHTML = 'Chile';
    document.getElementById('china').innerHTML = 'China';
    document.getElementById('colombia').innerHTML = 'Colombia';
    document.getElementById('comoros').innerHTML = 'Comoros';
    document.getElementById('congo').innerHTML = 'Congo';
    document.getElementById('costarica').innerHTML = 'Costa Rica';
    document.getElementById('croatia').innerHTML = 'Croatia';

    document.getElementById('cuba').innerHTML = "Cuba";
    document.getElementById('cyprus').innerHTML = 'Cyprus';
    document.getElementById('czechia').innerHTML = 'Czechia';
    document.getElementById('democraticrepublicofthecongo').innerHTML = 'Democratic Republic of the Congo';
    document.getElementById('denmark').innerHTML = 'Denmark';
    document.getElementById('djibouti').innerHTML = 'Djibouti';
    document.getElementById('dominica').innerHTML = 'Dominica';
    document.getElementById('dominicanrepublic').innerHTML = 'Dominican Republic';
    document.getElementById('ecuador').innerHTML = 'Ecuador';
    document.getElementById('egypt').innerHTML = 'Egypt';
    document.getElementById('elsalvador').innerHTML = 'El Salvador';
    document.getElementById('equatorialguinea').innerHTML = 'Equatorial Guinea';
    document.getElementById('eritrea').innerHTML = 'Eritrea';
    document.getElementById('estonia').innerHTML = 'Estonia';

    document.getElementById('eswatini').innerHTML = "Eswatini";
    document.getElementById('ethiopia').innerHTML = 'Ethiopia';
    document.getElementById('fiji').innerHTML = 'Fiji';
    document.getElementById('finland').innerHTML = 'Finland';
    document.getElementById('france').innerHTML = 'France';
    document.getElementById('gabon').innerHTML = 'Gabon';
    document.getElementById('gambia').innerHTML = 'Gambia';
    document.getElementById('georgia').innerHTML = 'Georgia';
    document.getElementById('germany').innerHTML = 'Germany';
    document.getElementById('ghana').innerHTML = 'Ghana';
    document.getElementById('greece').innerHTML = 'Greece';
    document.getElementById('grenada').innerHTML = 'Grenada';
    document.getElementById('guatemala').innerHTML = 'Guatemala';
    document.getElementById('guinea').innerHTML = 'Guinea';

    document.getElementById('guinea-bissau').innerHTML = "Guinea-Bissau";
    document.getElementById('guyana').innerHTML = 'Guyana';
    document.getElementById('haiti').innerHTML = 'Haiti';
    document.getElementById('holysee').innerHTML = 'Holy See';
    document.getElementById('honduras').innerHTML = 'Honduras';
    document.getElementById('hungary').innerHTML = 'Hungary';
    document.getElementById('iceland').innerHTML = 'Iceland';
    document.getElementById('india').innerHTML = 'India';
    document.getElementById('indonesia').innerHTML = 'Indonesia';
    document.getElementById('iran').innerHTML = 'Iran';
    document.getElementById('iraq').innerHTML = 'Iraq';
    document.getElementById('ireland').innerHTML = 'Ireland';
    document.getElementById('israel').innerHTML = 'Israel';
    document.getElementById('italy').innerHTML = 'Italy';

    document.getElementById('jamaica').innerHTML = "Jamaica";
    document.getElementById('japan').innerHTML = 'Japan';
    document.getElementById('jordan').innerHTML = 'Jordan';
    document.getElementById('kazakhstan').innerHTML = 'Kazakhstan';
    document.getElementById('kenya').innerHTML = 'Kenya';
    document.getElementById('kiribati').innerHTML = 'Kiribati';
    document.getElementById('kosovo').innerHTML = 'Kosovo';
    document.getElementById('kuwait').innerHTML = 'Kuwait';
    document.getElementById('kyrgyzstan').innerHTML = 'Kyrgyzstan';
    document.getElementById('laos').innerHTML = 'Laos';
    document.getElementById('latvia').innerHTML = 'Latvia';
    document.getElementById('lebanon').innerHTML = 'Lebanon';
    document.getElementById('lesotho').innerHTML = 'Lesotho';
    document.getElementById('liberia').innerHTML = 'Liberia';

    document.getElementById('libya').innerHTML = 'Libya';
    document.getElementById('liechtenstein').innerHTML = "Liechtenstein";
    document.getElementById('lithuania').innerHTML = 'Lithuania';
    document.getElementById('luxembourg').innerHTML = 'Luxembourg';
    document.getElementById('madagascar').innerHTML = 'Madagascar';
    document.getElementById('malawi').innerHTML = 'Malawi';
    document.getElementById('malaysia').innerHTML = 'Malaysia';
    document.getElementById('maldives').innerHTML = 'Maldives';
    document.getElementById('mali').innerHTML = 'Mali';
    document.getElementById('malta').innerHTML = 'Malta';
    document.getElementById('marshallislands').innerHTML = 'Marshall Islands';
    document.getElementById('mauritania').innerHTML = 'Mauritania';
    document.getElementById('mauritius').innerHTML = 'Mauritius';
    document.getElementById('mexico').innerHTML = 'Mexico';

    document.getElementById('micronesia').innerHTML = 'Micronesia';
    document.getElementById('moldova').innerHTML = "Moldova";
    document.getElementById('monaco').innerHTML = 'Monaco';
    document.getElementById('mongolia').innerHTML = 'Mongolia';
    document.getElementById('montenegro').innerHTML = 'Montenegro';
    document.getElementById('morocco').innerHTML = 'Morocco';
    document.getElementById('mozambique').innerHTML = 'Mozambique';
    document.getElementById('myanmar').innerHTML = 'Myanmar';
    document.getElementById('namibia').innerHTML = 'Namibia';
    document.getElementById('nauru').innerHTML = 'Nauru';
    document.getElementById('nepal').innerHTML = 'Nepal';
    document.getElementById('netherlands').innerHTML = 'Netherlands';
    document.getElementById('newzealand').innerHTML = 'New Zealand';
    document.getElementById('nicaragua').innerHTML = 'Nicaragua';

    document.getElementById('niger').innerHTML = 'Niger';
    document.getElementById('nigeria').innerHTML = "Nigeria";
    document.getElementById('northkorea').innerHTML = 'North Korea';
    document.getElementById('northmacedonia').innerHTML = 'North Macedonia';
    document.getElementById('norway').innerHTML = 'Norway';
    document.getElementById('oman').innerHTML = 'Oman';
    document.getElementById('pakistan').innerHTML = 'Pakistan';
    document.getElementById('palau').innerHTML = 'Palau';
    document.getElementById('palestinestate').innerHTML = 'Palestine State';
    document.getElementById('panama').innerHTML = 'Panama';
    document.getElementById('papuanewguinea').innerHTML = 'Papua New Guinea';
    document.getElementById('paraguay').innerHTML = 'Paraguay';
    document.getElementById('peru').innerHTML = 'Peru';
    document.getElementById('philippines').innerHTML = 'Philippines';

    document.getElementById('poland').innerHTML = 'Poland';
    document.getElementById('portugal').innerHTML = "Portugal";
    document.getElementById('qatar').innerHTML = 'Qatar';
    document.getElementById('romania').innerHTML = 'Romania';
    document.getElementById('russia').innerHTML = 'Russia';
    document.getElementById('rwanda').innerHTML = 'Rwanda';
    document.getElementById('saintkittsandnevis').innerHTML = 'Saint Kitts and Nevis';
    document.getElementById('saintlucia').innerHTML = 'Saint Lucia';
    document.getElementById('saintvincentandthegrenadines').innerHTML = 'Saint Vincent and the Grenadines';
    document.getElementById('samoa').innerHTML = 'Samoa';
    document.getElementById('sanmarino').innerHTML = 'San Marino';
    document.getElementById('saotomeandprincipe').innerHTML = 'Sao Tome and Principe';
    document.getElementById('saudiarabia').innerHTML = 'Saudi Arabia';
    document.getElementById('senegal').innerHTML = 'Senegal';

    document.getElementById('serbia').innerHTML = 'Serbia';
    document.getElementById('seychelles').innerHTML = "Seychelles";
    document.getElementById('sierraleone').innerHTML = 'Sierra Leone';
    document.getElementById('singapore').innerHTML = 'Singapore';
    document.getElementById('slovakia').innerHTML = 'Slovakia';
    document.getElementById('slovenia').innerHTML = 'Slovenia';
    document.getElementById('solomonislands').innerHTML = 'Solomon Islands';
    document.getElementById('somalia').innerHTML = 'Somalia';
    document.getElementById('southafrica').innerHTML = 'South Africa';
    document.getElementById('southkorea').innerHTML = 'South Korea';
    document.getElementById('southsudan').innerHTML = 'South Sudan';
    document.getElementById('spain').innerHTML = 'Spain';
    document.getElementById('srilanka').innerHTML = 'Sri Lanka';
    document.getElementById('sudan').innerHTML = 'Sudan';

    document.getElementById('suriname').innerHTML = 'Suriname';
    document.getElementById('sweden').innerHTML = "Sweden";
    document.getElementById('switzerland').innerHTML = 'Switzerland';
    document.getElementById('syria').innerHTML = 'Syria';
    document.getElementById('tajikistan').innerHTML = 'Tajikistan';
    document.getElementById('tanzania').innerHTML = 'Tanzania';
    document.getElementById('thailand').innerHTML = 'Thailand';
    document.getElementById('timor-leste').innerHTML = 'Timor-Leste';
    document.getElementById('togo').innerHTML = 'Togo';
    document.getElementById('tonga').innerHTML = 'Tonga';
    document.getElementById('trinidadandtobago').innerHTML = 'Trinidad and Tobago';
    document.getElementById('tunisia').innerHTML = 'Tunisia';
    document.getElementById('turkey').innerHTML = 'Turkey';
    document.getElementById('turkmenistan').innerHTML = 'Turkmenistan';

    document.getElementById('tuvalu').innerHTML = 'Tuvalu';
    document.getElementById('uganda').innerHTML = "Uganda";
    document.getElementById('ukraine').innerHTML = 'Ukraine';
    document.getElementById('unitedarabemirates').innerHTML = 'United Arab Emirates';
    document.getElementById('unitedkingdom').innerHTML = 'United Kingdom';
    document.getElementById('unitedstatesofamerica').innerHTML = 'United States of America';
    document.getElementById('uruguay').innerHTML = 'Uruguay';
    document.getElementById('uzbekistan').innerHTML = 'Uzbekistan';
    document.getElementById('vanuatu').innerHTML = 'Vanuatu';
    document.getElementById('venezuela').innerHTML = 'Venezuela';
    document.getElementById('vietnam').innerHTML = 'Vietnam';
    document.getElementById('yemen').innerHTML = 'Yemen';
    document.getElementById('zambia').innerHTML = 'Zambia';
    document.getElementById('zimbabwe').innerHTML = 'Zimbabwe';

}


function Country(name, printname, tdname, alt1, alt2, alt3, alt4, alt5){
    this.name = name;
    this.printname = printname;
    this.tdname = tdname;
    this.alt1 = alt1;
    this.alt2 = alt2;
    this.alt3 = alt3;
    this.alt4 = alt4;
    this.alt5 = alt5;
}
var afghanistan = new Country('afghanistan', 'Afghanistan', 'afghanistanTD');
var algeria = new Country('algeria', 'Algeria', 'algeriaTD');

if(guess === Country.name){
    document.getElementById(Country.name).innerHTML = Country.printname;
}