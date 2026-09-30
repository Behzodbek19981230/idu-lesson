let mevalar = ["Olma", "Anor", "Banan", "Nok", "Shaftoli", "Apelsin", "Mandarin", "Gilos", "Orik", "Ananas"];

let sortedMevalar = mevalar.sort((a, b) => b.localeCompare(a));
const root = document.getElementById("root");
root.innerHTML = sortedMevalar.map((meva) => `<p>${meva}</p>`).join("");