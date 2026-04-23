const btnSelect = document.getElementById('btnSelect');
const btnClean = document.getElementById('btnClean');
const btnRandom = document.getElementById('btnRandom');
const filePathDisplay = document.getElementById('filePathDisplay');
const statusDisplay = document.getElementById('status');

let selectedFilePath = null;

function setStatus(msg, isSuccess = true) {
    statusDisplay.textContent = `> ${msg}`;
    statusDisplay.className = isSuccess ? 'success' : 'error';
}

btnSelect.addEventListener('click', async () => {
    const filePath = await window.api.selectFile();
    if (filePath) {
        selectedFilePath = filePath;
        filePathDisplay.textContent = filePath;
        btnClean.disabled = false;
        btnRandom.disabled = false;
        setStatus("Hedef kilitlendi. İşlem seçiniz.");
    }
});

btnClean.addEventListener('click', async () => {
    setStatus("Exif temizleniyor...", true);
    btnClean.disabled = true;
    btnRandom.disabled = true;
    
    const result = await window.api.cleanMetadata(selectedFilePath);
    setStatus(result.message, result.success);
    
    btnClean.disabled = false;
    btnRandom.disabled = false;
});

btnRandom.addEventListener('click', async () => {
    setStatus("Sahte veriler enjekte ediliyor...", true);
    btnClean.disabled = true;
    btnRandom.disabled = true;

    const result = await window.api.randomizeMetadata(selectedFilePath);
    setStatus(result.message, result.success);

    btnClean.disabled = false;
    btnRandom.disabled = false;
});