// Տեսանյութերի ցուցակի զանգված
const videos = [
    {
        title: "Տեսանյութ 1 - Ինչպես սկսել",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Տեսանյութ 2 - Առաջադիմական Հմտություններ",
        url: "https://www.youtube.com/embed/3JZ_D3ELwOQ"
    },
    {
        title: "Տեսանյութ 3 - Վերջնական Հրահանգներ",
        url: "https://www.youtube.com/embed/l482T0yNkeo"
    }
];

// DOM էլեմենտների ընտրություն
const videoList = document.getElementById('videoList');
const modal = new bootstrap.Modal(document.getElementById('videoModal'));
const modalTitle = document.getElementById('modalTitle');
const modalVideo = document.getElementById('modalVideo');

// Տեսանյութերի ցուցակ բեռնելու ֆունկցիա
function loadVideos() {
    videos.forEach((video) => {
        const item = document.createElement('div');
        item.className = 'video-title';
        item.textContent = video.title;
        item.addEventListener('click', () => openVideo(video));
        videoList.appendChild(item);
    });
}

// Տեսանյութ բացելու ֆունկցիա
function openVideo(video) {
    modalTitle.textContent = video.title;
    modalVideo.src = video.url;
    modal.show();
}

// Մոդալը փակելիս տեսանյութը կանգնեցնել
document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
    modalVideo.src = "";
});

// Տեսանյութերը բեռնել էջի բեռնման պահին
window.onload = loadVideos;
