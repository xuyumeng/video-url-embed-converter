export function embedUrlConvert(url) {
    if (url.match(/youtu/)) {
        const id = getYouTubeId(url);
        if (!id) {
            return null;
        }

        return `//www.youtube.com/embed/${id}`
    }

    if (url.match(/youku/)) {
        const id = getYouKuId(url);
        if (!id) {
            return null;
        }

        return `//player.youku.com/embed/${id}`
    }

    if (url.match(/bilibili/)) {
        const id = getBiliBiliId(url);
        if (!id) {
            return null;
        }

        return `//player.bilibili.com/player.html?aid=${id}&page=1`
    }

    if (url.match(/facebook/)) {
        const id = getFacebookId(url);
        if (!id) {
            return null;
        }

        return `//www.facebook.com/video/embed?video_id=${id}`
    }

    return null
}

function getYouTubeId(url) {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return null;
    }
}

function getYouKuId(url) {
    let regExp = /^.*(\/id_|\/embed\/)([a-zA-Z0-9=]*)/;
    let match = url.match(regExp);

    if (match && match[2].length === 17) {
        return match[2];
    } else {
        return null;
    }
}

function getBiliBiliId(url) {
    let regExp = /^.*(\/av)([a-zA-Z0-9=]*)/;
    let match = url.match(regExp);

    if (match && match[2].length > 5) {
        return match[2];
    } else {
        return null;
    }
}

function getFacebookId(url) {
    let regExp = /^.*(\/videos\/)([a-zA-Z0-9=]*)/;
    let match = url.match(regExp);

    if (match && match[2].length > 5) {
        return match[2];
    } else {
        return null;
    }
}
