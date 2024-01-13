function count_vowels(word) {
    word = word.toLowerCase();
    let vowels = "aeiou";
    let vowel_counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word.charAt(i))) {
            vowel_counter++;
        }
    }
    return vowel_counter;
}

function count_consonants(word) {
    word = word.toLowerCase();
    let consonants = "bcdfghjklmnpqrstvwxyz";
    let cons_counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (consonants.includes(word.charAt(i))) {
            cons_counter++;
        }
    }
    return cons_counter;
}

function count_words(sentence) {
    let words = sentence.trim().split(/\s+/);
    return words.length;
}

function run() {
    let entry = document.getElementById("wordInput").value;
    let resultElement = document.getElementById("result");

    if (entry.trim() !== "") {
        let words = count_words(entry);
        let vowels = count_vowels(entry);
        let consonants = count_consonants(entry);
        document.getElementById("word").textContent = "Words: " + words;
        resultElement.textContent = "Vowels: " + vowels + " | Consonants: " + consonants;
    } else {
        document.getElementById("word").textContent = "";
        resultElement.textContent = "ERROR: Empty input";
    }
}