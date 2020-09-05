export default {
    port: process.env.PORT || 3333,
    folderStorage: process.env.URL_STORAGE || ".storage",
    pictureQuality: process.env.PICTURE_QUALITY || 80,
    secretyKey: process.env.SECRETY_KEY || '6006602690d3e32b444ae5254d13540e',
    publicRoutes: process.env.PUBLIC_ROUTES || {

    }
}