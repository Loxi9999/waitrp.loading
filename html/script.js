let currentIndex = 0
let imagesCount = 5

let tips = [
    "Regulamin został zaktualizowany <span class='bold'>16 grudnia</span>, pamiętaj aby zapoznać się z nim przed rozpoczęciem rozgrywki.",
    "Po stworzeniu każdej postaci spotkasz się z <span class='bold'>testem wiedzy</span>, przygotuj się z regulaminu i pojęć roleplay'u, aby nie popełnić błędu!",
    "Czy wiesz, że Wait Roleplay pierwotnie miał nazywać się Sarnia Roleplay?",
    "Nasz jedyny oficjalny sklep znajdziesz pod adresem <span class='bold'>https://waitrp.pl</span>. Zakupione Wait Coins wykorzystasz pod /sklep bezpośrednio w grze. Zakup przedmiotów u osób trzecich jest kategorycznie zabroniony.",
    "Projekt WaitRP: Rebirth powstawał 4 miesiące, od sierpnia do grudnia. Pracowaliśmy nad wszystkim- od nazwy, po logo aż po <span class='bold'>całą stronę techniczną serwera napisaną od zera</span>.",
    "Swój ekwipunek uruchomisz pod przyciskiem <span class='bold'>F2</span>.",
    "Na serwerze dostępne są osiągnięcia, sprawdź je w menu pod przyciskiem <span class='bold'>F1</span>.",
    "Telefon oraz kartę SIM zakupisz w <span class='bold'>sklepie multimedialnym.</span>.",
    "Pamiętaj o immersji!",
    "Chcesz się zatrudnić? Odwiedź Departament Sprawiedliwości i menu zatrudniania.",
    "Chcesz znaleźć pracę, spróbować swoich sił w innym miejscu niż w pracy od Urzędu? Odwiedź na naszym Discordzie kanał <span class='bold'>#Podania</span>.",
    "Jest to już 5 odsłona najlepszego serwera w Polsce",
    "Jesteś nowy/a w tym świecie? Odwiedź na naszym discordzie kanał <span class='bold'>jak-zacząć</span>!",
    "Brak kasy ci doskwiera? Nie martw się, zerknij na kanał eventy i zgarnij nową furę lub inne nagrody!",
    "Masz problem? Skontaktuj się z administracją na naszym Discordzie.",
    "Pod komendą /sklep znajdziesz nasz itemshop serwerowy, gdzie otworzysz skrzynie.", 
    "Jeżeli widzisz kogoś łamiącego regulamin serwera niezwłocznie go zgłoś do naszej Administracji.",
    "Pamiętaj aby nigdy nie wychodzić z roli.",
    "Zauważyłeś/aś błąd? Zgłoś go na naszym Discordzie i pomóż nam tworzyć lepszy serwer.",
    "Jesteś ambitnym i pomocnym graczem? Chcesz pomagać i się rozwijać? Zapraszamy w nasze szeregi! Organizujemy rekrutacje do Administracji.",
    "Pamiętaj, że czat LOOC służy tylko do komunikowania się z innymi graczami na temat problemów w grze.",
    "Nie zapomnij o czacie głosowym! Możesz odzywać się bezpośrednio w grze za pomocą przycisku <span class='bold'>N</span>.",
    "Na naszym serwerze pod ALT znajdziesz różne interakcje ze światem, natomiast pod F1 przejrzyste menu.",
    "Planujemy ekscytujące eventy! Bądź czujny na kanale eventy bezpośrednio na naszej aplikacji.",
    "Dziękujemy naszym darczyńcom za wsparcie serwera!",
    "Przejrzyj dostępne frakcje na serwerze i panujące w nich zasady, może odnajdziesz swoje powołanie!",
    // "Grając u nas na serwerze masz okazję wygrać <span class='bold'> AŻ DO 6.000PLN</span>! Koniecznie odwiedź kanał ferie-z-waitrp na naszym serwerze Discord i dowiedz się więcej. Finał już 17 lutego o 18:00 na twitch.tv/waitrp",
    // "JUŻ W NAJBLIŻSZĄ SOBOTĘ 17 LUTEGO O 18:00 NA TWITCH.TV/WAITRP ODBĘDZIE SIĘ WIELKI FINAŁ AKCJI FERIE Z WAITRP. WYGRAJ DO 6.000ZŁ!!!!",
]

const getRandomTip = () => {
    return tips[Math.floor(Math.random() * tips.length)]
}

$(".loadingScreen > .loading > .desc").html(`${getRandomTip()}`)

window.addEventListener('message', function(event) {
    if (event.data.eventName === 'loadProgress') {
        let progress = parseInt(event.data.loadFraction * 100)
        $(".loadingScreen > .loading > .progress > .fill").css("width", `${progress}%`);
        // $(".loadingScreen > .loading > .progress ").css("background", `linear-gradient(to right, #fff ${progress}%, transparent ${progress}%)`)
    }
});