const gTTS = require("gtts");
const fs = require("fs");
const path = require("path");

const numbersEn = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
];

const numbersLg = [
    "Emu",
    "Bbiri",
    "Ssatu",
    "Nnya",
    "Ttaano",
    "Mukaaga",
    "Musanvu",
    "Munana",
    "Mwenda",
    "Kkumi",
    "Kkumi n'emu",
    "Kkumi nabbiri",
    "Kkumi nassatu",
    "Kkumi nannya",
    "Kkumi nattaano",
    "Kkumi na mukaaga",
    "Kkumi na musanvu",
    "Kkumi na munana",
    "Kkumi na mwenda",
    "Abiri",
];

const outputDir = path.join(__dirname, "audios");
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

numbersEn.forEach((eng, i) => {
    const lug = numbersLg[i];
    const combinedText = `${eng} ... ${lug}`;
    const gtts = new gTTS(combinedText, "en", 1);

    const filePath = path.join(outputDir, `${eng}.mp3`);
    gtts.save(filePath, function (err, result) {
        if (err) {
            console.error(`Error saving ${eng}.mp3:`, err);
        } else {
            console.log(`${eng}.mp3 ✓✓✓`);
        }
    });
});
